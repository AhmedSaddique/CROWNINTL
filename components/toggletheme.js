import React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('dark'); // Set to a specific theme (e.g., 'dark')
    } else {
      setTheme('system'); // Set to system theme
    }
  };

  return (
    <>

    <label class="relative inline-flex items-center cursor-pointer">
    <input class="sr-only peer" value="" type="checkbox" onClick={toggleTheme}/>
    <div
      className={`w-10 h-10 rounded-full ring-0 peer duration-500 outline-none bg-primary-white shadow overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-before:content-[${theme === 'system' ? '☀️' : '🌑'}] after:content-['☀️']  before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full   peer-checked:bg-primary-white before:content-['🌑'] after:absolute after:bg-primary-blue500 after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0`}

    ></div>
  </label>
  </>
  );
};

export default ThemeToggle;
