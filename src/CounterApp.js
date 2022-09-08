
import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'



function CounterApp({ value }) {


  const [counter, setCounter] = useState(value)
  console.log(counter)

  /* hanndle add */
  const handlerAdd = () => {
    setCounter (counter +1)
  }

  /* handler reset */
  const handlerReset = () => {
    setCounter (value)
  }


  /* handler substract */
const handlerSubstract = () => {
  setCounter (counter -1 )
}



  return (
    <div>
      <h2>Este es el valor del prop que he pasado del padre : {counter}</h2>
      <button onClick={handlerAdd}>+1</button>
      <button onClick={handlerReset}>Reset</button>
      <button onClick={handlerSubstract}>-1</button>
      {/* los handlers se podrían haber puesto como funciones en linea dentro de los botones */}

    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp
