import React from 'react';
import './index.css';

const Card = (age, image, name) => {
    return (
        <div className="card">
            <div className='card-border'>

                <img className='img' src={image} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{age}</h5>
                </div>
            </div>

        </div>
    );
};

export default Card;