import { Link, useLoaderData } from 'react-router';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSubtitles, MdAppRegistration } from "react-icons/md";
import { MdSocialDistance } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { motion } from "motion/react";


const CardDetails = () => {
  const {
    _id,
    image,
    title,
    location,
    startRegistration,
    endRegistration,
    distance,
    description,
    totalRegCount
  } = useLoaderData();

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const start = new Date()
  start.setHours(0, 0, 0, 0)

  const end = new Date()
  end.setHours(0, 0, 0, 0)

  // Registration time check
  const now = new Date();
  const isRegistrationOpen =
    new Date(startRegistration) <= now && now <= new Date(endRegistration);




  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-10 px-4 md:px-8 lg:px-20 py-10 max-w-7xl mx-auto">
      {/* Text Area */}
      <div className="space-y-4 w-full lg:w-1/2">
        <p className="text-xl font-bold flex gap-2 items-start">
          <MdOutlineSubtitles size={25} />
          Title:
          <span className="text-gray-700 font-normal">{title}</span>
        </p>

        <p className="text-xl font-bold flex gap-2 items-start">
          <TbFileDescription size={25} />
          Description:
          <span className="text-gray-700 font-normal">{description}</span>
        </p>

        <p className="text-xl font-bold flex gap-2 items-start">
          <IoLocationSharp size={25} />
          Location:
          <span className="text-gray-700 font-normal">{location}</span>
        </p>

        <p className="text-xl font-bold flex gap-2 items-start">
          <MdAppRegistration size={25} />
          Start Registration:
          <span className="text-gray-700 font-normal">
            {new Date(startRegistration).toLocaleDateString('en-GB')}
          </span>
        </p>

        <p className="text-xl font-bold flex gap-2 items-start">
          <CiCalendar size={25} />
          End Registration:
          <span className="text-gray-700 font-normal">
            {new Date(endRegistration).toLocaleDateString('en-GB')}
          </span>
        </p>

        <p className="text-xl font-bold flex gap-2 items-start">
          <MdSocialDistance size={25} />
          Distance:
          <span className="text-gray-700 font-normal">{distance}</span>
        </p>

        <p className="text-xl font-bold flex gap-2 items-start">
          <MdSocialDistance size={25} />
          Total Registration Count :
          <span className="text-gray-700 font-normal">{totalRegCount}</span>
        </p>

        {/* Register Button */}
        {isRegistrationOpen ? (
          <Link to={`/marathonsRegistration/${_id}`}>
            <button className="btn px-10 bg-purple-400 font-bold text-xl  text-white hover:bg-purple-600 mt-4 fira-sans-extralight">
              Register
            </button>
          </Link>
        ) : (
          <button className="btn bg-gray-400 text-white font-bold mt-4" disabled>
            Registration Closed
          </button>
        )}
      </div>

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          className="rounded-2xl border-4 border-pink-300 w-full max-w-xs md:max-w-sm lg:max-w-md"
          src={image}
          alt="marathon"
        />
      </motion.div>
    </div>
  );
};

export default CardDetails;
