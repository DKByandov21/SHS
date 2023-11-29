import { Body, Controller, Post, Route } from 'tsoa';
import { loginUser, registerUser as registerUserService } from '../services/authService';

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
}
