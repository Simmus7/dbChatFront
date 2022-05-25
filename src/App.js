import './App.css';
import {Formulario} from './Formulario';
import {Visualizador} from './Visualizador';

function App() {
  return (
    <body className="App">
      <header className="App-header">
        
          ¡Bienvenido a dbChat!
        
      </header>
      <div>
        <Formulario/>
        <Visualizador/>
      </div>
      <div className="App-footer">
        <h2>
          Proyecto Final Ingeniería Web
        </h2>
        <h2>
          Realizado por Simón Echeverri Castrillón y Camilo Zapata Cárdenas
        </h2>
        <h2>
          Documentación: <a href='https://github.com/Simmus7/dbChat' target='_blank'>Github</a>
        </h2>
      </div>
    </body>  
  );
}

export default App;
