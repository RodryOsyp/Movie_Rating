import React from 'react'
import { sendCustomEmail } from './emal'

const About = () => {

  return (
    
    <div>
      <label htmlFor="">name</label>
      <input type="text" />
      <button onClick={sendCustomEmail}>Button</button>
    </div>
  )
}

export default About