import Field from './components/Field';
import './App.scss';

const App = () => {
  const cells = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  return (
    <div className="app">
      <h1>Game of life</h1>
      <Field cells={cells} />
    </div>
  );
}

export default App;
