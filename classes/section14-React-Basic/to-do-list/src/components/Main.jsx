import { Component } from "react";
import './Main.css'

export default class Main extends Component {
  state = { // Todas as chaves que estirem aqui, serão o estado do nosso componente
    novaTarefa: '', // Toda vez que o estado mudar, a função render vai ser chamdada
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render() {
    // const { novaTarefa } = this.state

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" method="post">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
