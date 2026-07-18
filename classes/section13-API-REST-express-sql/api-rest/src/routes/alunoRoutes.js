import { Router } from 'express'; // Importando apenas o Router
import alunoController from '../controllers/AlunoController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada

const router = new Router();

router.get('/', alunoController.index);

export default router;
