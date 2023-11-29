const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
import express, { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

declare module 'express' {
  interface Request {
    user?: any; 
  }
}
const authenticateToken = (err:any,req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

   jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post('/signup', async (req, res) => {
  const {  firstName, lastName, email, username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user in the database
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,

    },
  });

  res.json({ user });
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user in the database
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Check password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ message: 'Invalid password' });

  // Generate and send token
  const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key');
  res.json({ token });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
