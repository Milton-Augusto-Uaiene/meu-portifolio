import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/milton-augusto-uaiene-b32b4a250/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><BsGithub/></a>
        <a href='https://www.facebook.com/miltonaugusto.torronto/' target='_blank'><FiFacebook/></a>
    </div>
  )
}

export default HeaderSocial