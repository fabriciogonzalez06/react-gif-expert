// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ categoria }) => {

    //useEffect solo se ejecuta una vez, es como en las clases el didMount
    // useEffect(() => {
    //    getGifs(categoria).then(setimages);
    // }, [categoria]);

    // const [images, setimages] = useState([]);

    const { data:images, loading }= useFetchGifs(categoria);
    




    return (
        <>
            <h1> {categoria} </h1>

            {loading && <p>Cargando..</p>  }
            <div className="card-grid" >
                {
                    images.map((img) => <GifGridItem key={img.id}  {...img} />)
                }
            </div>
        </>
    )
}

GifGrid.prototype={
    categoria:PropTypes.string.isRequired
}
