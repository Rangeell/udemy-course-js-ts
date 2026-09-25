/*
O teste definitivo de um Singleton é verificar se alterações feitas em um ponto do sistema refletem em outro.
*/

import { MyDataBaseClassic } from '../../db/my-database-classic';

//// Executa o código do módulo a -> permite que tudo que exista no módulo a passe para toda a aplicação
import { db as dbFromModuleA } from './module-a';

const db = MyDataBaseClassic.instance;

db.add({ name: 'Roberta', age: 24 });
db.add({ name: 'Joana', age: 25 });
db.add({ name: 'Luíza', age: 28 });
db.show(); // Temos todos os usuários definidos tanto no module A quanto no Moduel B

console.log(db === dbFromModuleA);
