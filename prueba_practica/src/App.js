import React from 'react';
import './App.css';

class DetalleUsuario extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <p>Suerte :3</p>
        <button>
          Actualizar usuario 
        </button> 
      </div>
    );
  }
}

class InfoUsuarios extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <DetalleUsuario/>
        <DetalleUsuario/>
        <DetalleUsuario/>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <InfoUsuarios/>
    </div>
  );
}

export default App;
