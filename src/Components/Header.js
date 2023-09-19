import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleSetup = {
    openToggle: { opacity: '1', right: '-15px' },
    closeToggle: { opacity: '0', right: '-100%' },
  };

  function handleToggle() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <header className="d-block d-md-none position-fixed px-2 py-2 bg-white w-100 z-index-10  ">
      <div className="w-100 position-fixed d-flex justify-content-between align-items-center px-2">
        <NavLink to="/" className="h1 logo">
          Ahmed
        </NavLink>
        <i
          onClick={handleToggle}
          className={`me-2 fa-solid fa-${
            openMenu ? 'x' : 'bars'
          } fs-4 hover-overlay-cursor`}
        ></i>
      </div>

      <div
        style={openMenu ? toggleSetup.openToggle : toggleSetup.closeToggle}
        className="side-sub-menu d-flex flex-column align-items-end justify-content-start position-fixed vh-100 me-3 bg-white px-4 py-5"
      >
        <div className="border border-3  img-wrapper mb-3 overflow-hidden rounded-circle">
          <img
            src="https://i.ibb.co/n0MC3wz/sidebar.jpg"
            alt="Ahmed"
            className="img-fluid"
          />
        </div>
        <ul className="list-unstyled d-flex flex-column gap-3 my-5">
          <li className="text-end">
            <NavLink to="/" onClick={handleToggle}>
              Home
            </NavLink>
          </li>
          <li className="text-end">
            <NavLink to="about" onClick={handleToggle}>
              About
            </NavLink>
          </li>
          <li className="text-end">
            <NavLink to="/services" onClick={handleToggle}>
              Services
            </NavLink>
          </li>
          <li className="text-end">
            <NavLink to="/portfolio" onClick={handleToggle}>
              portfolio
            </NavLink>
          </li>
          <li className="text-end">
            <NavLink to="/contact" onClick={handleToggle}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="mx-auto d-flex justify-content-center gap-3 list-unstyled">
          <li>
            <a href="/">
              <i className="fs-3 fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fs-3 fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className=" fs-3 fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <p className="copyright w-100 text-center">Copyright © 2023</p>
      </div>
    </header>
  );
}
