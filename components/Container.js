
import { useTheme } from 'next-themes';
import React from 'react'

const Container = ({className, children}) => {
  const { theme, setTheme } = useTheme();

  return (

    <div className={`max-w-screen-xxl mx-auto px-4 md:px-6 lg:px-8 ${className} ${
      theme === 'dark' ? ' text-primary-black' : ' text-primary-white '
    }` } >
      {children}
      </div>

        
  )
}

export default Container