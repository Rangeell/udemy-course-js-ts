import { Router } from 'express'; // Importando apenas o Router
import homeController from '../controllers/HomeController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada

const router = new Router();

router.get('/', homeController.index);

export default router;
