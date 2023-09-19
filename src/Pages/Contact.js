import React, { useState } from 'react';
export default function Contact() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    message: '',
  });

  function handleForm(e) {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="contact">
      <div className="container layout w-lg-100 min-vh-100 overflow-hidden">
        <div className="row">
          <div className="contact-info col-md-6 col-12 p-4">
            <h6>- LET'S CONNECT</h6>
            <h2>Get in touch</h2>
            <p className="my-4">
              I am currently available to undertake new projects and would be
              delighted to receive any inquiries or proposals for consideration.
              Please do not hesitate to reach out to me at any time, as I am
              accessible 24/7.
            </p>
            <ul className="list-unstyled">
              <li>
                <p>+201278072216</p>
              </li>
              <li>
                <p>ahmed.hahmed@gmail.com</p>
              </li>
              <li>
                <p>Alexandria</p>
              </li>
            </ul>
          </div>
          <div className="contact-form col-12 col-md-6  p-4">
            <form
              action="https://getform.io/f/a6cbfddd-61af-490f-a773-84ed21e7e348"
              method="POST"
            >
              <input
                name="firstname"
                className=" w-100 p-3 rounded d-block mb-4"
                onChange={(e) => handleForm(e)}
                value={form.firstname}
                type="text"
                placeholder="Enter your name"
              />
              <input
                name="lastname"
                className=" w-100 p-3 rounded d-block mb-4"
                onChange={(e) => handleForm(e)}
                value={form.lastname}
                type="email"
                placeholder="user@example.com"
              />
              <textarea
                name="message"
                className="p-3 rounded "
                onChange={(e) => handleForm(e)}
                value={form.message}
                type="text"
                placeholder="write something"
              />
              <button className="mt-3 mb-3 btn btn-primary me-3 px-4 py-2">
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
