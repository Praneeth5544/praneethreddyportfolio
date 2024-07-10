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
            
👋 I'm Praneeth Reddy Kancharkuntla. With over 5 years of experience as a Full Stack Java Developer, I have a strong background in designing, developing, and maintaining web applications across various domains. I have hands-on experience with technologies like Java, Spring Boot, Angular, React, MongoDB, and Docker, driving productivity and streamlining workflows. My expertise includes developing scalable backend services, creating interactive user interfaces, implementing secure authentication, and optimizing CI/CD pipelines. I have successfully contributed to impactful projects at Elevance Health, AT&T, and Amrock, enhancing system efficiency and user engagement. I hold a Master's degree in Computer Software Engineering from Arizona State University and a Bachelor's degree in Information Technology from Vardhaman College of Engineering. I aspire to continue my career as a software engineer, leveraging my skills to make meaningful contributions to any organization. Thank you 💜 </p>

          </div>
      </div>
    </section>
  )
}

export default About