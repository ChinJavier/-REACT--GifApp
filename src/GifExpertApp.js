import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


// cómo crear una lista en el html usando un arreglo que tengo en el js
// podemos usar el .map, es tipo un ciclo y ahí podemos retornar etiquetas
//         pero cada hijo debe tener una llave única key={clave}
//         NO COLOCAR EL INDICE COMO KEY
const GifExpertApp = props => {

    // NO SE DEJA QUEMADO PORQUE NO SÉ SI LUEGO QUIERA CAMBIAR ALGO
    //const categorias = ['Valorant', 'Bob Esponja', 'Barcelona']

    // Entonces debemos usar el USESTATE
    // cuando cambie el estado entonces REACT se va a dar cuenta y va a 
    //        renderizar todo
    const [categorias, setcategorias] = useState( ['VALORANT GAME']);

    // const handleAdd = () => {
    //     setcategorias( [...categorias, 'Los padrinos magicos']);
    //     //               estado anterior y se retorna el nuevo estado
    //     //setcategorias( cats => [...cats, 'Los padrinos magicos'] );
    // }

    // si quiero mandar a llamar a otro componente es con <Componente />
    // LE PUEDO MANAR UNA FUNCIÓN A MI HIJO PARA QUE MODIFIQUE MI ESTADO
    //    recordando que se puede enviar por referencia
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategorias={setcategorias}/>
            <hr/>

            {/*<button onClick={handleAdd}> AGREGAR </button>*/}

            <ol>
                {
                    categorias.map( categoria => {
                        return <GifGrid
                                    key={categoria}
                                    category={categoria} 
                                />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
