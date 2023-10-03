import './cardImage.css'
import Image from 'next/image'
import React from 'react';
import PropTypes from 'prop-types';
import imageSrc from './assets/1.jpg'

export const CardImage = ({image, setImageDetails}) => {
    return (
        <div className={'cardWrapper'} onClick={() => setImageDetails && setImageDetails(image)}>
            <Image
                src={image.path} 
                alt={image.alt} 
                fill={true}
                className='image'
            />
        </div>
    )
}

CardImage.propType = {
    image: PropTypes.object,
    setImageDetails: PropTypes.func
}

CardImage.defaultProps = {
    image: {
        width: 1636,
        height: 2545,
        path: imageSrc,
        alt: "street view"
    }
}
