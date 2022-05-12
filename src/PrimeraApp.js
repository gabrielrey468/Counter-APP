import React from 'react';
import PropTypes  from 'prop-types';

const CounterApp = ({ CounterApp, value }) => {

    //const saludo = ['Hola mudo es Gabriel']

    //console.log(props)

    return (
        <>
            <h1> { CounterApp } </h1>
            { /*<pre> {JSON.stringify.( saludo, null, 3 ) } </pre>*/ }
            <p> { value } </p>
        </>
    )
}

CounterApp.propTypes = {
    CounterApp: PropTypes.string.isRequired
}

CounterApp.defaultProps = {
    value: 'Esta es mi aplicacion'
}

export default CounterApp