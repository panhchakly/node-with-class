import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './database';
const route = require('./routes/user');

export class Server {
    private app: any;

    constructor() {
        this.app = express();
        this.configurate();
        this.middlewares();
        this.routes();
        connectDB();
    }

    configurate() {
        this.app.set('port', 3000);
    }
    
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api', route);
    }

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is running on ' + 'http://localhost:' + this.app.get('port'));
        });
    }
}