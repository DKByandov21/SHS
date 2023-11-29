import { PrismaClient } from '@prisma/client';
import { User, UserCreationParams } from '../models/user';

const prisma = new PrismaClient();

export async function getUsers(): Promise<User[]> {
    return prisma.user.findMany();
}

export async function createUser(data: UserCreationParams): Promise<User> {
    const newUser = await prisma.user.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            username: data.username,
            password: data.password, // Consider hashing the password before storing it
        },
    });
    return newUser;
}

export async function updateUser(userId: number, data: UserCreationParams): Promise<User | null> {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            username: data.username,
            password: data.password,
        },
    });
    return updatedUser;
}

export async function deleteUser(userId: number): Promise<void> {
    await prisma.user.delete({
        where: { id: userId },
    });
}
