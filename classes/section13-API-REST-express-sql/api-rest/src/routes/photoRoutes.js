// Módulos nativos sempre devem vir primeiro nas importações

import { Router } from 'express'; // Importando apenas o Router
import multer from 'multer';
import photoController from '../controllers/PhotoController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('photo'), photoController.store);

export default router;
