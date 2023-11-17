const Contact = ({text, changeText})=>{


    const handelInput = (event) => {
        changeText(event.target.value)
    }
    return (<>


        <input type="text" onChange={handelInput}/>
    </>

    )

}

export default Contact