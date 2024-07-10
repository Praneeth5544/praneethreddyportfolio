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
                        <ul>• JavaScript</ul>
                        <ul>• C#</ul>
                        <ul>• HTML</ul>
                        <ul>• CSS</ul>
                        <ul>• SQL</ul>
                        <ul>• PL/SQL</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Frameworks</h4>
                    <h4 className='text-light'>
                        <ul>• Angular</ul>
                        <ul>• React.js</ul>
                        <ul>• Spring Boot</ul>
                        <ul>• Hibernate</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Frontend Tech</h4>
                    <h4 className='text-light'>
                        <ul>• Angular</ul>
                        <ul>• React.js</ul>
                        <ul>• HTML</ul>
                        <ul>• CSS</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Cloud Technologies</h4>
                    <h4 className='text-light'>
                        <ul>• AWS</ul>
                        <ul>• Azure</ul>
                        <ul>• Kubernetes</ul>
                        <ul>• Docker</ul>
                        <ul>• Terraform</ul>
                        <ul>• Helm</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Database Technologies</h4>
                    <h4 className='text-light'>
                        <ul>• MySQL</ul>
                        <ul>• MongoDB</ul>
                        <ul>• PostgreSQL</ul>
                        <ul>• Cassandra</ul>
                        <ul>• Snowflake</ul>
                        <ul>• SAP HANA</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Tools and Technology</h4>
                    <h4 className='text-light'>
                        <ul>• GIT</ul>
                        <ul>• GitHub Actions</ul>
                        <ul>• Google Colab</ul>
                        <ul>• Postman</ul>
                        <ul>• Swagger</ul>
                        <ul>• Jenkins</ul>
                        <ul>• Kafka</ul>
                        <ul>• Figma</ul>
                        <ul>• OpenAI</ul>
                        <ul>• Linux</ul>
                        <ul>• Azure Release Management</ul>
                    </h4>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Experience
