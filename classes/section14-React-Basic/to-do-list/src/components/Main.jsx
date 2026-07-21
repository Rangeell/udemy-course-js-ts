import { Component } from "react"; // Importando o Componente do React (Para podermos usar o State)

// Form
import { FaPlus } from 'react-icons/fa'; // É tratado como um componente do React

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = { // Todas as chaves que estiverem aqui, serão o estado do nosso componente
    novaTarefa: '', // Toda vez que o estado mudar, a mudança vai ser refletida no render()
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

  handleChange = (e) => { // Método que atualiza o estado
    this.setState({ // Método da classe Component par alterar um state
      novaTarefa: e.target.value, // Captura o valor digitado no input
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" method="post" className="form">
          <input
            onChange={this.handleChange} // Chama nosso método ao capturar o evento
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, i) => ( // map que retonar um (algo renderizado), como se fosse return () implícito
            <li key={i}>
              {tarefa}
              <div className="icons">
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
