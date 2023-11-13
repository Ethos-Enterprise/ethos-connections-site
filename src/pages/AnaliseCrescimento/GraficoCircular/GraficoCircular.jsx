import React from 'react'

//grafico
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//css
import './GraficoCircular.css'

const GraficoCircular = ({ porcentagem }) => {
    return (
        <>
            <CircularProgressbar value={porcentagem} text={`${porcentagem}%`}
                styles={buildStyles({
                    textSize: '20px',
                    pathTransitionDuration: 0.1,
                    pathColor: `'#01abc3', ${porcentagem / 100})`,
                    textColor: '#01abc3',
                    trailColor: '#2f2f2f',
                })}
            />

        </>


    )
}

export default GraficoCircular