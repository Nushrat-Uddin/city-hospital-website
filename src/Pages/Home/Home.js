import React from 'react';
import Consultants from '../Consultants/Consultants';
import Departments from '../Departments/Departments';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Consultants></Consultants>
            <Services></Services>
            <Departments></Departments>
        </div>
    );
};

export default Home;