export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export interface UserCreationParams {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}
