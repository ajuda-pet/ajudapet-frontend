import React, { useEffect, useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import CardComponent from '../../components/molecules/cards';
import petController from '../../controllers/pet.controller';


function Home() {
  const [pets, setPets] = useState([]);

  const dict = {
    'BABY': ' Bebê 🎈',
    'ADULT': 'Adulto 🎈',
    'OLD': 'Idoso 🎈',
  }
  useEffect(() => {
    petController.get().then((response) => {
      setPets(response);
      console.log(response)
    });
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
          <div className='Filter'>


            <h1 style={{ marginLeft: '3.3em' }}>Filtros</h1>

            <div className='filter-group'>



              <select name='age' id='age' style={{ marginRight: '2em' }}>

                <option value='0' >Idade</option>

                <option value='1'>Filhote</option>

                <option value='2'>Adulto</option>

                <option value='3'>Idoso</option>

              </select>

              <select name='size' id='size' >

                <option value='0'>Porte</option>

                <option value='1'>Pequeno</option>

                <option value='2'>Médio</option>

                <option value='3'>Grande</option>

              </select>

            </div>
          </div>
          <hr style={{ width: ' 100%' }} />

          <div className="card-group">

            {pets && pets.map((pet) => (
              <>
                <CardComponent key={pet.id} name={pet.name} age={
                  dict[pet.age]
                } image={pet.picture} />
              </>
            ))}
            {/* aqui será automatizada a listagem de pets */}


          </div>
        </div>
      </div >
    </>

  );
}

export default Home;
