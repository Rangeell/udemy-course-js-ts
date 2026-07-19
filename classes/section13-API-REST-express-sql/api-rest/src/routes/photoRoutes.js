// Módulos nativos sempre devem vir primeiro nas importações

import { Router } from 'express'; // Importando apenas o Router
import photoController from '../controllers/PhotoController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada

const router = new Router();

router.post('/', photoController.store);

export default router;
