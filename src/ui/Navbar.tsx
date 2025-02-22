// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavElements from './NavElements.tsx';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.querySelector('html').setAttribute('class', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.querySelector('html').setAttribute('class', savedTheme);
    }
  }, []);

  return (
    <>
      <div className='flex w-full mx-auto dark:bg-transparent bg-transparent justify-between px-10 py-4 border-border-light-primary-color'>
        <div className='flex items-center animate-pulse px-4 cursor-pointer '>
          <img src={'/logo.jpg'} className='h-8 rounded-lg mr-2' alt={'logo'} />
          <a className='text-xl bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-amber-600 to-amber-500 font-bold font-poppins transition-all duration-300 ease-in-out'>
            Works
          </a>
        </div>
        <div className='flex items-center'>
          <NavElements title='Home' />
          <NavElements title='About' />
          <NavElements title='BMI' />
          <NavElements title='BMR' />
        </div>
        <div className='inline-flex'>
          {
            <div className='flex items-center'>
              <Link
                to={'/sign-in'}
                className='font-semibold text-amber-700 dark:text-gray-100 dark:hover:text-pink-500 cursor-pointer font-poppins hover:text-primary-hover-color border border-amber-700 hover:border-amber-900 hover:text-amber-900 dark:border-pink-500 rounded-md px-4 py-2 transition-all duration-300 ease-in-out m-3'
              >
                Login
              </Link>
              <Link
                to={'/sign-up'}
                className='text-gray-700 dark:bg-pink-500 dark:text-gray-100 dark:hover:bg-pink-700 font-semibold border-amber-700 border rounded-md px-4 py-2 cursor-pointer font-poppins hover:text-gray-800 bg-amber-500 hover:bg-amber-600 transition-all duration-300 ease-in-out m-3'
              >
                Register
              </Link>
            </div>
          }
          <div className='items-center flex'>
            <button
              onClick={toggleTheme}
              className='text-white cursor-pointer dark:bg-black hover:text-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition-all duration-300'
            >
              {isDarkMode ? <Sun color='#ffffff' /> : <Moon color='#de7717' />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
