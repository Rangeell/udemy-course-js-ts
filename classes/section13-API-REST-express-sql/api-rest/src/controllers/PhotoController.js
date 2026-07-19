// Controller é quem faz o tratamento de erros

import multer from 'multer';
import multerConfig from '../config/multerConfig';

// Instancia o upload configurado com o campo 'foto'
const upload = multer(multerConfig).single('photo');

class PhotoController {
  async store(req, res) {
    return upload(req, res, (err) => { // Essa estrutura é do próprio multer -> Executa o upload manualmente para capturar possíveis erros

      if (err) { // Se houver algo dentro do parâmetro "err"
        return res.status(400).json({
          errors: [err.code || err.message],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
