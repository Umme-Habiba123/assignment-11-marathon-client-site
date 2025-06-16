import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userPhoto from '../../assets/user.png';
import { GiRunningNinja } from "react-icons/gi";
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {
  const { signOutUser, user } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('sign out');
      }).catch(error => {
        console.log(error);
      });
  };

  const links = <>
    <li><NavLink to={'/'}>HOME</NavLink></li>
    <li><NavLink to={'/marathons'}>MARATHONS</NavLink></li>
    {
      user && <>
<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1 mt-2 cursor-pointer">DASHBOARD</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
     <li><NavLink to={'/myApplyList'}>MY APPLY LIST</NavLink></li>
  </ul>
</div>

        <li><NavLink to={'/addMarathon'}>ADD MARATHON</NavLink></li>
        <li><NavLink to={'/myMarathonsList'}>MY MARATHONS LIST</NavLink></li>
       
      </>
    }
  </>;

  return (
    <div className='bg-[#f5edf8] w-full shadow-md'>
      <div className="navbar w-10/12 mx-auto px-2 py-8 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu menu-sm mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sm text-gray-600">
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-1 text-xl lg:text-4xl font-bold">
            <GiRunningNinja size={30} />
            <span>Race<span className='text-purple-600'>Clock</span></span>
          </Link>
        </div>

   
           <div className="navbar-center hidden lg:flex dancing-script-font">
                    <ul className="menu menu-horizontal gap-4 px-1 text-sm">

                        {links}

                    </ul>
                </div>

        {/* User -------*/}
        <div className="flex items-center gap-4 ">
         
         <div className='relative group w-10 h-10'>
           <img
            className='w-10 h-10 rounded-full object-cover border border-purple-300'
            src={user?.photoURL || userPhoto}
            alt="User"
          />
           {
            user?.displayName &&
            <div>
              <p className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gra  text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">{user.displayName}</p>
            </div>
          }
          
          
         </div>

          {
            user ?
              <>
                <p className="hidden sm:block text-xs text-gray-500">{user?.email}</p>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-sm border-purple-300 hover:bg-purple-200"
                >
                  LOG OUT
                </button>
              </>
              :
              <>
                <NavLink to="/logIn">
                  <button className="btn btn-outline btn-sm border-purple-300 hover:bg-purple-200">LOG IN</button>
                </NavLink>
                <NavLink to="/register">
                  <button className="btn btn-outline btn-sm border-pink-300 hover:bg-pink-200">REGISTER</button>
                </NavLink>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
