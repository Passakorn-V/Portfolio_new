import React from "react";
import "./project.css";
import cover1 from "../../assets/Work1.png";
import cover2 from "../../assets/Work3.png";
import cover3 from "../../assets/Work4.png";


const data = [
  {
    id: 1,
    image: cover1,
    title: "Website_Matching_Resumes_and_Positions",
    github: "https://github.com/Passakorn-V/final-project",
  },
  {
    id: 2,
    image: cover2,
    title: "Restaurant_SoftwareEng_Project",
    github: "https://github.com/Passakorn-V/SoftwareEng_Project",
  },
  {
    id: 3,
    image: cover3,
    title: "Food_Retail_Analyze",
    github: "https://github.com/Passakorn-V/DataCafe_Test",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
