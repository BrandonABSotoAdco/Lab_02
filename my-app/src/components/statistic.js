const statistic=(props) =>{
    return (
        <div>
            <p style={{color : props.color,fontSize:props.tamaño}} >{props.text}  {props.value}</p>
        </div>
    )
}

export default statistic
