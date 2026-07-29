import 'dotenv/config'; // Injeta as variáveis do arquivo .env na memória do Node
import './database'; // Executa a conexão com o banco de dados automaticamente

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';

const whiteList = [ // Lista de origens que podem utilizar a nossa API REST
  'http://localhost:3001',
  'http://localhost:5173',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) { // Se for undefined (origin não existe) ou estiver dentro da whiteList, permite acesso à origem
      callback(null, true); // true permite que a origin seja atendida
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' }, }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes); // Tudo que for '/users' vai ser tratado pelo arquivo de rotas do usuário
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app; // Exportamos diretamente a instância do express (this.app)
