import React from 'react'
import IconSVG from '..//../assests/heroPic.svg'

const HeroPic = () => {
  return (
    <div className="flex items-center justify-center  rounded-lg shadow-lg">
        <img src={IconSVG} alt="Icon" className="h-full " />
    </div>

  )
}

export default HeroPic