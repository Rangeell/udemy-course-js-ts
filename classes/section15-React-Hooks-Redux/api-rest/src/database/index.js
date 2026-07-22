// Arquivo onde fazemos a conexão com a base de dados e centralizamos todos o models

import Sequelize from 'sequelize';
import databaseConfig from '../config/database'; // Nosso arquivo de configurações
import Photo from '../models/PhotoModel';

// Nossos models
import Aluno from '../models/AlunoModel';
import User from '../models/UserModel';

const models = [Aluno, User, Photo]; // Array contendo todos os nossos models

const connection = new Sequelize(databaseConfig); // Mandamos as configurações da nossa BD dentro do Sequelize()

models.forEach(model => model.init(connection)); // Para cada model, chamamos o método estático que recebe as configurações da nossa BD -> new Sequelize(databaseConfig) -> injetamos a conexão do sequelize em cada model

models.forEach(model => model.associate && model.associate(connection.models)); // Executa o nosso método estático baseado na sua existência (se existir, passa pra segunda operação e executa o método)
