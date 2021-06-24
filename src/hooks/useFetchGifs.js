import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';
// los customs hooks son una forma de extraer lógica de un componente
//     o lógica a reutilizar para que sea sencillo de usarla nuevamente

// este custom hook permite realizar el fetch e indicar cuándo está cargando
//      y cuando termino

// el use significa que es un hook. es una convención

// los hooks no son más que funciones 
// los hooks pueden tener un estado e indicarle a otros componentes cuándo
//     renderizarse porque algo cambio

// los customs hooks pueden llevar efectos para que no se ejecuten a cada rato

// LOS EFECTOS NO PUEDEN SER ASYNC

// el USEEFFECT SE DISPARA SOLO CUANDO CAMBIE LA CATEGORIA 
//              (en nuestro ejemplo no pasara)
// el USESTATE RENDERIZA CUANDO HAY UN CAMBIO EN EL ESTADO


//acá tenemos una lógica para hacer una carga automática
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        getGifs(category)
                .then( imgs => {


                    console.log('estoy en el hook')
                    setstate({
                        data: imgs,
                        loading: false
                    });

                    
                })
        //getGifs(category)
        //.then( setimages );
        //.then ( imgs => setImages(imgs))
    }, [category]);

    

    return state; // state es un arreglo {data: [], loading: true}
}