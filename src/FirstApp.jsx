import PropTypes from 'prop-types';

const appInfo = {
  message: 'Bienvenido a CounterApp',
  author: 'Julián Cañas'
};

export const FirstApp = ({
  title = 'Incrementa, reduce y reinicia fácilmente',
  subTitle = 0,
  name = 'Julián Cañas'
}) => {
  return (
    <div className="intro">
      <h1>{title}</h1>
      <h3>{`Contador inicial: ${subTitle}`}</h3>
      <p>Desarrollado por: {name}</p>
      <code>{JSON.stringify(appInfo)}</code>
      <p>Haz clic en los botones para iniciar</p>
    </div>
  );
};

// Validación con PropTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
