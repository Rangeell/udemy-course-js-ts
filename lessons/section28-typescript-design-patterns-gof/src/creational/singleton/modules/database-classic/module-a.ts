import { MyDataBaseClassic } from '../../db/my-database-classic';

const db = MyDataBaseClassic.instance;

db.add({ name: 'Breno', age: 24 });
db.add({ name: 'Maria', age: 25 });
db.add({ name: 'Eduarda', age: 28 });
db.show();

export { db }; // Exportamos a classe já instanciada
