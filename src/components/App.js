import { useState } from 'react';

import '../styles/App.css';
// import Button from './Button';
// import Hero from './Hero';
// import Info from './Info';
// import Subtitle from './Subtitle';
// import Contact from './Contact';
import Form from './Form';
import CardPreview from './CardPreview';


function App() {
  // const developer = {
  //   name:"Pepito",
  //   lastname:"Ruiz",
  // };
  // const [counter, setCounter] = useState(0);
  // const [text, setText] = useState("");

  const initial = {
    name:"",
    lastname:"",
  };
  const [person,setPerson] = useState(initial);

  const [allPerson, setALLPerson] = useState([]);

  const addNewPerson = (newPerson)=>{
    setALLPerson([...allPerson, newPerson]);
  };

  const resetForm = ()=>{
  setPerson(initial);
};
  
  return (
    <div className="App">
      <header className="App-header">
      {/* <Hero/>
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
       <p>Se ha buscado : <span>{text}</span></p> */}
       
       <Form 
       person={person} 
       setPerson={setPerson}
        resetForm={resetForm}
        addNewPerson={addNewPerson}  
        />
       <CardPreview person={person}/>

      </header>
    </div>
  );
}

export default App;
