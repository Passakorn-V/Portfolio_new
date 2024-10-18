import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3> Software Engineer</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
            <p>Front to back-end development and Deploy in Cloud (AWS).</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Continued on structure and design of website.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Responsive web-design that is inclusive.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>UI/UX centered design to keep site easy.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Create Document about code or SRS.</p>
            </li>
          </ul>
        </article>
        {/* START WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3> Data Engineer</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
            <p>Designing and Maintaining Databases. </p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Create Pipelines , collect to Data Lake and Data Warehouses </p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Monitoring the stability of data pipelines</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Installing or developing data management tools</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Take care of Data Governance and Data Quality in the organization.</p>
            </li>
          </ul>
        </article>
        {/* START OF CONTENT CREATION */}
        <article className='service'>
          <div className="service__head">
            <h3> Data Scientist</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
            <p>Analyze Problem and Requirement Gathering.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Find Insight , Take Actions and Calculate ROI.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Build Predictive Model with Low-Code.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Build Customer Segmentation with Low-Code.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Build Topic Detection using PyThaiNLP.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services