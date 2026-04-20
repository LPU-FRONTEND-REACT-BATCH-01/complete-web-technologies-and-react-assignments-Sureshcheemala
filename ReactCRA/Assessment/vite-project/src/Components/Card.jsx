const Card = (props) => {
    return (
        <div>
            <h1>{props.images.map((o)=> o)}</h1>
        </div>
    )
}

export default Card