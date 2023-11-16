
import '../styles/App.css';
import Button from './Button';
import Hero from './Hero';
import Info from './Info';
import Subtitle from './Subtitle';

function App() {
  const developer = {
    name:"Pepito",
    lastname:"Ruiz",
  };
  return (
    <div className="App">
      <header className="App-header">
      <Hero/>
        <h1>AVENTURES OF RICK AND MORTY</h1>
        <Subtitle subtitleWelcome="For experts only"/>
        <Subtitle subtitleWelcome="All worlds"/>
       <Button titulo= "Boton rojo"/>
       <Button titulo= "Boton verde"/>
       <Info ceo={developer} color="prueba"/>
       
       

      </header>
    </div>
  );
}

export default App;
