import { Router } from 'express'; // Importando apenas o Router
import TokenController from '../controllers/TokenController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada

const router = new Router();

router.post('/', TokenController.store);

export default router;
