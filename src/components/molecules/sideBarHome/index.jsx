import React from 'react';
import './index.css';

const SideBarHome = () => {

    return (
        <>
            <div className="sidebar">
                <a href="/"><div className='circle home'>Home</div></a>
                <a href="/addPet"> <div className='circle'>+Pet</div></a>
                <a href="/addAdoptPoint"><div className='circle'>+Point</div></a>
                <a href="/"><div className='circle'></div></a>
            </div>

        </>
    )
}

export default SideBarHome;