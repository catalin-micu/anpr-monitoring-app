import React, { useEffect } from 'react';


const Commercial = () => {
    useEffect(() => {
        document.title = 'ANPR commercial monitoing app';
    });

    return (
        <div>
            <h1>ANPR monitoring app</h1>
            <h3>This is the commercial page</h3>
        </div>
    );
};

export default Commercial;