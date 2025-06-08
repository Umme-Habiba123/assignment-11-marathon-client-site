import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userPhoto from '../../assets/user.png'
import { GiRunningNinja } from "react-icons/gi";
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {

    const {signOutUser}=use(AuthContext)

      const handleSignOut=()=>{
        signOutUser()
        .then(()=>{
            console.log('sign out')
        }).catch(error=>{
            console.log(error)
        })
    }


    const {user}=use(AuthContext)

    const links = <>
        <Link to={'/'}><li><p>HOME.</p></li> </Link>

        <Link to={'/addTasks'}><li><p>MARATHONS.</p></li> </Link>
        <Link to={'/brouseTasks'}><li><p>DASSHBOARD.</p></li> </Link>

        <Link to={'/brouseTasks'}><li><p>ADD MARATHON.</p></li> </Link>

        <Link to={'/myPostedTasks'}><li><p>My MARATHON. LIST</p></li> </Link>

        <Link to={'/myPostedTasks'}><li><p>MY APPLY LIST.</p></li> </Link>
    </>
    return (
        <div className='bg-[#f5edf8] px-15 py-5  w-12/12 mx-auto '>

            <div className="navbar satisfy-regular tagesschrift-regular mt-5  py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-gray-500 poppins-extralight text-xs">

                            {links}

                        </ul>
                    </div>

                  <Link to={'/'}>
                    <h1 style={{wordSpacing:'0', margin: 0}} className="edu-nsw-act-cursive-font btn btn-ghost text-3xl gap-0 "><GiRunningNinja size={40}/>Race<span className='text-purple-600 '>Clock</span></h1>
                  </Link>

                </div>
                <div className="navbar-center hidden lg:flex dancing-script-font">
                    <ul className="menu menu-horizontal px-1 lg:text-lg text-gray-500 poppins-extralight md:text-xs text-xs">

                        {links}

                    </ul>
                </div>
               
                <div className="navbar-end gap-3">
                   <img src={userPhoto} alt="" />
                  {
                    user?  <NavLink to={'logIn'}>
                     <button onClick={handleSignOut} className="btn border-2 border-purple-300 hover:bg-purple-200 bg-white text-sm lg:text-lg fira-sans-extralight">LOG OUT</button>
                   </NavLink>:
                   <>
                    <NavLink to={'logIn'}>
                     <button className="btn border-2 border-purple-300 hover:bg-purple-200 bg-white text-sm lg:text-lg fira-sans-extralight">LOG IN</button>
                   </NavLink>

                    <NavLink to={'register'}>
                        <button className="btn border-2 border-pink-300 hover:bg-pink-200 bg-white lg:text-lg md:text-xs fira-sans-extralight">Registration</button>
                    </NavLink>
                   </>

                  }

                </div>

            </div>

         
        </div>
    );
};

export default Navbar