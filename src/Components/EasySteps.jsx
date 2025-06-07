import { motion } from "framer-motion";
import animPhoto1 from '../assets/p-7.png'
// import animPhoto2 from  '../assets/p-8.jpg'

const EasySteps = () => {
  return (
    <div className="hero  my-20 px-4 md:px-10 fira-sans-extralight">
      <div className=" max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
 
        <div className="flex-1">
          <motion.h1
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 0.98 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold edu-nsw-act-cursive-font mb-4"
          >
            <span className="text-gray-600">Health</span>
            <motion.span
              className="ml-2"
              initial={{ color: "#c333ff" }}
              animate={{ color: ["#c333ff", "#5533ff", "#ff33a4"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              &amp;
            </motion.span>
            <span className="text-emerald-400 ml-2">
              Wellness{" "}
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                🏃‍♀️
              </motion.span>
            </span>
          </motion.h1>

          <h2 className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
            <span className="block text-xl font-semibold text-purple-500 mb-2">
              Physical Health Benefits:
            </span>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Improves Heart Health:</strong> Long-distance running strengthens the heart
                and improves circulation.
              </li>
              <li>
                <strong>Boosts Endurance:</strong> Training for a marathon builds stamina and
                muscular endurance over time.
              </li>
              <li>
                <strong>Weight Management:</strong> Running burns a significant number of calories,
                helping with weight loss or maintenance.
              </li>
              <li>
                <strong>Stronger Muscles and Bones:</strong> Running is a weight-bearing exercise,
                which improves bone density and muscle tone.
              </li>
            </ul>
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 hover:bg-purple-700 transition text-white py-2 px-5 rounded-full font-medium shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </div>
     
        <div>

        <div    
        className="hero-content w-full h-64 md:h-96 rounded-2xl shadow-inner flex items-center justify-center">
         <motion.img
         animate= {{y:[100, 150, 100]}}
         transition={{duration: 5, repeat: Infinity}}
          className=" max-w-sm rounded-t-[40px]   border-purple-400 border-b-8 border-s-8 shadow-2xl font-semibold  text-lg" src={animPhoto1} alt="" />
{/* 
         <motion.img
         animate= {{x:[100, 150, 100]}}
         transition={{duration: 10, delay:5, repeat: Infinity}}
        className=" max-w-sm rounded-t-[40px]   border-purple-400  border--8 shadow-2xl font-semibold text-lg" src={animPhoto2} alt="" /> */}
        </div>

        </div>
      </div>
    </div>
  );
};

export default EasySteps;
