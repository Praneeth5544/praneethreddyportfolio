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
                    date="Aug 2021 - Aug 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandGithubCopilot />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Cognizant Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                        •	Achieved 80% faster and more scalable push notification delivery by designing and implementing a high-performance microservice, enhancing user experience and engagement.
                        <br/>•	Reduced message latency with WebSocket’s for efficient and reliable communication.
                        <br/>•	Increased user engagement by 50% and decreased email notifications by 30%, orchestrating the end-to-end service lifecycle to provide customers with seamless access and utilization, enhancing their experience.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/>Java, C#, JavaScript, ASP.Net, HTML, CSS, Angular, MySQL, Hibernate, React, Kafka, Microsoft Azure, Junit, Swagger
                    </p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feb 2021 - Jul 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandGithubCopilot />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Cognizant Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Development Intern</h4>
                    <p style={{'color': '#bebebe'}}>
                        •	 Developed WCF Services and REST APIs using ASP.NET MVC framework in C# using dependency injection.
                        <br/>• Integrating APIs and UI using Angular 5 and Typescript with Micro Frontend approach.
                        <br/>• Deployed projects on Microsoft Azure using Kubernetes for CI/CD, ensuring scalability and modularity. Conducted testing and code reviews to maintain code quality.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> Java, C#, JavaScript, ASP.Net, HTML, CSS, Angular, MySQL, Hibernate, React, Kafka, Microsoft Azure, Junit, Swagger</p>
                </VerticalTimelineElement>  



                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Jul 2020 - Jan 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandAzure />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Amrock LLC.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Engineering Intern</h4>
                    <p style={{'color': '#bebebe'}}>
                    •	Developed modules in Procurement domain, integrating APIs and UI using Angular and Typescript.
                        <br/>•	Utilized T-SQL to develop complex Stored Procedures in MS-SQL Server, ensuring efficient data processing.
                        <br/>•	Contributed to agile development methodologies like Scrum and utilized testing tools like Postman and Fiddler.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> Java, C#, JavaScript, ASP.Net, HTML, CSS, Angular, MySQL, Hibernate, React, Kafka, Microsoft Azure, Junit, Swagger</p>
                </VerticalTimelineElement>  
            </VerticalTimeline>
        </section>
    )
}

export default Work