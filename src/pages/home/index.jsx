import React, { useEffect, useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import Card from '../../components/molecules/cards';


function Home() {

  return (
    <>


      <Header />

      <div className='container'>
        <img src="./images/green.png" id='green' alt='mancha verde' />
        <img src="./images/yellow.png" id='yellow' alt='mancha amarela' />
        <img src="./images/pink.png" id='pink' alt='mancha rosa' />
        <img src="./images/black.png" id='black' alt='mancha preta' />
        {/* Header */}

        {/* Sidebar */}
        <SideBarHome />





        {/* Container dos pets */}
        <div className='container-pets'>
          <div className="card-group">

            {/* aqui será automatizada a listagem de pets */}
            <Card />

          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
