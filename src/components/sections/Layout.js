import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../modules/Header';
import GreenHeader from '../modules/GreenHeader';
import Footer from '../modules/Footer';

const Layout = (props) => {
   let location = useLocation();

   return (
      <>
         {location.pathname === '/' ? <Header /> : <GreenHeader />}
         {props.children}
         <Footer />
      </>
   );
};

export default Layout;
