import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

export default function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle';

  return (
    <div>
      <Navbar></Navbar>
      <div
        className={`h-1 transition-all duration-300 ${isLoading ? 'w-full border-8' : 'w-0'} bg-gradient-to-r from-[#632EE3] to-[#9F62F2]`}
        aria-hidden
      />
      <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
}
