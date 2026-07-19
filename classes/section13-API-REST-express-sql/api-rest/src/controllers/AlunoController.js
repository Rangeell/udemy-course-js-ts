import Aluno from '../models/AlunoModel';
import Photo from '../models/PhotoModel';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo, // Para funcionar precisa criar uma relação do aluno para foto também
        attributes: ['filename'], // Atributos das fotos
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não encontrado'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [[Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      res.json({ aluno });

    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message), // Erro que lê nossas mensagens do Model
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não encontrado!'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });

    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não encontrado!'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado!'],
        });
      }

      const newAluno = await aluno.update(req.body);
      return res.json(newAluno);

    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new AlunoController();
