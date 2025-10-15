import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
// adjust path if needed
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const MarathonCardDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/marathonData/${id}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching marathon details:', err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, [id, axiosSecure]);

  if (loading) return <p className='text-center my-10 text-xl'>Loading...</p>;
  if (error) return <p className='text-center my-10 text-red-500'>{error}</p>;

  const { image, location, marathonDate, title, description, distance,
    startRegistration, endRegistration, createAt } = data;

  const marathonsStartTime = new Date(marathonDate).getTime()
  const now = Date.now()
  const remainingSecond = Math.max((marathonsStartTime - now) / 1000, 0)


  return (
    <div className=' w-10/12 mx-auto my-10 '>

     
      {/* countDown time---- */}
      <div className='ml-96'>
        <h2>Countdown to marathon Start : </h2>
        <CountdownCircleTimer
          isPlaying duration={remainingSecond}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => {
            const days =Math.floor(remainingTime / (60*60*24))
            const hours = Math.floor((remainingTime % (60*60*24))/3600)
            const minutes= Math.floor((remainingTime%3600)/60)

            return (
              <div>
                <p>{days}</p>
                <p>{hours}</p>
                <p>{minutes}</p>
              </div>
            )
          
          }}
        </CountdownCircleTimer>

      </div>



      <div className='flex lg:gap-15 gap-8'> 
        <div>
        <img
          className='lg:w-[800px] rounded-xl border-5 border-purple-300 hover:scale-1.2 animate-pulse transition duration-200'
          src={image}
          alt="Marathon"
        />
      </div>

      <div className='space-y-5'>
        <p className='text-2xl font-bold'>Title: <span className='text-xl text-gray-600 font-semibold'>{title}</span></p>

        <p className='text-2xl font-bold'>Description: <span className='text-xl text-gray-600 font-semibold'>{description}</span></p>

        <p className='text-2xl font-bold'>Location: <span className='text-xl text-gray-600 font-semibold'>{location}</span></p>

        <p className='text-2xl font-bold'>Creation Time: <span className='text-xl text-gray-600 font-semibold'>{new Date(createAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}</span></p>

        <p className='text-2xl font-bold'>Marathon Date: <span className='text-xl text-gray-600 font-semibold'>{new Date(marathonDate).toISOString().split("T")[0]}</span></p>

        <p className='text-2xl font-bold'>Distance: <span className='text-xl text-gray-600 font-semibold'>{distance}</span></p>

        <p className='text-2xl font-bold'>Start Registration: <span className='text-xl text-gray-600 font-semibold'>{new Date(startRegistration).toISOString().split("T")[0]}</span></p>

        <p className='text-2xl font-bold'>End Registration: <span className='text-xl text-gray-600 font-semibold'>{new Date(endRegistration).toISOString().split("T")[0]}</span></p>

        <button className='btn text-lg bg-black text-white lg:py-6 hover:bg-purple-400'>Apply now</button>
      </div>
      </div>


    </div>
  );
};

export default MarathonCardDetails;
