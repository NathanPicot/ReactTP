import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function App() {
  const [objectif, setObjectif] = useState([])
  const [newObjectif, setNewObjectif] = useState("");

  const addObjectif = (e) => {
    e.preventDefault();
    if (newObjectif) {
      setObjectif([...objectif, newObjectif]);
      setNewObjectif("");
    }
  };

  const removeObj = (remove) => {
    setObjectif(objectif.filter(objectif => objectif !== remove))
    console.log(objectif);
    console.log(remove);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code className="App-text">src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <form onSubmit={addObjectif}>
          <input
              name="objectif"
              placeholder="Add"
              value={newObjectif}
              onChange={(e) => setNewObjectif(e.target.value)} // Met à jour l'input
          />
          <button type="submit">Adds</button>
        </form>
        <ul>
          {objectif.map((obj, index) => (
              <li key={index}>{obj}
                <button onClick={() => removeObj(obj)}>X</button>
              </li>

          ))}

        </ul>
      </header>
    </div>
  );
}

export default App;
