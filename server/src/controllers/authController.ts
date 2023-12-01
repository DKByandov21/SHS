import { Body, Controller, Post, Route, Get, Middlewares, Request } from 'tsoa';
import { loginUser, registerUser as registerUserService } from '../services/authService';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../middleware/authMiddleware';

@Route('auth')
export class AuthController extends Controller {

    @Post('login')
    public async login(@Body() requestBody: { username: string, password: string }): Promise<any> {
        return loginUser(requestBody.username, requestBody.password);
    }

    @Post('register')
    public async register(@Body() requestBody: { firstName: string, lastName: string, username: string, password: string, email: string }): Promise<any> {
        // Use the registerUserService to avoid name conflict
        return registerUserService(requestBody.firstName, requestBody.lastName, requestBody.username, requestBody.password, requestBody.email);
    }

    @Middlewares(authenticateToken)
    @Get('profile')
    public async getProfile(@Request() request: any): Promise<any> {
        // Access user information from request.user
        return { user: request.user };
    }
}
