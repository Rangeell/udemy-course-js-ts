// Precisamos usar commonjs nesse arquivos
require('dotenv').config(); // Injeta as variáveis do arquivo .env na memória do Node

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true, // Habilita a criação automática dos campos `created_at` e `updated_at`.
    underscored: true, // Converte camel-case para snake-case
    underscoredAll: true, // Converte camel-case para snake-case
    createdAt: 'created_at', // Corrige caso o camel-case não seja convertido
    updatedAt: 'updated_at', // Corrige caso o camel-case não seja convertido
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
