import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, CardGroup } from 'react-bootstrap'
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import CardComponent from '../../components/molecules/cards';
import petController from '../../controllers/pet.controller';
import Form from 'react-bootstrap/Form';
import './index.css';

function Home() {
  const [pets, setPets] = useState([]);

  const dict = {
    'BABY': ' Bebê',
    'ADULT': 'Adulto',
    'OLD': 'Idoso',
  }
  useEffect(() => {
    petController.get().then((response) => {
      setPets(response);
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
        <SideBarHome/>
        {/* Container dos pets */}
        

        <Container className='mt-5 ml-5 container-pets p-3'>
          <Row>
            <Col xs={12}>
              <Form.Select aria-label="Default select example" className='select p-2'>
                <option>🎂 Idade</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col xs={6}>
              <Form.Select aria-label="Default select example" className='p-2'>
                <option>📏 Tamanho</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col xs={6}>
              <Form.Select aria-label="Default select example" className='p-2'>
                <option>📏 Cidade</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className='mx-3'>
            <Button variant='secondary' className='d-flex align-items-center justify-content-center text-center px-5 mt-4 w-100'>
              <span class="material-symbols-outlined">
                filter_alt
              </span>
              <span>
                Filtrar
              </span>
            </Button>
          </Row>
          
          <hr class='my-4 bg-primary'/>

          <CardGroup className='mt-5' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            <Row>
                {pets && pets.map((pet) => (
                  <>
                  <Col md={3} sm={6}>
                    <CardComponent key={pet.id} pet={pet} />
                  </Col>
                  </>
                ))}
            </Row>
          </CardGroup>

        </Container>
      </div >
    </>
  );
}

export default Home;
