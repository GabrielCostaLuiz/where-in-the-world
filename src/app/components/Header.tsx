'use client'
import React, { useContext } from "react"
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from '@/app/context/contexts';
function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <header className={`px-10 items-center shadow-md justify-between py-5  ${theme==='dark'?'bg-gray-700 text-white':null} header`}>

        <h1 className={`text-2xl font-bold`}>Where in the world?</h1>

        <p onClick={toggleTheme} className="font-semibold items-center flex gap-2 cursor-pointer"><IoMoonOutline className="" /> Dark Mode: {theme}  </p>

    </header>

  )
}
export default Header