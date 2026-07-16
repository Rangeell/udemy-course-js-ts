import 'dotenv/config'; // Injeta as variáveis do arquivo .env na memória do Node

import './src/database'; // Executa a conexão com o banco de dados automaticamente
import express from 'express';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

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
    this.app.use('/users', userRoutes); // Tudo que for '/users' vai ser tratado pelo arquivo de rotas do usuário
  }
}

export default new App().app; // Exportamos diretamente a instância do express (this.app)
