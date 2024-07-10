import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbBrandAzure } from "react-icons/tb";
import { TbBrandGithubCopilot } from "react-icons/tb";

const Work = () => {
    return (
        <section id='experience'>
            <h2>My Experience</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2023 - May 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandGithubCopilot />} >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Elevance Health</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Full Stack Java Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                    <br/>● Developed and optimized the Appointment Scheduling Module using Java, Spring Boot, and J2EE, enhancing scheduling efficiency by 30% through effective API design and database integrations with MongoDB and SQL Server.
                    <br/>● Designed and deployed the Insurance Policy Module using Java, Spring Boot, Docker, AWS, Kubernetes, and Jenkins, resulting in a 35% improvement in user interface responsiveness and consistent user experience across platforms.

                    <br/>● Implemented Reactive Forms and Angular Services for seamless API communication with Spring Boot, leading to a 30% improvement in user engagement and scheduling efficiency.
                    <br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/>: JavaSE, JDK 1.8, Hibernate 3.0, Spring, React, AWS, Groovy, Tiles, JSP, HTML, CSS, Angular 4, jQuery, XML, XSLT, SQL Server, Maven, Apache Tomcat 8, Sonar, Eclipse 6.0, SVN, WindowsXP, Jenkins, Springboot, JUnit, MongoDB, Docker</p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2020 - June 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandGithubCopilot />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>AT&T</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}> Java/J2EE Developer </h4>
                    <p style={{'color': '#bebebe'}}>● Designed and developed the Customer Management Module using Java, Spring Boot, and Hibernate, managing customer profiles with MySQL, and built interactive UIs with Angular and SASS for a responsive experience.
<br/>● Implemented secure authentication with Spring Security, utilizing JWT and OAuth 2.0 for user login and role-based access control, ensuring secure access to customer information.
<br/>● Architected and deployed the Billing and Payment Module with Java, Spring Boot, and PostgreSQL, leveraging Docker and Kubernetes for microservices, and configured CI/CD pipelines with Jenkins, reducing deployment time by 50% and increasing release frequency by 40%.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> Java, JavaScript, Spring Boot, J2EE, Angular, Spring MVC, MongoDB, SQL Server, Docker, AWS, Kubernetes, Jenkins, Reactive Forms, Angular Services</p>
                </VerticalTimelineElement>  



                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="June 2018 - July 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandAzure />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}> Amrock </h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Java Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                    ●	Developed scalable and maintainable user interfaces using JavaScript, React, and Material-UI, integrated with SASS to optimize
user experience and maintainability.<br/>●	Architected efficient middleware functions in Node.js and Express.js, enhancing authentication mechanisms and error handling,
resulting in a 30% reduction in processing time.
<br/>●	Leveraged Spring MVC to develop RESTful APIs and web applications, optimizing controller mappings and request handling to
improve response times and application performance. 

                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/>Java, JavaScript, Spring Boot, J2EE, Angular, Spring MVC, MongoDB, SQL Server, Docker, AWS, Kubernetes, Jenkins, Reactive Forms, Angular Services</p>
                </VerticalTimelineElement>  
            </VerticalTimeline>
        </section>
    )
}

export default Work