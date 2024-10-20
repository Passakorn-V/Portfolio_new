import React from 'react'
import Resume from '../../assets/Resume_Passakorn_Vanchana.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Connect</a>
    </div>
  )
}

export default CTA