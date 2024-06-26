import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <h3>Contact Me at</h3>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/praneeth-reddy-kancharkuntla/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
          <a href="mailto:praneethreddykancharkuntla@gmail.com" target="_blank" rel='noreferrer'><MdEmail/></a>
        </div>
    </footer>
  )
}

export default Footer