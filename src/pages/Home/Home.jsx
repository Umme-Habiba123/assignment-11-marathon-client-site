import React from 'react';
import Slider from '../../Components/Slider';
import EasySteps from '../../Components/EasySteps';
import MarathonsNews from './MarathonsNews';
import UpcomingMarathon from './UpcomingMarathon';
import HomeCard from './HomeCard';
import AboutMe from '../../Components/AboutMe';



// const marathonPromise = fetch('http://localhost:5000/marathonData').then(res => res.json())

const upcomingMarathonePromise = fetch('http://localhost:5000/marathon2').then(res => res.json())




const Home = () => {

    return (
        <div className=' '>
            <Slider></Slider>
            {/* <MarathonsNews marathonPromise={marathonPromise}></MarathonsNews> */}

            <EasySteps></EasySteps>

            <UpcomingMarathon upcomingMarathonePromise={upcomingMarathonePromise}></UpcomingMarathon>

            <HomeCard title="Dhaka City Marathon 2025"
                totalSlots={500}
                initialRegistered={230}></HomeCard>

            <AboutMe></AboutMe>
          
        </div>
    );
};

export default Home;