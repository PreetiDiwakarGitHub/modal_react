import React, { useState } from 'react';
import './App.css';
import Example from './Example';
import DigitalClock from './DigitalClock';

function App() {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('all'); // State for task filtering

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filterTasks = (filterType) => {
    setFilter(filterType);
  };

  return (
    <>
      <div className="navbar">
        <h1 className="brand">My App</h1>
        <button className="nav-button" onClick={handleShow}>
          Add Todo
        </button>
      </div>
      <div className="container">
        <DigitalClock filterTasks={filterTasks} />
        <Example show={show} handleShow={handleShow} handleClose={handleClose} filter={filter} />
        <div className="sidebar">
          <button className="sidebar-button" onClick={() => filterTasks('all')}>
            All Tasks
          </button>
          <button className="sidebar-button" onClick={() => filterTasks('completed')}>
            Completed
          </button>
          <button className="sidebar-button" onClick={() => filterTasks('pending')}>
            Pending
          </button>
        </div>
      </div>
    </>
  );
}

export default App;