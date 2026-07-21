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
    index: -1,
  };

  componentDidMount() { // Executa uma vez quando o componente é montado
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ // Atualiza o estado
      tarefas, // Tarefa recebe o valor de tarefas do localStorage
    });
  }

  componentDidUpdate(prevProps, prevState) { // Executa quando o componente sofre alteração
    const { tarefas } = this.state;

    if (tarefas !== prevState.tarefas) { // Só salva se as tarefas mudarem (forem diferente do estado inicial)
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state; // Tarefa adicionada no input

    novaTarefa = novaTarefa.trim();

    if (novaTarefa === '') return;
    if (tarefas.includes(novaTarefa)) return;

    // Cria um novo array mantendo as tarefas antigas
    const novasTarefas = [...tarefas];

    if (index === -1) { // Significa que não estamos editando uma tarefa

      // Atualiza o estado da aplicação e limpa o campo de texto
      this.setState({
        novaTarefa: '', // Reseta o valor do input
        tarefas: [...novasTarefas, novaTarefa], // Cria um novo array mantendo as tarefas antigas e adicionando a nova
      });
    } else {
      novasTarefas[index] = novaTarefa; // Recebe o texto do input (index veio da alteração do estado em handleEdit)

      this.setState({
        tarefas: [...novasTarefas],
        index: -1, // Seta o index de volta para -1 (volta ao modo criação)
      });
    }
  };

  handleChange = (e) => { // Método que atualiza o estado
    this.setState({ // Método da classe Component par alterar um state
      novaTarefa: e.target.value, // Captura o valor digitado no input
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index, // Seta o estado index com o index recebido
      novaTarefa: tarefas[index], // Faz com o que o input receba a tarefa com index recebido
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas]; // Copia o array para respeitar a imutabilidade

    novasTarefas.splice(index, 1); // Remove 1 item no índice especificado

    this.setState({
      tarefas: novasTarefas,
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
          {tarefas.map((tarefa, index) => ( // map que retonar um (algo renderizado), como se fosse return () implícito

            <li key={index}>
              {tarefa}

              <span className="icons">

                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />

                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}
