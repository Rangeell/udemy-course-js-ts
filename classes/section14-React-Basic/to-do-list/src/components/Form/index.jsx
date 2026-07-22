import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa'; // É tratado como um componente do React
import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) { // Desestruturação do objeto props
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>

      <input
        onChange={handleChange} // Chama nosso método ao capturar o evento
        type="text"
        value={novaTarefa}
      />

      <button type="submit">
        <FaPlus />
      </button>

    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
