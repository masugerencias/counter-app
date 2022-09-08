

import React from 'react'
import PropTypes from 'prop-types'

/* hanndle add */
const handdleAdd = (e) => {
    console.log('otro masss')
}



function CounterApp({value}) {
  return (
    <div>
    <h2>Este es el valor del prop que he pasado del padre : {value}</h2>
<button onClick={ handdleAdd }>+1</button>
    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
