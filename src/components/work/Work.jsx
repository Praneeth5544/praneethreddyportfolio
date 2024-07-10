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
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2023 - May 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<TbBrandGithubCopilot />} >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Elevance Health</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Full Stack Java Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                        ● Enhanced scheduling efficiency by 30% through effective API design in Spring Boot and database integrations with MongoDB and SQL Server.
                        <br/>● Improved UI responsiveness by 35% and ensured consistent user experience using Angular and Spring MVC.
                        <br/>● Increased user engagement by 30% with Reactive Forms and Angular Services for seamless API communication.
                        <br/><span style={{'color': '#4db5ff'}}>Technologies: </span> Java, Spring Boot, J2EE, Angular, MongoDB, SQL Server, Docker, AWS, Kubernetes, Jenkins
                    </p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2020 - June 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<TbBrandGithubCopilot />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>AT&T</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Java/J2EE Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                        ● Managed customer profiles with Spring Boot and MySQL, integrating Angular and SASS for interactive UIs.
                        <br/>● Implemented secure authentication with Spring Security, JWT, and OAuth 2.0 for user login and role-based access.
                        <br/>● Reduced deployment time by 50% with Docker, Kubernetes for microservices, and Jenkins for CI/CD pipelines.
                        <br/><span style={{'color': '#4db5ff'}}>Technologies: </span> Java, Spring Boot, Hibernate, Angular, SASS, MySQL, Spring Security, Docker, Kubernetes, Jenkins
                    </p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="June 2018 - July 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<TbBrandAzure />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Amrock</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Java Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                        ● Developed scalable UIs with React, Material-UI, and SASS to optimize user experience and maintainability.
                        <br/>● Enhanced authentication and error handling with Node.js and Express.js, reducing processing time by 30%.
                        <br/>● Optimized RESTful APIs and web applications using Spring MVC for better performance.
                        <br/><span style={{'color': '#4db5ff'}}>Technologies: </span> JavaScript, React, Material-UI, SASS, Node.js, Express.js, Spring MVC, Java
                    </p>
                </VerticalTimelineElement>  
            </VerticalTimeline>
        </section>
    )
}

export default Work
