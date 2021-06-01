import React, { useEffect } from 'react';


const Residential = () => {
    useEffect( () => {
        document.title = 'ANPR residential monitoring app'
    });

    return (
        <div>
            <h1>ANPR monitoring app</h1>
            <h3>This is the residential page</h3>
        </div>
    );
};

export default Residential;