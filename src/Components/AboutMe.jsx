import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MdFollowTheSigns } from "react-icons/md";
// import myPhoto from ''


const AboutMe = () => {

    return (
        <div className='w-10/12 mx-auto py-10'>
            <h1 className='text-center text-4xl text-cyan-600 tagesschrift-regular mb-8'>Hello...</h1>

            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10'>

                {/* Text Section */}
                <div className='lg:w-1/2'>
                    <p className='satisfy-regular font-semibold text-xl leading-8 text-justify'>
                        My name is <span className="text-cyan-600 font-bold">Mahiya</span>, a passionate and self-driven web developer with a strong interest in building meaningful digital experiences. I specialize in the MERN Stack (MongoDB, Express.js, React, Node.js) and enjoy turning creative ideas into functional, user-friendly web applications.

                        With a keen eye for detail and a commitment to continuous learning, I aim to grow every day and contribute to projects that make a real impact. I believe in writing clean, efficient code and creating interfaces that users love. I enjoy solving problems, designing clean user interfaces, and writing organized, maintainable code. Whether it’s creating responsive layouts, connecting APIs, or optimizing user experience, I take every challenge as an opportunity to grow.

                        I am also familiar with tools like Firebase, Tailwind CSS, and Git, and I actively explore new technologies to expand my skillset. Apart from coding, I am deeply committed to learning and personal growth. My goal is to contribute to meaningful projects that help people and solve real-world problems. In the future, I aspire to become a full-time software engineer and work with a team of passionate developers.
                        Thank you for taking the time to learn a little about me. I’m excited to continue my journey in the world of web development and see where my passion takes me!
                    </p>
                    <Link to={'/followMore'}>
                        <button className='btn bg-cyan-800 hover:bg-white hover:text-black rounded-sm px-8 text-xl satisfy-regular text-white mt-6'>
                            Follow for more !<MdFollowTheSigns size={25}/>
                        </button>
                    </Link>
                </div>

                {/* Animated Image */}
                <motion.div
                    className='lg:w-1/2'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 5, x: 0 }}
                    transition={{ duration: 1.5 }}
                    loop={{Infinity}}
                
                >
                    <img
                        className='rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]'
                        src=''
                        alt="Mahiya"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;
