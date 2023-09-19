import React, { useEffect, useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
export default function Home() {
  const [chosenWord, setChosenWord] = useState('');
  const [index, setIndex] = useState(0);
  const words = ['Developer', 'Designer', 'Coder'];
  const { addHover, removeHover } = useOutletContext();

  useEffect(() => {
    // Function to update the chosenWord state with the next word in order
    const updateChosenWord = () => {
      setChosenWord(words[index]);
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Increment index cyclically
    };

    // Set interval to update chosenWord every 3000ms
    const intervalId = setInterval(updateChosenWord, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [chosenWord]);
  return (
    <main className="home ">
      <div className="container layout w-lg-100 min-vh-100">
        <div className="row align-items-sm-center flex-column-reverse  flex-md-row ">
          <div className="col-12 col-md-6">
            <h1>
              Hi, I'm <span>Ahmed</span>! Creative
              <span>
                <b className="test d-block">{chosenWord}</b>
              </span>
              Based in Egypt
            </h1>
            <p className="my-5 ">
              I'm an Alexandrian based web designer & front‑end developer with{' '}
              <span className="years">2+ years</span> of experience
            </p>
            <div className="btns">
              <NavLink
                to="contact"
                className=" mb-3 btn btn-primary me-3 "
                onMouseEnter={addHover}
                onMouseLeave={removeHover}
              >
                Got a project?
              </NavLink>
              <NavLink
                to="contact"
                className="btn mb-3 btn-secondary text-dark"
                onMouseEnter={addHover}
                onMouseLeave={removeHover}
              >
                Lets talk!
              </NavLink>
            </div>
            <div className="contact-data ps-2 border-start border-4 mt-5">
              <p className="mb-2">+2 01278072216</p>
              <p className="mb-2">ahmed.hahmed@hdb-egy.com</p>
              <p className="mb-2">Alexandria, Egypt</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-center">
            <div className="water-effect img-wrapper text-center  overflow-hidden border border-3 ">
              <img
                className="img-fluid "
                src="https://i.ibb.co/J5qqxsp/home.jpg"
                alt="ahmed image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
