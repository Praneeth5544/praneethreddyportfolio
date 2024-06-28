import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { ImProfile } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/praneeth-reddy-kancharkuntla/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        {/* <a href="https://github.com/chisunku" target="_blank" rel='noreferrer'><BsGithub/></a> */}
        <a href="https://drive.google.com/file/d/15cWn5D7s53Vmt95FJr345F0dui_mBMu7/view?usp=drive_link" target="_blank" rel='noreferrer'><ImProfile/></a>
    </div>
  )
}

export default HeaderSocials