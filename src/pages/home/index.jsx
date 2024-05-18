import React, { useEffect, useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import Card from '../../components/molecules/cards';


function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    // fetchPets();
  }, []);

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

            {pets.map((pet) => (
              <Card key={pet.id} name={pet.name} age={pet.age} image={pet.image} />
            ))}
            {/* aqui será automatizada a listagem de pets */}


          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
