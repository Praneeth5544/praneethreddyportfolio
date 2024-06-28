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
                <small className='text-light'>●	Developed and maintained ASP.NET MVC applications, including RESTful APIs and web pages, resulting in a 30% reduction in code defects and a 20% increase in application performance.</small></article>
            <article className='experience__details'>
              <GoDotFill className='experience__details-icon'/>
                <small className='text-light'> ●	Refactored legacy .NET 4.8 Framework code to adhere to modern development patterns and frameworks, reducing technical debt and improving application maintainability and testability using .NET 7 Core. </small></article>
            <article className='experience__details'>
              <GoDotFill className='experience__details-icon'/>
                <small className='text-light'> ●	Designed Razor views with strongly typed view models and helpers and partial views using ASP.NET Core MVC5, HTML5, CSS3, and Angular 9/11, C, and Telerik controls.</small></article>
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
                  <small className='text-light'> ●	Developed WCF Services and REST APIs using ASP.NET MVC framework in C# using dependency injection. </small>
              </article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'> ●	Managed Kubernetes clusters using CLI tools such as Kubectl and Kubectx, performing routine maintenance tasks and 
troubleshooting issues, reducing downtime by 20%. </small></article>
              <article className='experience__details'>
                <GoDotFill className='experience__details-icon'/>
                  <small className='text-light'>●	Implemented secure authentication and authorization mechanisms using ASP.NET Identity and OAuth, enhancing application 
security by 30% and ensuring compliance with industry standards. </small></article>
              <article className='experience__details'>
                <h4>Technologies:</h4>
                  <small className='text-light'> WCF, NET, ASP.NET MVC, RESTful APIs</small>
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