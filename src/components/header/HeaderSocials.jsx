import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { ImProfile } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/praneeth-reddy-kancharkuntla/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        {/* <a href="https://github.com/chisunku" target="_blank" rel='noreferrer'><BsGithub/></a> */}
        <a href="https://drive.google.com/file/d/12Hr0sO-Fc3u0PF6Jtjsh9tVqgzH36HZi/view?usp=sharing" target="_blank" rel='noreferrer'><ImProfile/></a>
    </div>
  )
}

export default HeaderSocials