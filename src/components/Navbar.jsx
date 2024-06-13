import React from 'react'
import { Link } from 'react-router-dom'
import { dark, light } from '../redux/slices/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.isDark);

    const handleTheme = () => {
        dispatch(isDark ? light() : dark());
    }

    return (
        <div className='fixed z-20 flex w-full h-10 px-20 font-semibold rounded-b-2xl bg-slate-100 dark:bg-slate-800'>
            <div className='flex items-center justify-between w-full'>
                <Link to={"/"}><h1 className='dark:text-white'><i className="mr-2 text-lg text-blue-400 fa-brands fa-google-wallet"></i>WanStore</h1></Link>
                <div className='flex items-center'>
                    <button onClick={handleTheme}><i className={`text-sm text-blue-400 hover:text-blue-500 fa-solid ${isDark ? 'fa-sun mr-[24px]' : 'fa-moon mr-[26px]'}`}></i></button>
                    <a target="_blank" href="https://github.com/ihwan4rfa"><i className="text-xl text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
