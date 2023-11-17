import { useState } from 'react';

import '../styles/App.css';
import Button from './Button';
import Hero from './Hero';
import Info from './Info';
import Subtitle from './Subtitle';
import Contact from './Contact';


function App() {
  const developer = {
    name:"Pepito",
    lastname:"Ruiz",
  };
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
      <Hero/>
        <h1>AVENTURES OF RICK AND MORTY</h1>
        <Subtitle subtitleWelcome="For experts only"/>
        <Subtitle subtitleWelcome="All worlds"/>
       <Button 
       titulo= "¿What is your favorite?"
       counter={counter}
       changeCounter={setCounter}

       />
       <Button titulo= "Boton verde"/>
       <h3>{counter}</h3>
       <Info ceo={developer} color="prueba"/>
       <Contact
       
        changeText={setText}
       />
       <p>Se ha buscado : <span>{text}</span></p>
       
       

      </header>
    </div>
  );
}

export default App;
