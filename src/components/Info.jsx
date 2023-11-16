const Info =({ceo, color})=>{

    return (
        <p className={color}>
            Developer: {ceo.name} Apellido: {ceo.lastname}
        </p>
    )

}

export default Info