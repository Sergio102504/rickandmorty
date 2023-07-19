import rickandmortyimage from "./img/rickandmorty.png"
import './App.css';
import Characters from "./components/Characters";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);
  const [location, setLocation] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const api2 = await fetch ('https://rickandmortyapi.com/api/location');
    const locationApi = await api2.json();
    const characterApi = await api.json();
    //console.log(characterApi);
    setCharacters(characterApi.results);
    setLocation(locationApi.results);
  };
  //console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} location={location} />
        ) : (
          <>
            <img src={rickandmortyimage} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar personaje</button>
          </>
        )}


      </header>
    </div>
  );
}


//[ ]

//const reqApi significa una array function para hacer el llamado a un api 
//await trae toda la informacion que esta en la api que vamos a llamar
//fetch sincroniza y hace la solicitud de manera sincronica hace el llamado

//const characterApi = await api.json(); Llamaria el arreglo del api que contiene toda la informacion 
// de cada persona de rick and morty

//Un arreglo de digamos 49 elementos etc

/* IMPLEMENTACION DE TERNARIOS PARA MEJORAR LA EXPERIENCIA DE USUARIO 
  se le llama al componente y se le pasa el props

*/

export default App;
