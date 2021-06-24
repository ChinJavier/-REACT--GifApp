import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

// CUIDADO porque react renderiza el componente cuando hay un cambio
// entonces usamos el USEEFFECT que me va a permitir ejecutar cierto
//          codigo de manera condicional

export const GifGrid = ({category}) => {


    //const [count, setcount] = useState(0);
    // const [images, setimages] = useState([])

    // en el useEffect primero se le manda una func y luego un []
    //    de dependencias
    // si le mando [] solo se disparará una vez
    // SI LA CATEGORIA CAMBIA DEBERÍA VOLVER A EJECUTAR ESTO

    // useEffect(()=>{
    //     getGifs(category)
    //     .then( setimages );
    //     //.then ( imgs => setImages(imgs))
    // }, [category]);

    // el USEEFFECT SE DISPARA SOLO CUANDO CAMBIE LA CATEGORIA 
    //              (en nuestro ejemplo no pasara)
    // el USESTATE RENDERIZA CUANDO HAY UN CAMBIO EN EL ESTADO

    // SI QUEREMOS USAR EL CUSTOM HOOK
    const {data:images, loading} = useFetchGifs(category);



    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            <div className="card-grid">

                {loading && <p className="animate__animated animate__flash">Loading</p>}

                {
                    images.map( (img) => (
                        // Podemos enviar las propiedades con un spred
                        // ...img para lleguen allá y podes destructurarlo
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }


            </div>
        </>
    )
}

export default GifGrid;
