import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes'; // Generated by tsoa
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json'; // Generated by tsoa
import session, { SessionData, Session } from 'express-session';
import jwt from 'jsonwebtoken';

interface CustomSessionData extends SessionData {
    regenerate?: (cb: (err?: any) => void) => void;
    save?: (cb: (err?: any) => void) => void;
}

interface CustomRequest extends Request {
    session: CustomSessionData & Session & Partial<SessionData>;
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
    session({
        secret: 'your-secret-key',
        resave: true,
        saveUninitialized: true,
    })
);

app.use((req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.session && !req.session.regenerate) {
        req.session.regenerate;

        // = (cb: (err?: any) => void) => {
        // cb();
        };
    if (req.session && !req.session.save) {
        req.session.save;

        // = (cb: (err?: any) => void) => {
        // cb();
        };
    }
    //next();
);

app.use((req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'your-jwt-secret', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next();
    });
});

RegisterRoutes(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
