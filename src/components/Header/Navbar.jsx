import { NavLink, Link } from 'react-router';
import React from 'react';
import { Github, House, Apple, MonitorDown } from 'lucide-react';

const linkBase =
  "inline-flex items-center gap-2 px-3 py-2 rounded-lg transition";
const linkActive =
  "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white";
const linkIdle = "hover:bg-base-200 text-[#001931]";

export default function Navbar() {
  const cls = ({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`;

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
            <li><NavLink to="/" className={cls}><House className="w-4 h-4" />Home</NavLink></li>
            <li><NavLink to="/app" className={cls}><Apple className="w-4 h-4" />Apps</NavLink></li>
            <li><NavLink to="/installation" className={cls}><MonitorDown className="w-4 h-4" />Installation</NavLink></li>
          </ul>
        </div>
        <Link to='/' className="text-xl font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">AppHub</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li><NavLink to="/" className={cls}><House className="w-4 h-4" />Home</NavLink></li>
          <li><NavLink to="/app" className={cls}><Apple className="w-4 h-4" />Apps</NavLink></li>
          <li><NavLink to="/installation" className={cls}><MonitorDown className="w-4 h-4" />Installation</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" href="https://github.com/engsanjid" target="_blank" rel="noreferrer">
           <Github /> Contribute
        </a>
      </div>
    </div>
  );
}
