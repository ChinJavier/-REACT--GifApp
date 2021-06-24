import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setcategorias}) => {

    // si dejo useState() el estado actual es undefined y va a tronar
    const [inputValue, setinputValue] = useState('');
    
    // el onChange se va a disparar cada vez que el input cambie
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // para que no recarge la página 
        e.preventDefault();

        // para no guardar nada vacio
        if (inputValue.trim().length> 2) {
            // como no tengo acceso a las categorías lo hago así
            //  estadoAnterior => nuevoValor
            setcategorias( cat => [inputValue, ...cat] );
            setinputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange= {handleInputChange}
            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setcategorias: PropTypes.func.isRequired
}

export default AddCategory
