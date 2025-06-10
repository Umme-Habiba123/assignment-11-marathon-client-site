import React from 'react';

const UpMarathonCard = ({upcomingMarathon}) => {

    const {image,title,location,eventDate,description,trainer,price}=upcomingMarathon

    return (
        <div>
   <div className="card bg-base-100 w-96 shadow-lg hover:shadow-pink-300 fira-sans-extralight">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="marathons places"
      className="rounded-xl h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold  edu-nsw-act-cursive-font">{title}</h2>

    <p className='text-gray-500 text-lg font-semibold'>{description}</p>

    <p className='font-bold text-xl'>Location : <span className=' text-lg text-gray-600'> {location}</span>
    </p>
    
    <p className='font-bold text-xl'>Trainer : <span className=' text-lg text-gray-600 '> {trainer}</span>
    </p>


    <p className='font-bold text-xl'>Event Date : <span className=' text-lg text-gray-600'> {eventDate}</span>
    </p>

    <p className='font-bold text-xl'>From : <span className=' text-lg text-gray-600'> {price}</span>
    </p>


   
    <div className="card-actions">
      <button className="btn btn-primary bg-pink-400 border-pink-400 hover:bg-white hover:text-black">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default UpMarathonCard;