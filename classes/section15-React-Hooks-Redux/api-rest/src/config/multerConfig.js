import { extname, resolve } from 'path';
import multer from 'multer';

// Função para gerar um número aleatório entre 10000 e 20000
const random = () => Math.floor(Math.random() * 10000 + 10000);

const oi = 20

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG!'));
    }
    return cb(null, true); // Se chegar aqui, o erro é nulo e usamos "true para o código passar pra frente
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },

    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
