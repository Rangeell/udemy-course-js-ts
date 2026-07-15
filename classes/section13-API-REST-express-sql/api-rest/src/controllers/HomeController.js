import Aluno from '../models/AlunoModel';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Breno',
        sobrenome: 'Rangel',
        email: 'brenorangel@email.com',
        idade: 23,
        peso: 80,
        altura: 1.65,
      });
      res.json({ novoAluno });
    } catch (e) {
      res.status(400).json({ errors: e.message });
    }
  }
}

export default new HomeController();
