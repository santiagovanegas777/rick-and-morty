const CardPreview = ({person}) =>{
    console.log(person)
    return(
        <section>
            <p>{person.name} {person.lastname}</p>
        </section>
    )
}

export default CardPreview