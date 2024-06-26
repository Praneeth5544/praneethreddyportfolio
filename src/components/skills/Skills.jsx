import React from 'react'
import './Skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='skills'>
        <h2>My Skills</h2>
        <div className="container experience__container">
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Languages</h4>
                    <h4 className='text-light'>
                        <ul>• Java</ul>
                        <ul>• Python</ul> 
                        <ul>• C</ul>
                        <ul>• C++</ul>
                        <ul>• JavaScript</ul>
                        <ul>• C#</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Database Tech</h4>
                    <h4 className='text-light'>
                        <ul>• SQL</ul>
                        <ul>• NoSQL</ul> 
                        <ul>• MySQL</ul>
                        <ul>• PostgreSQL</ul>
                        <ul>• SQLite</ul>
                        <ul>• Firebase</ul>
                        <ul>• DynamoDB</ul>
                        <ul>• MongoDB</ul>
                        <ul>• Snowflake</ul>
                        <ul>• SAP HANA</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Cloud Tech</h4>
                    <h4 className='text-light'>
                        <ul>• AWS</ul>
                        <ul>• Azure</ul>
                        <ul>• GCP</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Frontend Tech</h4>
                    <h4 className='text-light'>
                        <ul>• ReactJS</ul>
                        <ul>• HTML</ul>
                        <ul>• CSS</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Other Tech</h4>
                    <h4 className='text-light'>
                        <ul>• Tableau</ul>
                        <ul>• Spring Boot</ul>
                        <ul>• Hibernate</ul>
                        <ul>• Node.js</ul>
                        <ul>• GIT</ul>
                        <ul>• Android Studio</ul>
                        <ul>• OpenAI</ul>
                        <ul>• Figma</ul>
                        <ul>• Kubernetes</ul>
                        <ul>• Jenkins</ul>
                    </h4>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Experience