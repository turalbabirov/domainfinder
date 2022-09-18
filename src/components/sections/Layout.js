import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import GreenHeader from './modules/GreenHeader';
import Footer from './Footer';

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
