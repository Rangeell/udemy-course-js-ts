// Controller é quem faz o tratamento de erros

import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/PhotoModel';

// Instancia o upload configurado com o campo 'foto'
const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => { // Essa estrutura é do próprio multer -> Executa o upload manualmente para capturar possíveis erros

      if (err) { // Se houver algo dentro do parâmetro "err"
        return res.status(400).json({
          errors: [err.code || err.message],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Photo.create({ originalname, filename, aluno_id });

        return res.json(foto);

      } catch (e) {
        console.error(`Deu erro no PhotoController: ${e.message}`);
        return res.status(400).json({
          errors: ['Aluno inexistente!'],
        });
      }

    });
  }
}

export default new PhotoController();
