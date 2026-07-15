import Sequelize from 'sequelize';
import databaseConfig from '../config/database'; // Nosso arquivo de configurações
import Aluno from '../models/AlunoModel'; // Nosso model Alunos

const models = [Aluno]; // Array contendo todos os nossos models

const connection = new Sequelize(databaseConfig); // Mandamos as configurações da nossa BD dentro do Sequelize()

models.forEach(model => model.init(connection)); // Para cada model, chamamos o método estático que recebe as configurações da nossa BD -> new Sequelize(databaseConfig) -> injetamosa a conexão do sequelize em cada model
