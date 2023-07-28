import React from 'react';
import './page.css'; // Make sure to have this CSS file in the same directory
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

const EmoneyWallet = () => {
  return (
   <div className="container-fluid h-100">
      <div className="row h-100">
         <LeftSidebar />
         <MainContent />
         <RightSidebar />
      </div>
   </div>
  );
};

export default EmoneyWallet;