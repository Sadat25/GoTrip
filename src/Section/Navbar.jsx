import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Search } from 'lucide-react';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`${isScrolled && 'bg-slate-900'} py-5 fixed top-0 left-0 w-full z-1000 duration-300`}>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <img className='cursor-pointer ' src="/logo.png" alt="Logo" />
                    <ul className='flex gap-10'>
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Home</NavLink></li>
                        <li><NavLink to='/categories' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Categories</NavLink></li>
                        <li><NavLink to='/destinations' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Destinations</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Blog</NavLink></li>
                        <li><NavLink to='/pages' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Pages</NavLink></li>
                        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Dashboard</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#0d6efd] text-[20px]' : 'text-white duration-300 hover:text-[#0d6efd] text-[20px]'}>Contact</NavLink></li>
                        <Search className='cursor-pointer text-white hover:text-[#0d6efd] duration-300 h-7 w-7' />
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navbar