const Form = ({person, setPerson, resetForm, addNewPerson}) => {

    const handlerInput = (ev)=>{
        const idInput = ev.target.id;
        const valueInput = ev.target.value;
        console.log(ev.target.value)
        setPerson({...person, [idInput]: valueInput})
        console.log(person)

    }

    const submitForm = (ev)=>{
        ev.preventDefault()

    }

    const handlerReset = () =>{
        resetForm();
    }

    return (
        <form onSubmit={submitForm}style ={{border: "1px solid white"}}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" onChange={handlerInput} value={person.name}/> <br/>
            <label htmlFor="lastname">Apellido</label>
            <input type="text" id="lastname" onChange={handlerInput} value={person.lastname}/> <br/>
            <input type="submit" value="ENVIAR" onClick={()=>addNewPerson(person)}/>
            <input type="button" value="RESET" onClick={handlerReset}/>
        </form>
    )

}

export default Form