// Arquivo onde fazemos a conexão com a base de dados

import Sequelize from 'sequelize';
import databaseConfig from '../config/database'; // Nosso arquivo de configurações

// Nossos models
import Aluno from '../models/AlunoModel';
import User from '../models/UserModel';

const models = [Aluno, User]; // Array contendo todos os nossos models

const connection = new Sequelize(databaseConfig); // Mandamos as configurações da nossa BD dentro do Sequelize()

models.forEach(model => model.init(connection)); // Para cada model, chamamos o método estático que recebe as configurações da nossa BD -> new Sequelize(databaseConfig) -> injetamos a conexão do sequelize em cada model
