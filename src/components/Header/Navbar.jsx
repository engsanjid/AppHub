
import { Link } from 'react-router';
import React from 'react';
import { Github,House,Apple,MonitorDown  } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-[80px] lg:py-[15px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><Link to="/" className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"> <House className="w-4 h-4 text-[#7C3AED]" />Home</Link></li>
            <li><Link to="/app">   <Apple className="w-4 h-4"/>Apps</Link></li>
            <li><Link to="/installation"><MonitorDown className="w-4 h-4" />Installation</Link></li>
          </ul>
        </div>
        <Link to='/'><span className="text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">AppHub</span></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">   <House className="w-4 h-4 text-[#7C3AED]" />Home</Link></li>
          <li><Link to="/app">   <Apple className="w-4 h-4" />Apps</Link></li>
          <li><Link to="/installation"><MonitorDown className="w-4 h-4" />Installation</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" href="https://github.com/engsanjid" target="_blank" rel="noreferrer">
           <Github /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
