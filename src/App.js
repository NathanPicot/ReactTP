import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ObjectifForm from './ObjectifForm/ObjectifForm';
import ObjectifList from './ObjectifList/ObjectifList';


function App() {
  const [objectif, setObjectif] = useState(["Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const addObjectif = (newObjectif) => {
    if (newObjectif) {
      setObjectif([...objectif, newObjectif]);
    }
  };

  const removeObj = (remove) => {
    setObjectif(objectif.filter(objectif => objectif !== remove));
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
          Ajout des objectifs :

          {/* Formulaire d'ajout d'objectif */}
          <ObjectifForm addObjectif={addObjectif} />

          {/* Liste des objectifs */}
          <ObjectifList objectif={objectif} removeObj={removeObj} />
        </header>
      </div>
  );
}

export default App;
