import React, { useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
export default function Portfolio() {
  const [percentage, setPercentage] = useState(0);
  const [pixel, setPixel] = useState(0 || -5);
  const [count, setcount] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const { addHover, removeHover } = useOutletContext();
  function handleAdd() {
    if (percentage < 0) {
      setPercentage((prev) => prev + 50);
      setPixel((prev) => prev + 10);
      if (count >= 0) {
        setcount((prev) => prev - 1);
      }
    }
  }

  function handleMinus() {
    if (count < 2) {
      setcount((prev) => prev + 1);
      setPercentage((prev) => prev - 50);
      setPixel((prev) => prev + -10);
    }
  }

  const cardsInfo = [
    {
      id: 1,
      imgUrl: 'https://i.ibb.co/89Gn82x/vanlife.png',
      imgAlt: 'vanlife project',
      projectName: 'Vanlife',
      content:
        'The van life app is an online platform where users can easily find and reserve their preferred van, tailored to their individual preferences. ' /*With built-in filtering options, users can quickly narrow down their search and make hassle-free bookings. */,
      technologies: ['React', 'Bootstrap'],
      codeUrl:
        'https://stackblitz.com/edit/stackblitz-starters-cnjtmg?file=src%2FApp.js',
      demoUrl: 'https://stackblitz-starters-cnjtmg.stackblitz.io',
    },
    {
      id: 2,
      imgUrl: 'https://i.ibb.co/Tttswcn/taskaya.png',
      imgAlt: 'taskaya project',
      projectName: 'Taskaya',
      content:
        'Taskaya is a task management application that empowers users to effectively handle their tasks. ',
      technologies: ['React', 'CSS'],
      codeUrl:
        'https://stackblitz.com/edit/react-playground-practice-evtpzu?file=App.js',
      demoUrl: 'https://react-playground-practice-evtpzu.stackblitz.io',
    },
    {
      id: 3,
      imgUrl: 'https://i.ibb.co/qkN8XjM/appie.png',
      imgAlt: 'appie project',
      projectName: 'Appie',
      content:
        'Taskaya is a task management application that empowers users to effectively handle their tasks. ' /*With its advanced features, users can easily filter, modify, and add tasks. Taskaya also provides a comprehensive task count and history track feature, enabling users to monitor their progress. Additionally, users can utilize the search filtering functionality to quickly locate specific tasks. */,
      technologies: ['Javascript', 'CSS'],
      codeUrl: 'https://github.com/ahmedhamdyyounis/appie',
      demoUrl: 'https://ahmedhamdyyounis.github.io/appie/',
    },
    {
      id: 4,
      imgUrl: 'https://i.ibb.co/7pyWN9S/origami.png',
      imgAlt: 'origami project',
      projectName: 'Origami',
      content:
        'origami is a simple landing page to showcase the business ability to improve businesses',
      technologies: ['Javascript', 'CSS'],
      codeUrl: 'https://github.com/ahmedhamdyyounis/origami',
      demoUrl: 'https://ahmedhamdyyounis.github.io/origami/origami',
    },
  ];
  const AllCards = cardsInfo.map(
    ({
      id,
      imgUrl,
      projectName,
      content,
      technologies,
      codeUrl,
      demoUrl,
      imgAlt,
    }) => (
      <div
        key={id}
        className="item rounded-4 mb-5 col-2 w-l-100 w-50 d-flex flex-column p-3 "
        onMouseEnter={addHover}
        onMouseLeave={removeHover}
      >
        <div className="item-img-wrapper overflow-hidden mb-3 rounded-2 ">
          <img src={imgUrl} className="img-fluid" alt={imgAlt} />
        </div>
        <h5>{projectName}</h5>
        <p>{content}</p>
        <div className="mt-auto">
          <div className="technologies d-flex flex-wrap gap-2  gap-sm-2">
            {technologies.map((tech) => (
              <p>{tech}</p>
            ))}
          </div>
          <div className="preview d-flex gap-3 justify-content-center align-items-center flex-wrap">
            <div className="">
              <NavLink
                rel="noopener noreferrer"
                target="_blank"
                to={codeUrl}
                className="d-flex gap-2 align-items-center"
              >
                <p className="mb-0">Code</p>
                <i className="fa-brands fa-github"></i>
              </NavLink>
            </div>
            <NavLink
              rel="noopener noreferrer"
              target="_blank"
              to={demoUrl}
              className="d-flex gap-2 align-items-center"
            >
              <p className="mb-0">Live Demo</p>
              <i className="fa-solid fa-right-from-bracket"></i>
            </NavLink>
          </div>
        </div>
      </div>
    )
  );

  return (
    <section className="portfolio">
      <div className=" container layout w-md-100">
        <div className="section-header mb-4">
          <p className=" section-info">- PROJECTS </p>
          <div className="w-100 flex-wrap gap-3 d-flex justify-content-between align-items-center">
            <h4 className=" my-3" onClick={handleAdd}>
              Recent completed works
            </h4>
            <div className=" d-none btns d-md-flex gap-3">
              <div
                className="btn border border-1 rounded-circle "
                onClick={handleAdd}
                onMouseEnter={addHover}
                onMouseLeave={removeHover}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="btn border border-1 rounded-circle "
                onClick={handleMinus}
                onMouseEnter={addHover}
                onMouseLeave={removeHover}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        {/* carousal */}
        <div className="carousal  position-relative overflow-hidden">
          <div
            className="car-wrapper d-flex flex-md-row flex-column  position-relative w-100"
            style={{
              left: `calc(${percentage}% + ${pixel}px)`,
            }}
          >
            {/* All Projects */}
            {AllCards}
          </div>
        </div>
        {/* carousal */}
        <div
          className={` text-align-center col-4 d-none d-md-block  about my-4 mb-3 btn btn-primary me-3 px-4 py-2`}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Display carousal' : 'View all projects'}
        </div>
      </div>
    </section>
  );
}
