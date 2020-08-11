import React from 'react'
import PropTypes from 'prop-types';

function GifGridItem({ id, title, url }) {
    return (
        <div className="card1 animate__animated animate__bounce" >

            <img src={url} alt={title} />
            <p> {title} </p>
          
        </div>

    )
}

GifGridItem.propTypes = {
    title:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    
}

export default GifGridItem;
