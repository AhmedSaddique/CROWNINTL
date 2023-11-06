"use client"
import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes';

const LayoutProvider = ({ children , }) => {
    const {theme , usetheme} = useTheme();
    return (
        <ThemeProvider>
        <div className={` w-full ${
        theme=== 'dark' ? 'bg-primary-white text-primary-black ' : 'bg-primary-blue500 text-primary-black'
      }`}>
        {children}
        </div>
        </ThemeProvider>
           
     
        
    )
}

export default LayoutProvider