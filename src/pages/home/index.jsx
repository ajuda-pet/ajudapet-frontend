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
        <div className='container'>

          {/* Sidebar */}
          <SideBarHome page={'/'}/>
        </div >

        <div className='px-3'>
            <Container className='mt-5 ml-5 container-pets p-3 mb-5'>
              <h2> 
                <img src='./images/group-icon.png' width='50'></img> &nbsp;
                <span>Grpos Cadastrados</span>
              </h2>
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
