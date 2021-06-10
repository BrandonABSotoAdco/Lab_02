import statistic from "./statistic";
import React from "react";

const statistics=(props) =>{

    return (
        <div>
            <h1>statistics</h1>
            {
                (props.good+props.neutral+props.bad)==0 ?
                <p>No feedback given </p>
            :
                <div>

                    <statistic color="#0823E4" tamaño="25px" text="good" value={props.good} />
                    <statistic color="#E45408" tamaño="25px" text="neutral" value={props.neutral} />
                    <statistic color="#F70A0A" tamaño="25px" text="bad" value={props.bad} />
                    <statistic color="#000" tamaño="25px" text="all" value={props.good + props.neutral + props.bad} />
                    <statistic color="#000" tamaño="25px"text="average" value={props.puntuacion / (props.good + props.neutral + props.bad)} />
                    <statistic color="#000" tamaño="25px" text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100} />

                </div>

            }
        </div>
    )
}

export default statistics
