import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post('/register', async (req, res) => {
  const userData = req.body;
  console.log("Received data:", userData);
  try {
    
    
   

    const newUser = await prisma.user.create({
      data: {
        firstName:userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        username:userData.username,
        grade:userData.grade,
        password:userData.password // Note: You should hash the password before storing it in the database
      },
    });

    res.status(200).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



