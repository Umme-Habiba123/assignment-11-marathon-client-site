import React from 'react';
import photo1 from '../assets/p-1.jpg'
import photo2 from '../assets/p-2.jpg'
import photo3 from '../assets/p-3.jpg'
import photo4 from '../assets/p-4.jpg'
import photo5 from '../assets/p-5.jpg'

const Slider = () => {
  return (
    <div className="w-full mx-auto ">
      <div className="carousel w-full h-[400px] md:h-[700px] rounded-lg overflow-hidden">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={photo1}
            className="w-full object-cover"
            alt="Marathon Start"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl text-black md:text-4xl font-bold edu-nsw-act-cursive-font">Welcome to RaceClock</h2>
            <p className="mt-2 text-sm md:text-lg  text-black fira-sans-extralight ">Your Ultimate Marathon Management Hub</p>
            <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={photo2}
            className="w-full object-cover"
            alt="Real-Time Tracking"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Track in Real-Time</h2>
            <p className="mt-2 text-sm md:text-lg text-purple-100">Live GPS runner updates</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              Live Demo
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={photo3}
            className="w-full object-cover"
            alt="Runner Registration"
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Quick Registration</h2>
            <p className="mt-2 text-sm md:text-lg text-purple-100">Register runners in minutes</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              Register Now
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={photo4}
            className="w-full object-cover"
            alt="Finish Line"
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Celebrate Every Finish</h2>
            <p className="mt-2 text-sm md:text-lg text-purple-100">Instant results and awards</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              See Results
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src={photo5}
            className="w-full object-cover"
            alt="Volunteer Management"
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Manage Everything Easily</h2>
            <p className="mt-2 text-sm md:text-lg text-purple-100">Volunteers, sponsors & logistics</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              Explore Tools
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slider;
