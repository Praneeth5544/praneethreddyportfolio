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
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Delta Dental Insurance</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Developer</h4>
                    <p style={{'color': '#bebebe'}}>
                        ●	Developed and maintained ASP.NET MVC applications, including RESTful APIs and web pages, resulting in a 30% reduction in code defects and a 20% increase in application performance. 
                        <br/>●	Refactored legacy .NET 4.8 Framework code to adhere to modern development patterns and frameworks, reducing technical debt and improving application maintainability and testability using .NET 7 Core. 
                           <br/> ●	Designed Razor views with strongly typed view models and helpers and partial views using ASP.NET Core MVC5, HTML5, CSS3, and Angular 9/11, C, and Telerik controls. 

                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/>C#, JavaScript, ASP.Net, HTML, CSS, Angular, MySQL, Hibernate, React, Kafka, Microsoft Azure, Junit, Swagger
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
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Programmer Analyst</h4>
                    <p style={{'color': '#bebebe'}}>●	Developed WCF Services and REST APIs using ASP.NET MVC framework in C# with dependency injection, enhancing modularity 
        and code testability by 35%.  
<br/>●	Managed Kubernetes clusters using CLI tools such as Kubectl and Kubectx, performing routine maintenance tasks and 
troubleshooting issues, reducing downtime by 20%. 
<br/>●	Implemented secure authentication and authorization mechanisms using ASP.NET Identity and OAuth, enhancing application 
security by 30% and ensuring compliance with industry standards. 

                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> C#, JavaScript, ASP.Net, HTML, CSS, Angular, MySQL, Kubernates(Kubectl & Kubectx), Microsoft Azure, Swagger</p>
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
                    ●	Applied Object-Oriented Programming (OOPs) procedures to develop, modify, and debug front-end/back-end software applications using C# (.NET Core), JavaScript, Node.js, HTML, CSS, resulting in a 20% improvement in application performance.
<br/>●	Implemented advanced T-SQL features such as Common Table Expressions (CTEs), window functions, and pivoting for complex 
data transformations, resulting in a 20% increase in query efficiency and data processing speed. 
<br/>●	Utilized T-SQL to develop complex stored procedures in MS-SQL Server, ensuring efficient data processing and handling up to 
	10,000 transactions per minute. 

                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> Java, C#, JavaScript, ASP.Net, HTML, CSS, Angular, MySQL, Hibernate, React, Kafka, Microsoft Azure, Junit, Swagger</p>
                </VerticalTimelineElement>  
            </VerticalTimeline>
        </section>
    )
}

export default Work