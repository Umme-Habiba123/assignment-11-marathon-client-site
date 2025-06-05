import React from 'react';

const Slider = () => {
  return (
    <div className="w-full mx-auto">
      <div className="carousel w-full rounded-lg overflow-hidden">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1509223197845-458d87318791"
            className="w-full object-cover"
            alt="Marathon start"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Welcome to RaceClock</h2>
            <p className="mt-4 text-lg text-purple-100">Your Ultimate Marathon Management Hub</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1571003123894-1f059dfe0c88"
            className="w-full object-cover"
            alt="Running crowd"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Track in Real-Time</h2>
            <p className="mt-4 text-lg text-purple-100">Live runner updates with GPS precision</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1520975914081-8c6a3f63f2e5"
            className="w-full object-cover"
            alt="Runner bib"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Easy Registration</h2>
            <p className="mt-4 text-lg text-purple-100">Sign up racers in just a few clicks</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1602524207230-59990f06cbe6"
            className="w-full object-cover"
            alt="Finish line"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Celebrate Finishes</h2>
            <p className="mt-4 text-lg text-purple-100">Automatic result publishing and awards</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e"
            className="w-full object-cover"
            alt="Volunteers helping"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Organize with Ease</h2>
            <p className="mt-4 text-lg text-purple-100">Manage volunteers, sponsors & logistics in one place</p>
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
