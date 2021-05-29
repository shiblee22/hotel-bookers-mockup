import React from 'react';
import Navbar from './../Navbar/Navbar';
import Cover from './../Cover/Cover';
import Services from './../Services/Services';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Cover />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;