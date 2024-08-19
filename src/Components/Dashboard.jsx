// Dashboard.js
import React from 'react';
import Table from './Table.jsx';
import Navbar from './Navbar.jsx';
import Cards from './Cards.jsx';
import LocMapSection from './LocMapSection.jsx';
import ChartComponent from './ChartComponent.jsx';

function Dashboard(){
  return (
    <div className='w-5/6 ml-72'>
        <Navbar/>
        <Cards/>
        <ChartComponent/>
        <LocMapSection/>
        <Table/>
    </div>
  );
};

export default Dashboard;
