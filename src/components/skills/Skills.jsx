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
                    <h4>Cloud and Databases</h4>
                    <h4 className='text-light'>
                        <ul>• AWS</ul>
                        <ul>• Docker</ul>
                        <ul>• Jenkins</ul>
                        <ul>• MySQL</ul>
                        <ul>• MongoDB</ul>
                        <ul>• PostgreSQL</ul>
                        <ul>• Cassandra</ul>
                    </h4>
                </div>
            </article>
            <article className='experience__details'>
                <div className='spacing'>
                    <h4>Tools and Technology</h4>
                    <h4 className='text-light'>
                        <ul>• Linux</ul>
                        <ul>• GitHub</ul>
                        <ul>• Google Colab</ul>
                        <ul>• Postman</ul>
                        <ul>• Swagger</ul>
                        <ul>• GIT</ul>
                        <ul>• GitHub Actions</ul>
                        <ul>• Azure Release Management</ul>
                        <ul>• Terraform</ul>
                        <ul>• Kubernetes CLI (Kubectl, Kubectx)</ul>
                        <ul>• Helm</ul>
                        <ul>• Kafka</ul>
                    </h4>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Experience
