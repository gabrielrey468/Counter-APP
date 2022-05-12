import React, { useState } from 'react';
import PropTypes  from 'prop-types';

const CounterApp2 = ({ value = 10 }) => {

    //const saludo = ['Hola mudo es Gabriel']

    //console.log(props)

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        setCounter(counter + 1)
        //setCounter( (c) => c + 1 )
    }

    const handleAdd2 = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }


    return (
        <>
            <h1> CounterApp2 </h1>
            <p> { counter } </p>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd2 }>-1</button>
        </>
    )
}

CounterApp2.propTypes = {
    value: PropTypes.number
}


export default CounterApp2