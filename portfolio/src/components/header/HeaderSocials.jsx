import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials  = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com/in/bryn-williams-ab027083/" target='_blank'><AiOutlineLinkedin/></a>
    <a href="https://github.com/bryn9696" target='_blank'><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials