// App.js
import React from 'react';
import Sidebar from './Components/Sidebar.jsx';
import Navbar from './Components/Navbar.jsx';
import Dashboard from './Components/Dashboard.jsx';

function App() {
  return (
    <div className="flex flex-row h-screen w-full">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
