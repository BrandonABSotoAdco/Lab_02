const button=(props) =>{
    return (
            <button style={{backgroundColor : props.color,fontSize:props.tamaño}} onClick={props.handleClick}>{props.title}</button>
    )
}

export default button
