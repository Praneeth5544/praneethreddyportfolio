import React from 'react'
import './experience.css'
import { GoDotFill } from "react-icons/go";

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h2>walmart Inc.</h2>
            <h3>Software Engineering Intern</h3>
            <article className='experience__details'>
              <GoDotFill className='experience__details-icon'/>
                <small className='text-light'>Achieved 80% faster and more scalable push notification delivery by designing and implementing a high-performance microservice, enhancing user experience and engagement.</small>
            </article>
            <article className='experience__details'>
              <GoDotFill className='experience__details-icon'/>
                <small className='text-light'>Reduced message latency with WebSocket’s for efficient and reliable communication.</small>
            </article>
            <article className='experience__details'>
              <GoDotFill className='experience__details-icon'/>
                <small className='text-light'>Increased user engagement by 50% and decreased email notifications by 30%, orchestrating the end-to-end service lifecycle to provide customers with seamless access and utilization, enhancing their experience.</small>
            </article>
            <article className='experience__details'>
              <h4>Technologies:</h4>
                <small className='text-light'>.NET, ASP.NET MVC, </small>
            </article>
        </div>
     <div className="experience__frontend">
              <h2>Cisco Systems</h2>
              <h3>Software Engineer</h3>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Developed WCF Services and REST APIs using ASP.NET MVC framework in C# using dependency injection. </small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'> Integrating APIs and UI using Angular 5 and Typescript with Micro Frontend approach. </small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Deployed projects on Microsoft Azure using Kubernetes for CI/CD, ensuring scalability and modularity. Conducted testing and code reviews to maintain code quality.</small>
              </article>
              <article className='experience__details'>
                <h4>Technologies:</h4>
                  <small className='text-light'>Snowflakes, Control-m, Python, shell scripts, RESTful APIs</small>
              </article>
          </div>

          <div className="experience__frontend">
              <h2>Cisco Systems</h2>
              <h3>Software Intern</h3>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Implemented proactive dashboards, ensuring uninterrupted operations by identifying and resolving system failures.</small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Optimized infrastructure allocation and cost management, achieving a significant 20% cost reduction.</small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Facilitated cross-functional collaboration, enhancing decision-making and cost-efficiency with easy access to essential metrics and data.</small>
              </article>
              <article className='experience__details'>
                <h4>Technologies:</h4>
                  <small className='text-light'>SAP HANA, Tableau</small>
              </article>
          </div>

          <div className="experience__frontend">
              <h2>Ramaiah Institute of Technology</h2>
              <h3>Research Intern</h3>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Collaboratively researched and developed(R&D) an innovative posture monitoring project with the team, advancing healthcare technology.</small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Processed sensor data using ETL techniques, enhancing patient data accuracy for healthcare professionals.</small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>Designed and validated a user-friendly GUI, facilitating seamless data interpretation by medical practitioners.</small>
              </article>
              <article className='experience__details'>
                <h4>Technologies:</h4>
                  <small className='text-light'>Java, Spring Boot</small>
              </article>
              
          </div>

      </div>
    </section>
  )
}

export default Experience