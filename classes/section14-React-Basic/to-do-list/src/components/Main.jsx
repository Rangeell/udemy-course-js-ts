import { Component } from "react"; // Importando o Componente do React (Para podermos usar o State)

// Form
import { FaPlus } from 'react-icons/fa'; // É tratado como um componente do React

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = { // Todas as chaves que estiverem aqui, serão o estado do nosso componente
    novaTarefa: '', // Toda vez que o estado mudar, a mudança vai ser refletida no render()
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state; // Tarefa adicionada no input
    novaTarefa = novaTarefa.trim();

    if (novaTarefa === '') return;
    if (tarefas.includes(novaTarefa)) return;

    // Cria um novo array mantendo as tarefas antigas
    const novasTarefas = [...tarefas];

    // Atualiza o estado da aplicação e limpa o campo de texto
    this.setState({
      novaTarefa: '', // Reseta o valor do input
      // Cria um novo array mantendo as tarefas antigas e adicionando a nova
      tarefas: [...novasTarefas, novaTarefa],
    });
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

        <form action="#" className="form" onSubmit={this.handleSubmit}>
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
              <span className="icons">
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
