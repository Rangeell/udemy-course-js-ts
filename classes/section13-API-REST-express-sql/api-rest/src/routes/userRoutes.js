import { Router } from 'express'; // Importando apenas o Router
import userController from '../controllers/UserController'; // Não importamos com letra maiúscula, pois a classe já é exportada instanciada
import loginRequired from '../middlewares/loginRequired'; // middleware que valida o token

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
Não é comum usar ".index" em rotas de criação. É comumente utilizado ".store" ou ".crete"
Não precisamos colocar '/users', pois já esta vindo o arquivo 'app.js'

*"Regra" do mercado:

  É comum usar até no máximo 5 métodos por controller (não é obrigatório, mas é o comum do mercado)

    1. Controller onde precisamos listar os usuários: `index` -> Normalmente é GET
      - `index` -> lista todos os usuários;

    2. Controller onde precisamos criar usuários: `store` ou `create` Normalmente é POST;
      - `store` -> cria um novo usuário;
      - `create` -> cria um novo usuário;

    3. Controller onde precisamos deletar usuários: `delete` Normalmente é DELETE;
      - `delete` -> deleta um usuário;

    4. Controller onde precisamos mostrar um usuário: `show` Normalmente é GET;
      - `show` -> mostra um usuário;

    5. Controller onde precisamos atualizar um usuário: `update` Normalmente é PATH ou PUT;
      - `update` -> atualiza um usuário;

  Caso um Controller esteja fazendo mais do que esses 5 métodos, algo provavelmente está errado. É o momento de avaliar a criação de um novo Controller para executar os métodos excedentes.
*/
