import React from 'react';
import './More.css';
import moose from '../Assets/moose.png';
import helmet from '../Assets/helmet.png';
import guy from '../Assets/guy.png';
import ball from '../Assets/ball.png';

const More = () => {
    return (
        <div className='More'>
            <div className="Menu-left">
                <div>
                    <div className="More-icon">
                        <img src={moose} alt="" />
                    </div>
                </div>
            </div>
            <div className="Menu-right">
                <img src={helmet} alt="" className="small-image" />
                <img src={guy} alt="" className="small-image" />
                <img src={ball} alt="" className="small-image" />
                <div className='blurb'><h2>
                    Official Website of the best football team on the Island!<br />
                    The Newfoundland Moose!
                </h2></div>
            </div>
        </div>
    );
};

export default More;
