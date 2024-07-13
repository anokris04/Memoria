import { Button, Navbar, NavbarCollapse, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 border-gray-300 bg-amber-50'>
        <Link to="/" className='self-center text-slate-950 text-sm sm:text-2xl font-semibold dark:text-white'>
            <span className='px-2 py-2 rounded-lg bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 text-white'>Memoria</span>
        </Link>
        <form>
            <TextInput type='text' placeholder='Search' rightIcon={AiOutlineSearch} className='hidden md:inline'/>
        </form>
        <Button className='w-12 h-10 bg-purple-500 md:hidden' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline bg-blue-600'pill>
                <FaMoon/>
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone='purpleToBlue' outline>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/' className='text-base'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about' className='text-base'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/project"} as={'div'}>
                    <Link to='/project' className='text-base'>
                        Projects
                    </Link>
                </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
