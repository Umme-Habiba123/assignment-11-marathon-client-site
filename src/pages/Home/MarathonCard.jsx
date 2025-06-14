import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router";

const MarathonCard = ({ marathon }) => {
  const { image, location, registrationDates, title, _id, description } = marathon;

  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-purple-400 transition duration-300 ease-in-out">
      

      <figure>
        <img
          className="w-full h-56 object-cover rounded-t-2xl"
          src={image}
          alt="marathonCard"
        />
      </figure>

    
      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="badge bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </div>
        </div>

        <p className="text-gray-500 text-sm">{description}</p>

        <div className="flex items-center text-gray-600 gap-2 text-sm">
          <IoLocationSharp className="text-lg" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-gray-600 gap-2 text-sm">
          <SlCalender className="text-lg" />
          <span>{registrationDates}</span>
        </div>

        <h1 className="text-md text-green-700 font-semibold">Running</h1>

        <div className="mt-2">
          <Link to={`/marathonCardDetails/${_id}`}>
            <button className="w-full btn bg-black text-white hover:bg-purple-200 hover:text-black transition duration-200">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarathonCard;
