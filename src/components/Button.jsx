

const Button =({titulo, counter,changeCounter})=>{
    
    const handelClick =()=>{
        console.log("Me han Clicado")
        changeCounter(counter + 1)
    }

    
    return(
        <>
        <button onClick={handelClick}>{titulo}</button>
        
     
        
        </>

    )
}

export default Button;