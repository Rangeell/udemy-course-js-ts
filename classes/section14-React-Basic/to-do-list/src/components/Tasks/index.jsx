import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './task.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) { // Desestruturação do objeto props
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => ( // map que retona um (algo renderizado), como se fosse return () implícito

        <li key={index}>
          {tarefa}

          <span className="icons">

            <FaEdit
              onClick={(e) => handleEdit(e, index)} // Chama nosso método ao capturar o evento
              className="edit"
            />

            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>

        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
