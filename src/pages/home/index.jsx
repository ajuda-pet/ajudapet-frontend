import React, { useEffect, useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';



function Home() {
  return (
    <>
      <Header />
      <SideBarHome />
    </>
  );
}

export default Home;
