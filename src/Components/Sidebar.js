import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Sidebar({ addHover, removeHover }) {
  const [current, setCurrent] = useState('');
  function getTarget(e) {
    setCurrent(e);
  }

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Services',
    },
    {
      id: 4,
      link: 'Portfolio',
    },
    {
      id: 5,
      link: 'Contact',
    },
  ];

  const menuItems = links.map(({ id, link }) => (
    <li className="hoverable" key={id}>
      <NavLink
        onClick={(e) => getTarget(e)}
        to={link === 'Home' ? '/' : link.toLocaleLowerCase()}
        className={current === link ? 'active' : ''}
        onMouseEnter={addHover}
        onMouseLeave={removeHover}
      >
        {link}
      </NavLink>
    </li>
  ));

  return (
    <aside className="ww cut bg-white position-fixed border d-none d-md-block px-4 py-2 text-center h-100">
      <div className="profile-picture-wrapper d-flex justify-content-center  ">
        <div className="overflow-hidden reserved border border-2 rounded-circle ">
          <img
            src="https://i.ibb.co/n0MC3wz/sidebar.jpg"
            alt="Ahmed"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="dot name position-relative mb-5">
        <h2 className="name-bg display-2">Hamdy</h2>
        <p className="position-absolute top-50 start-50 translate-middle fs-2">
          Ahmed
        </p>
      </div>
      <nav>
        <ul className="list-unstyled">{menuItems}</ul>
      </nav>
      <footer className="position-absolute bottom-0 start-50 translate-middle-x">
        <div className="social-media">
          <ul className="d-flex justify-content-center gap-2 list-unstyled">
            <li>
              <NavLink
                target="_blank"
                to="https://www.facebook.com/AhmedHamdyYouniss/"
              >
                <i className="fs-3 fa-brands fa-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink target="_blank" to="https://github.com/ahmedhamdyyounis">
                <i className="fs-3 fa-brands fa-github"></i>
              </NavLink>
            </li>
            <li>
              <NavLink target="_blank" to="linkedin.com">
                <i className=" fs-3 fa-brands fa-linkedin"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <p className="copyright w-100 ">
          Copyright © 2023 Ahmed hamdy All rights reserved.
        </p>
      </footer>
    </aside>
  );
}
