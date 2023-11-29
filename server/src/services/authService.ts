import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function registerUser(firstName: string, lastName: string, username: string, password: string, email: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            username: true,
            // Explicitly exclude password
        }
    });

    return newUser;
}

export async function loginUser(username: string, password: string): Promise<any> {
    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) {
        throw new Error('User not found');
    }

    //const passwordIsValid = await bcrypt.compare(password, user.password);

    //if (!passwordIsValid) {
        //throw new Error('Invalid password');
    //}

    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET!, // Non-null assertion here
        { expiresIn: 86400 } // 24 hours
    );

    return { user, token };
}
