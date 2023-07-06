import React from 'react';
import homeVid from '../assets/newvid.mp4';

const Test = () => {
    return (
        <video autoPlay muted loop id="myVideo">
            <source src={ homeVid } type="video/mp4" preload="auto" />
        </video>
    );
}

export default Test;