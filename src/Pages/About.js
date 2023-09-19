import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
export default function about() {
  const { addHover, removeHover } = useOutletContext();

  return (
    <section className="about bg-white">
      <div className="container layout w-lg-100  ">
        <div className="about-wrapper d-md-grid gap-4">
          <div className="row">
            <div className="section-header col-md-4">
              <p>- NICE TO MEET YOU!</p>
              <h2 className="my-1">Ahmed hamdy</h2>
              <p>Web designer & developer</p>
              <div className="btns about my-4">
                <NavLink
                  to="contact"
                  className=" mb-3 btn btn-primary me-3 px-4 py-2 "
                  onMouseEnter={addHover}
                  onMouseLeave={removeHover}
                >
                  Got a project?
                </NavLink>
              </div>
            </div>
            <div className="about-content col-md-8">
              <p>
                Hello there! My name is{' '}
                <span className="name-highlight">Ahmed hamdy</span>. I am a web
                designer & developer, and I'm very passionate and dedicated to
                my work.
                <br /> <br />
                With over two years of experience as a front-end web developer,
                I have actively participated in numerous successful projects,
                constantly striving to expand my expertise. Throughout my
                journey, I have consistently dedicated myself to going above and
                beyond to satisfy my customers, as their utmost satisfaction
                remains my top priority.
              </p>
            </div>
          </div>
        </div>
        <div className="personal-info my-5">
          <ul className="list-unstyled d-flex flex-wrap gap-4 ">
            <li>
              <span>Age</span>
              <span>30</span>
            </li>
            <li>
              <span>Born in</span>
              <span>Alexandria</span>
            </li>
            <li>
              <span>Mail</span>
              <span>ahmed.hamdy@hdb-egy.com</span>
            </li>
            <li>
              <span>Phone</span>
              <span>+2 01278072216</span>
            </li>
          </ul>
        </div>
        <div className="cards d-md-flex flex-wrap gap-4  ">
          <div className="  card mb-4 text-center p-5">
            <h1>2+</h1>
            <p>Years of experience</p>
          </div>
          <div className="  card mb-4 text-center p-5">
            <h1>10+</h1>
            <p>Projects completed</p>
          </div>
          <div className="  card mb-4 text-center p-5">
            <h1>14+</h1>
            <p>Happy clients</p>
          </div>
        </div>
      </div>
      <div className="container exp layout py-1  ">
        <div className="experience  my-5 py-5 px-3">
          <p className="">- Experience</p>
          <h4 className="my-3">Everything about me!</h4>
          <div className="cards d-flex flex-column flex-l-row d-md-flex  gap-4">
            <div className=" col-12 col-l-3 card mb-3 px-3 py-4 bg-white">
              <p className="card-title d-flex justify-content-between">
                March 2021 - present
                <span>Freelancer</span>
              </p>
              <h4>Web developer</h4>
              <p>
                Responsibilities:
                <br />
                - Collaborated with various clients to understand their business
                requirements and create customized websites that align with
                their brand identity. <br />- Devoleped responsive layouts using
                CSS frameworks like Bootstrap & Tailwind, ensuring seamless user
                experience across different devices and screen sizes. <br />
                -Integrated third-party APIs and plugins to add functionality
                and enhance the user experience. <br />
                -Conducted thorough testing and debugging to identify and fix
                any issues in the codebase. <br />
                -Key Achievements: Created visually appealing and intuitive
                websites for multiple clients, resulting in increased user
                engagement and conversion rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
