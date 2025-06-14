import { motion } from "framer-motion";
import animPhoto1 from '../assets/p-7.png';
import animPhoto2 from '../assets/p-6.jpg';

const EasySteps = () => {
  return (
    <div className="hero my-30 px-4 md:px-10 fira-sans-extralight ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <motion.h1
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 0.98 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold edu-nsw-act-cursive-font mb-2 text-center lg:text-left"
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

          <div className="text-base sm:text-lg text-gray-700 leading-relaxed px-2 sm:px-0">
            <span className="block text-xl font-semibold text-purple-500 mb-3 text-center lg:text-left">
              Physical Health Benefits:
            </span>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Improves Heart Health:</strong> Long-distance running strengthens the heart and improves circulation.</li>
              <li><strong>Boosts Endurance:</strong> Training for a marathon builds stamina and muscular endurance over time.</li>
              <li><strong>Weight Management:</strong> Running burns a significant number of calories, helping with weight loss or maintenance.</li>
              <li><strong>Stronger Muscles and Bones:</strong> Running is a weight-bearing exercise, which improves bone density and muscle tone.</li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-purple-400 hover:bg-purple-700 transition text-white py-2 px-6 rounded-full font-medium shadow-lg mt-2"
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>

        {/* Right Animated Images */}
        <div className="relative flex items-center justify-center w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <motion.img
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="max-w-[220px] sm:max-w-[260px] md:max-w-sm rounded-b-[40px] border-purple-300 border-b-8 border-s-8 shadow-2xl font-semibold absolute right-2 bottom-0 z-0"
            src={animPhoto1}
            alt="animated-img-1"
          />
          <motion.img
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="max-w-[220px] sm:max-w-[260px] md:max-w-sm rounded-t-[40px] border-purple-400 border-t-8 border-b shadow-2xl font-semibold absolute top-0 left-10 z-0"
            src={animPhoto2}
            alt="animated-img-2"
          />
        </div>

      </div>
    </div>
  );
};

export default EasySteps;
