import React from "react";
import "./experience.css";
import { BsCheck2Circle } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>Acquired Skills</h2>
      {/* ------------- START FRONT-END CARD ------------- */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Engineer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* ------------- START BACK-END CARD ------------- */}
        <div className="experience__backend">
          <h3>Data Engineer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>SQL (MySQL)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>NoSQL (MongoDB)</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Cloud (AWS)</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Apache Airflow</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Power BI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>DataBrick</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__details-icon" />
              <div>
                <h4>Git , GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
