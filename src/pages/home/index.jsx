import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap'
import Header from '../../components/molecules/header'
import SideBarHome from '../../components/molecules/sideBarHome'
import groupController from '../../controllers/group.controller'
import Load from '../../components/molecules/load/Load'

import './index.css'
import GroupCard from '../../components/molecules/GroupCard/GroupCard';

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [groups, setGroups] = useState([])

  useEffect(() => {
    groupController.get().then(response => {
      if (response && response.success) {
        setGroups(response.info.groups)
        setLoading(false)
      }
    })
  }, [])

  return (
    <>
      { !loading && <div>
        {/* Header */}
        <Header />
        <center>/
          <img style={{ borderRadius: '40px' }} className='d-none d-sm-flex mt-1' src='./images/donation-banner.png' height='450' width='1700'></img>
          </center>

        <div className='container'>
          <img src="./images/green.png" id='green' alt='mancha verde' />
          <img src="./images/yellow.png" id='yellow' alt='mancha amarela' />
          <img src="./images/pink.png" id='pink' alt='mancha rosa' />
          <img src="./images/black.png" id='black' alt='mancha preta' />


          {/* Sidebar */}
          <SideBarHome page={'/'}/>
        </div >

        <div className='px-3'>
            <Container className='mt-5 ml-5 container-pets p-3 mb-5'>
              <h2> Grupos Cadastrados</h2>
              <hr className='my-4 bg-primary' /> 

              <CardGroup className='mt-5' >
                <Row style={{ minWidth: '100%' }}>
                  {groups && groups.map((group) => {
                    if (group.pix) {
                      return (
                      <Col md={4} sm={6}>
                        <GroupCard key={group.id} group={group} />
                      </Col>
                      )
                    }
                  })}
                </Row>
              </CardGroup>

            </Container>

        </div>
      </div> }

      { loading && <Load></Load> }
    </>
  )
}

export default Home;
