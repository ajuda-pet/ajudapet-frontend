
import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import Card from '../../components/molecules/cards';
import PetForm from '../../components/molecules/petForm';
import pointsController from '../../controllers/points.contorller';

function AddPet() {
    pointsController.get().then((response) => {
        console.log(response.info);
    }
    )
    return (
        <>


            <Header />
            <img src="./images/green.png" id='green' alt='mancha verde' />
            <img src="./images/yellow.png" id='yellow' alt='mancha amarela' />
            <img src="./images/pink.png" id='pink' alt='mancha rosa' />
            <img src="./images/black.png" id='black' alt='mancha preta' />
            <div className='petForm'>
                <PetForm />
            </div>
            {/* Sidebar */}
            <SideBarHome />

        </>

    )
}

export default AddPet;