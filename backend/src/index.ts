// Import Request type
const express = require('express');
import { Response, Request } from "express"; 
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
// ... (your existing imports)

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/signup', async (req: Request, res: Response) => { // Explicitly define types for req and res
  try {
    console.log('Received signup request:', req.body);
    const { firstName, lastName, email, username, grade, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        username,
        grade,
        password: hashedPassword,
      },
    });
    console.log('User created:', newUser);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
