import React from 'react'
import './index.css'

const SideBarHome = () => {

    return (
        <>
            <div className='sidebar'>
                <a className='mb-10'><img src='./images/logo-sidebar.png' width='150'/></a>
                <a className='circle home' href='/'><img src='./images/home.png' width='40'></img></a>
                <a className='circle' href='/addPet'><img src='./images/pet-icon-sidebar.png' width='40'/></a>
                <a className='circle' href='/addAdoptPoint'><img src='./images/location-icon-sidebar.png' width='40'/></a>
            </div>
        </>
    )
}

export default SideBarHome;