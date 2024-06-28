import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h4>Degree</h4>
                  <h5>Master of Science</h5>
                  <h6><i>Arizona State University</i></h6>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h4>Current GPA</h4>
                  <h5>3.8</h5>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h4>Major</h4>
                  <h5>Computer Software Engineering</h5>
              </article>
            </div>
            <p>
            👋 I'm Praneeth Reddy. As a driven graduate student at Arizona State University, I am constantly seeking opportunities to expand my knowledge and skills in the technology industry. With a positive and proactive approach, I embrace challenges and am committed to gaining valuable experience. My professional experience includes roles as a Software Developer at Delta Dental Insurance and Amrock LLC, as well as an internship at Cognizant Technology Solutions, where I honed my expertise in .NET, ASP.NET, MVC, RESTful APIs, and modern development patterns. I have successfully developed and maintained various applications, implemented CI/CD pipelines, and managed cloud deployments with Azure. Additionally, I have led and contributed to impactful projects such as ScanIT, ASU Pantry Application, and FoodGeeks. I aspire to secure a fulfilling career as a software engineer or software development engineer, utilizing my expertise to make meaningful contributions to the success of any organization. Thank you 💜
            </p>

          </div>
      </div>
    </section>
  )
}

export default About