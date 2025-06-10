import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router";

const MarathonCard = ({ marathon }) => {
    const { image, location, registrationDates, title, _id,description  } = marathon

    return (
      
         <div className=" w-80 shadow-lg hover:shadow-purple-400 fira-sans-extralight">
            
            <figure>
              <img className="rounded-t-2xl"
                     src={image}
                     alt="marathonCard" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary bg-purple-500 border border-purple-500 text-white font-bold edu-nsw-act-cursive-font text-xs">NEW</div>
                    </h2>                  
                    <p className="text-gray-500">{description}</p>

                    <div className="text-gray-600 text-2xl flex gap-1"><IoLocationSharp /> <span className="text-lg ">{location}</span></div>

                    <div className="text-gray-600 text-2xl poppins-extralight flex gap-2">  <SlCalender />
                    <span className="text-gray-600 text-lg ">
                       {registrationDates}
                        </span>
                        </div>
                        <h1 className="text-lg text-green-700 font-bold edu-nsw-act-cursive-font">Running</h1>
                        
                        <div>
                            <Link to={`/marathonCardDetails/${_id}`}>
                               <button className="btn bg-black text-white hover:bg-purple-200 hover:text-black">See Details.</button>
                            </Link>
                        </div>
                  
                </div>
            </div>
       
      
    );
};

export default MarathonCard;