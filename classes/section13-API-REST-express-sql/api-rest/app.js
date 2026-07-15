import dotenv from 'dotenv';
dotenv.config();

import './src/database'; // Executa a conexão com o banco de dados automaticamente
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // Exportamos diretamente a instância do express (this.app)
