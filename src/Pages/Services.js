import React, { useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
export default function Services() {
  const { addHover, removeHover } = useOutletContext();
  const [display, setDisplay] = useState(false);
  const cardsInfo = [
    {
      id: 1,
      serviceName: 'Responsive web design',
      description:
        'As an experienced front-end developer, I prioritize creating websites that adapt seamlessly to different devices and screen sizes. With a strong focus on responsive web design, I ensure that your website looks and functions flawlessly on desktops, laptops, tablets, and mobile devices. By utilizing the latest technologies and industry best practices, I bring your vision to life with a design that is not only visually appealing but also user-friendly across all platforms',
      imageUrl: 'https://i.ibb.co/x7Sy6W2/responsive.jpg',
      alt: 'responsive web',
    },
    {
      id: 2,
      serviceName: 'Custom web development',
      description:
        'specialize in crafting tailor-made websites that are unique to your business requirements. Using the latest web development technologies such as HTML5, CSS3, and JavaScript, I create clean, scalable, and optimized code to bring your ideas to reality. Whether you need a sleek corporate website, an intuitive e-commerce platform, or a dynamic web application, I leverage my expertise in front-end development to build responsive and feature-rich solutions that engage your users and drive conversions.',
      imageUrl: 'https://i.ibb.co/YcpfGCg/web-development.jpg',
      alt: 'custom web section cover ',
    },
    {
      id: 3,
      serviceName: 'UI/UX Design and Prototyping ',
      description:
        'Understanding the importance of user experience and aesthetically pleasing design, I offer UI/UX design and prototyping services to enhance the usability and visual appeal of your website. By carefully studying your target audience and business goals, I create intuitive and visually stunning designs that captivate your users. Using industry-standard wireframing and prototyping tools, I provide interactive mockups that give you a preview of the final product, ensuring a seamless collaboration between design and development.',
      imageUrl: 'https://i.ibb.co/HnRprSh/uiux.jpg',
      alt: 'ui ux section cover',
    },
    {
      id: 4,
      serviceName: 'Performance Optimization',
      description:
        'Recognizing the need for fast-loading websites, I optimize the performance of your web pages to deliver an exceptional user experience. By employing techniques such as minification, caching, and image optimization, I reduce loading times and improve overall site speed. Additionally, I conduct thorough performance audits to identify potential bottlenecks and implement effective solutions for optimal website performance. With a focus on both desktop and mobile devices, your website will not only rank higher in search engine results but also keep users engaged and satisfied.',
      imageUrl: 'https://i.ibb.co/30CTn7B/optimization.jpg',
      alt: 'performance optimization section cover',
    },
    {
      id: 5,
      serviceName: 'Dynamic and Engaging Animations',
      description: `Make your website come to life with captivating animations that captivate your audience from the moment they land on your page. As a front-end developer with expertise in animations, I offer a range of services that will enhance your website's aesthetics and user experience.`,
      imageUrl: 'https://i.ibb.co/0Zx1Ty1/animation.jpg',
      alt: 'animation section cover',
    },
  ];
  const [data, setData] = useState(4);

  function handleCard(e) {
    const item = e.target.parentElement.id;
    setDisplay(true);
    setData((prev) => item || prev);
  }
  const allCards = cardsInfo.map(
    ({ id, serviceName, description, imageUrl, alt }) => (
      <div key={id} id={id} className="col">
        <div className="card  p-4 ">
          <p className="card-title">0{id}</p>
          <h5>{serviceName}</h5>
          <p className="col-7">{description}</p>
          <div
            className="read-more d-flex gap-3 align-items-center"
            id={id}
            onClick={(e) => {
              handleCard(e);
            }}
          >
            <p className="m-0 ">Read more</p>
            <i className=" fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    )
  );
  return (
    <section className="services min-vh-100">
      <div className="container layout w-lg-100">
        <div className="section-header">
          <p className=" section-info">- SERVICES</p>
          <div className="w-100 flex-wrap gap-3 d-flex justify-content-between align-items-center">
            <h4 className=" my-3">My Services</h4>
            <NavLink className="" to="mailto:ahmed.hahmed@hdb-egy.com">
              ahmed.hahmed@hdb-egy.com
            </NavLink>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 my-4 ">
            {allCards}
            <div
              className={`full-card d-flex flex-column justify-content-center align-items-center gap-4 position-fixed `}
              style={{ left: display ? '0' : '-110%' }}
            >
              <div className="position-relative card-data-wrapper">
                <div className="card-data bg-white p-5 container position-relative rounded d-flex flex-column gap-4">
                  <img
                    className="img-fluid rounded"
                    src={cardsInfo[data].imageUrl}
                    alt={cardsInfo[data].alt}
                  />
                  <p>{cardsInfo[data].description}</p>
                </div>
                <i
                  className="fa-solid fa-x position-absolute top-0 "
                  onClick={() => setDisplay(false)}
                ></i>
              </div>
              <div
                className="bg-wrapper position-absolute"
                onClick={() => setDisplay(false)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
