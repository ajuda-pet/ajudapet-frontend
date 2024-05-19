import React from 'react';
import './index.css';

const Card = (petData) => {
    return (
        <div className="card">
            <div className='card-border'>

                <img className='img' src={petData.image} alt={`${petData.name}`} />
                <div className="card-body">
                    <h5 className="card-title">{petData.name}</h5>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{petData.age}</h5>
                </div>
            </div>

        </div>
    );
};

export default Card;