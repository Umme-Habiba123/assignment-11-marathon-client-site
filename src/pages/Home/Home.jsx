import React from 'react';
import Slider from '../../Components/Slider';
import EasySteps from '../../Components/EasySteps';
import MarathonsNews from './MarathonsNews';


const marathonPromise=fetch('http://localhost:5000/marathonData')
 .then(res=>res.json())

const Home = () => {
 
    return (
        <div className=' '>
            <Slider></Slider>
            <MarathonsNews marathonPromise={marathonPromise}></MarathonsNews>
            <EasySteps></EasySteps>

            
        </div>
    );
};

export default Home;