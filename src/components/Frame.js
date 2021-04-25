import Iframe from 'react-iframe-comm';
import React from 'react';

const Frame = () => {
    return (
        <div>
            <Iframe url="https://www.npmjs.com/package/react-iframe"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>

    );
}

export default Frame;

