import { MyDataBaseIIFE } from '../../db/my-database-iife';

const db = MyDataBaseIIFE; // Não precisamos obter a instância

db.add({ name: 'Breno', age: 24 });
db.add({ name: 'Maria', age: 25 });
db.add({ name: 'Eduarda', age: 28 });
db.show();

export { db }; // Exportamos a classe já instanciada
