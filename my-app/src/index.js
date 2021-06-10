import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from "./components/Statistics";
import Button from "./components/button";

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const [puntos, setpuntos] = useState(0)

    const handleGood = () => {
        setGood(good+1)
        setpuntos(puntos+1)
    }

    const handleNeutral = () => {
        setNeutral(neutral+1)
        setpuntos(puntos+0)
    }

    const handleBad = () => {
        setBad(bad+1)
        setpuntos(puntos-1)
    }

    return (
        <div>
            <h1>give fedback</h1>

            <Button color="#0823E4" tamaño="30px" title="good" handleClick={handleGood} />
            <Button color="#E45408" tamaño="30px" title="neutral" handleClick={handleNeutral} />
            <Button color="#F70A0A" tamaño="30px" title="bad" handleClick={handleBad} />
            <hr/>

            <Statistics good={good} neutral={neutral} bad={bad} puntos={puntos} />
        </div>
    )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)


