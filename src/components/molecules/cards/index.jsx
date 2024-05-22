import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import { FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

const CardComponent = (petData) => {
    return (
        <Card style={{ height: '17.3rem', marginLeft: '40px', marginBottom: '30px', minWidth: '200px', maxWidth: '200px', background: 'linear-gradient(to right, #c0dff1, #caddf5)', boxShadow: '-1px 1px #1f1f1f', border: '1px solid rgb(0, 0, 0)', padding: '10px', textAlign: 'center', borderRadius: '1em' }}>
            <Card.Img variant="top" width={'300px'} height={'150px'} style={{ objectFit: 'cover', zIndex: 1, borderRadius: '1em' }} alt='background image' src={'images/black.png'} />

            <Card.Body>
                <b><Card.Title style={{ marginTop: '10px' }}>{petData.name}</Card.Title></b>
                <Card.Text style={{ fontSize: '18px', color: '#555' }}>
                    {petData.age}
                </Card.Text>
                <div className='div-button' style={{
                    justifyContent: 'center', gap: '10px', marginTop: '-15px'
                }}>
                    <button style={{ padding: '0 0 4px', postion: 'absolute', width: '12.5em', marginLeft: '-1.7em', backgroundColor: '#A7E4BC', border: '1px solid', borderRadius: '0 0 1em 1em', }}>Adotar</button>

                </div>
            </Card.Body >
        </Card >
    );
};

export default CardComponent;
