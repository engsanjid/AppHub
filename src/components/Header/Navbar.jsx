import React from 'react';

const Navbar = () => {
    return (
        <>
            
<div className="navbar bg-base-100 shadow-sm lg:px-[80px] lg:py-[15px]">
    <div className="navbar-start">
      <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Home</a></li>
        <li> <a>Apps</a></li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">AppHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Home</a></li>
      <li><a>Apps</a></li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"href='https://github.com/engsanjid'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>Contribute</a>
  </div>
</div>
        </>
    );
};

export default Navbar;