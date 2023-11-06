import React from 'react'

const Badges = ({title , className}) => {
  return (
    <>
     <div>
     <div className={`${className}  p-1 rounded-lg w-[70px] border h-8  font-semibold`}>
        {title}
        </div>
     </div>   
        
    </>
  )
}

export default Badges