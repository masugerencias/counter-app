
import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'



function CounterApp({ value }) {


  const [counter, setCounter] = useState(0)
  console.log(counter)

  /* hanndle add */
  const handdleAdd = () => {
    setCounter (counter +1)
  }
  return (
    <div>
      <h2>Este es el valor del prop que he pasado del padre : {counter}</h2>
      <button onClick={handdleAdd}>+1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp
