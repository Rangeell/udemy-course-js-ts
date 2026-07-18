import { Router } from 'express'; // Importando apenas o Router
import alunoController from '../controllers/AlunoController'; // Não importamos com letra maiúscula, pois a classe já vai exportada instanciada
import loguinRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', loguinRequired, alunoController.store);
router.put('/:id', loguinRequired, alunoController.update);
router.delete('/:id', loguinRequired, alunoController.delete);

export default router;
