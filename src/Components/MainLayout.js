import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { motion } from 'framer-motion';
export default function MainLayout() {
  const { pathname, location } = useLocation();
  const [hover, setHover] = useState(false);

  // Define section background
  const currentBackground = {
    background:
      pathname === '/'
        ? '#effbf8'
        : pathname === '/contact'
        ? '#e9f9ff'
        : 'white',
  };
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
  const [leave, setLeave] = useState(false);
  const [preload, setPreload] = useState(false);
  function handleMouseMove(e) {
    setMousePosition({
      left: e.pageX,
      top: e.pageY,
      border: hover ? '1px solid transparent' : '1px solid #a5a6ff73',
    });
  }

  // Preloader Setup
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(true);
    }, 0); //3500
    return () => clearTimeout(timer);
  }, []);

  function addHover() {
    setHover(true);
  }

  function removeHover() {
    setHover(false);
  }
  return (
    <div
      style={currentBackground}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setLeave(false)}
      onMouseLeave={() => setLeave(true)}
      className="the-main"
    >
      <div className={` preloader ${preload ? 'd-none' : ''}`}>
        <div className="leftLoader"></div>
        <div className="rightLoader"></div>
      </div>
      <Header />
      <Sidebar addHover={addHover} removeHover={removeHover} />
      <motion.div
        className={` d-none d-sm-block border-2 mouse-shadow rounded-5 ${
          leave ? 'z-none' : ''
        }`}
        style={mousePosition}
      >
        <div
          className="little"
          style={{
            transform: hover ? 'scale(15)' : '',
            background: '#a5a6ff69',
          }}
        ></div>
      </motion.div>
      <Outlet
        context={{ location, addHover, removeHover }}
        removeHover={removeHover}
      />
    </div>
  );
}

/*

      
      
*/
