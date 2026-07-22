// Módulos nativos sempre devem vir primeiro nas importações

import loguinRequired from '../middlewares/loginRequired';
import { Router } from 'express'; // Importando apenas o Router
import photoController from '../controllers/PhotoController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada

const router = new Router();

router.post('/', loguinRequired, photoController.store);

export default router;
