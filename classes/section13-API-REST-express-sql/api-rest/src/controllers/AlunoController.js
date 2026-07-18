import Aluno from '../models/AlunoModel';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.status(200).json(alunos);
  }
}

export default new AlunoController();
