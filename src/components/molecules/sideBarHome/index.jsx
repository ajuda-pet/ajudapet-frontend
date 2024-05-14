import React from 'react';
import './index.css';
const SideBarHome = () => {
    return (
        <>
            <div class="sidebar">
                <a href="#"><div className='circle home'></div>logo</a>
                <a href="#"><div className='circle'></div>About</a>
                <a href="#"><div className='circle'></div>Services</a>
                <a href="#"><div className='circle'></div>Contact</a>
            </div>

        </>
    )
}

export default SideBarHome;