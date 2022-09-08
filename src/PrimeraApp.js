import React, { Fragment } from "react"
import { ReactPropTypes } from "react"

const jayson = {
    nombre:"juan",
    apellido:"Poirot"
}

const PrimeraApp = ({intento1}) => {
    /* Esto es una desestrucyitracion esto es  cuando el componente padre te lo pasa? */
    return (
        <>
            <h1>{intento1}</h1>
            <p>Haciendo un desestructuracionpodemos recibir las propiuedades enviadas a este componente. </p>
        </>
    )
}


export default PrimeraApp;