import React from 'react'
// ojo al usar estilos porque se usa className!!!


const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src = {url} alt = {title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
