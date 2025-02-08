import React, { useState } from 'react'

function Switch() {
    const [isSwitchOn, setisSwitchOn] = useState(false);
    const handleClick = () => {
        setisSwitchOn(!isSwitchOn);
    }
  return (
    <div onClick={handleClick} className={`w-[4.125rem] md:w-[4.5125rem] h-[2rem] md:h-[2.3rem] bg-neutral-toggleBg rounded-full  
                    flex items-center cursor-pointer hover:bg-primary-softCyan
                     transition-colors duration-300 ease-in-out
                    ${isSwitchOn ? `justify-end bg-primary-veryStrongCyan hover:bg-primary-strongCyan` : `justify-start`}`}>
      <div className='h-5 md:h-6 w-5 md:w-6 bg-neutral-white rounded-full m-2 transition-transform duration-300 ease-in-out'></div>
    </div>
  )
}

export default Switch
