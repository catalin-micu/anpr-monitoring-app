import React, { useEffect } from 'react';
import { Footer, Header } from './../components/headerAndFooter';


const Residential = () => {
    useEffect( () => {
        document.title = 'ANPR residential monitoring app'
    });

    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    );
};

export default Residential;