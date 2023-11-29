import { Body, Controller, Get, Post, Route, Put, Delete, Path } from 'tsoa';
import { User, UserCreationParams } from '../models/user';
import { getUsers, createUser, updateUser, deleteUser } from '../services/userService';

@Route('users')
export class UserController extends Controller {

    @Get()
    public async getUsers(): Promise<User[]> {
        return getUsers();
    }

    @Post()
    public async createUser(@Body() requestBody: UserCreationParams): Promise<User> {
        this.setStatus(201); // set return status 201
        return createUser(requestBody);
    }

    @Put('{userId}')
    public async updateUser(@Path() userId: number, @Body() requestBody: UserCreationParams): Promise<User | null> {
        return updateUser(userId, requestBody);
    }

    @Delete('{userId}')
    public async deleteUser(@Path() userId: number): Promise<void> {
        return deleteUser(userId);
    }
}
