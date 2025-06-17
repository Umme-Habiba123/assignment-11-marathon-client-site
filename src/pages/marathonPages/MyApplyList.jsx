import { use } from "react";
import ApplyRegRow from "./ApplyRegRow";
import { Typewriter } from 'react-simple-typewriter';

const MyApplyList = ({ myApplyPromise }) => {

  const registration = use(myApplyPromise); 

  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 poppins-extralight">
      <p className="mt-8 text-center text-cyan-600 text-xl sm:text-2xl md:text-3xl edu-nsw-act-cursive-font font-semibold">
        <Typewriter
          words={[`Registrations have been made with this Email : ${registration.length}`]}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <div className="overflow-x-auto mt-10">
        <table className="table w-full min-w-[600px] sm:min-w-full">
          <thead>
            <tr>
              <th><h1 className="text-lg sm:text-xl">#</h1></th>
              <th className="text-sm sm:text-base">Name and Email</th>
              <th className="text-sm sm:text-base">Additional Info. & Contact</th>
              <th className="text-sm sm:text-base">Marathons Title & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="fira-sans-extralight text-xs sm:text-sm">
            {
              registration.map((myApply, index) => (
                <ApplyRegRow 
                  key={myApply._id}
                  index={index}
                  myApply={myApply}
                  id={myApply._id}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplyList;
