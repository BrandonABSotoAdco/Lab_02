import React, { useState} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Components/Button";

const App = (props) => {
    const [select, setselect] = useState(0)
    const [votos,setvotos] = useState([0])
    const [masvotos, setmasvotos] = useState(-1)

    const [contador, setContador] = useState(0)

    const handleNext = () => {
        setselect(getRandominimot(0,anecdotes.length))
        calcularmasvotos()
    }

    function calcularmasvotos(){
        console.log(votos)

        let index=0
        let mayor=0
        while (index < anecdotes.length) {
            if(votos[index]){
                if(votos[index]>mayor){
                    mayor=votos[index]
                    setmasvotos(index)
                }
            }
            index++
        }

    }

    const handleVotacion = () => {
        if(!votos[select]){
            votos[select]=0
        }
        votos[select]=votos[select]+1
        setvotos(votos)
        setContador(contador+1)
        calcularmasvotos()
    }

    function getRandominimot(minimo, maximo) {
        return Math.floor(Math.random() * (maximo - minimo)) + minimo;
    }


    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[select]}
            <br/>
            <p style={{color:"#C0392B"}}>has {votos[select]} votes</p>
            <br/>

            <Button color="#2ECC71" tamaño="25px" title="Vote" handleClick={handleVotacion} />
            <Button color="#F1C40F" tamaño="25px" title="Next Anecdote" handleClick={handleNext} />

            <br/>

            {
                (masvotos>=0) ?
                    <div>
                        <h1 >Anecdote with most votes</h1>
                        {props.anecdotes[masvotos]}
                        <br/>
                         <p style={{color:"#C0392B"}}>has {votos[masvotos]} votes</p>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )

}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}  />,
    document.getElementById('root')
)

