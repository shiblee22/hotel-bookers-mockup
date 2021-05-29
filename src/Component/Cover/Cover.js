import React from 'react';
import './Cover.css'
import cover from '../Images/bg.png'
const Cover = () => {
    return (
        <div>
            <img src={cover} class="img-fluid cover" alt="Responsive image"/>
            {/* <div class="centered">
                <span style={{color: 'green', fontSize:'100px', fontweight: '700'}}>Hotel Bookers</span>
                <p style={{fontSize: '40px'}}>A great choice for you,
                    Book your hotel immediately
                </p>
            </div> */}
        </div>
    );
};

export default Cover;