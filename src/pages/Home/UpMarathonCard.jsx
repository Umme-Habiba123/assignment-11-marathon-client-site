import React from 'react';

const UpMarathonCard = ({ upcomingMarathon }) => {
  const { image, title, location, eventDate, description, trainer, price } = upcomingMarathon;

  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-md hover:shadow-pink-300 transition duration-300 ease-in-out overflow-hidden">
      

      <figure className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt="marathon"
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </figure>

    
      <div className="p-5 flex flex-col gap-3 text-center">
        <h2 className="text-xl lg:text-2xl font-bold edu-nsw-act-cursive-font text-gray-800">
          {title}
        </h2>

        <p className="text-sm lg:text-base text-gray-600">{description}</p>

        <p className="text-sm lg:text-base font-semibold text-gray-700">
          Location: <span className="text-gray-500">{location}</span>
        </p>

        <p className="text-sm lg:text-base font-semibold text-gray-700">
          Trainer: <span className="text-gray-500">{trainer}</span>
        </p>

        <p className="text-sm lg:text-base font-semibold text-gray-700">
          Event Date: <span className="text-gray-500">{eventDate}</span>
        </p>

        <p className="text-sm lg:text-base font-semibold text-gray-700">
          Price: <span className="text-gray-500">{price}</span>
        </p>

        <div className="pt-2">
          <button className="btn bg-pink-400 border-pink-400 text-white hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpMarathonCard;
