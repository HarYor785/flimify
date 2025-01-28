'use client'

import React, { useEffect, useState } from 'react'
import {usePathname, useRouter} from 'next/navigation'
import Link from 'next/link'
import { IoMdArrowDropdown } from "react-icons/io";
import Input from '../ui/Input';
import { BiSearch } from "react-icons/bi";
import Button from '../ui/Button';
import { FaRegUser } from "react-icons/fa";
import { IoMenu, IoClose, } from "react-icons/io5";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { GoBookmark } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { TbLogout } from "react-icons/tb";
import { CiSquareQuestion } from "react-icons/ci";
import {toast} from 'react-toastify'
import { handleRemoveUser } from '@/states/userSlice';
import Request from '../request/Request';
import logo from '@images/logo.png'
import Image from 'next/image';

const NavLink = ({href, title, icon: Icon, left, right, onClick}) =>{
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === href : pathname.includes(href)

  return(
    <Link href={href} onClick={onClick}
    className={`text-xs uppercase transition-all duration-300 ease-in-out font-bold 
      flex items-center gap-1 hover:text-main ${isActive ? 'text-main' : 'text-primaryText'}`}>
      {left && Icon && <Icon size={20} className="text-primaryText"/>}
      {title}
      {right && Icon && <Icon size={20} className="text-primaryText"/>}
    </Link>
  )
}

const SubNavbar = ({openSubNav, setOpenSubNav, handleOpenRequest, dispatch}) => {

  return(
    <div onClick={()=>setOpenSubNav(false)} 
    className={`fixed w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.1)] 
    flex items-start justify-end p-4 z-[999] transition-all duration-300 
    ease-in-out animate-fade-in
    ${openSubNav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div onClick={(e)=>e.stopPropagation()}
      className="flex flex-col items-start gap-3 bg-primary rounded-md mt-12 
        shadow-md p-4 transition-all duration-300 ease-in-out animate-zoom-in">
          <NavLink href="/profile" title="Profile" icon={RiAccountPinBoxLine} left={true}/>
          <NavLink href="/watchlist" title="Watchlist" icon={GoBookmark} left={true}/>
          <NavLink href="#" title="Request" icon={CiSquareQuestion} left={true} 
          onClick={handleOpenRequest}/>
          <NavLink href="/#" title="Logout" icon={TbLogout} left={true}
          onClick={()=>dispatch(handleRemoveUser)}/>
        </div>
    </div>
  )
}

const Navbar = () => {
  const {user} = useSelector((state)=>state.user)
  const [open, setOpen] = useState(false)
  const [openRequest, setOpenRequest] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [isMobileSearch, setIsMobileSearch] = useState(false)
  const [openSubNav, setOpenSubNav] = useState(false)
  const [value, setValue] = useState('')
  const {push} = useRouter()
  const dispatch = useDispatch()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(()=>{
    const handleResize = () =>{
      if(window.scrollY < 768){
        setIsMobileSearch(true)
      }else{
        setIsMobileSearch(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () =>{
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const handleSearch = () => {
    if(value <=2 ){
      toast.info('Enter atleast 3 characters')
      return
    }
    push(`/search?search_query=${value}`)
  }
  

  const iconOnclick = () => {
    if (isMobileSearch) {
      setOpenSearch(true);
    } else {
      handleSearch();
    }
  };

  const handleOpenRequest = () =>{
    setOpenSubNav(false)
    setOpenRequest(true)
  }

  const handlePushLogin = ()=>{
    const lastUrl = window.location.href
    localStorage.setItem('lastUrl', lastUrl)
    push('/login')
  }

  return (
    <>
      <div className="w-full h-[60px] fixed top-0 left-0 flex items-center justify-center 
      bg-secondary border-b border-primary z-[999]">

        {/* OVERLAY */}
        {
          open && 
          <div className='w-full md:hidden h-screen bg-black bg-opacity-15 content-[""] 
          absolute top-0 left-0 z-[998]'
          onClick={()=>setOpen(false)}></div>
        }

          <nav className="w-full mx-auto md:px-20 px-4
          flex items-center justify-between z-[999]">

            {/* LOGO AND LINKS */}
            <div className="flex md:items-center items-start gap-12">
              {/* LOGO */}
              <Link href={'/'} className="text-3xl text-secondaryText font-bold uppercase">
                <Image src={logo} alt='Flimify Logo'
                width={150} height={150}
                className=''/>
              </Link>

              {/* LINKS */}
              <ul className={`flex md:items-center items-start md:flex-row md:gap-4 gap-8 md:relative 
              absolute top-0 flex-col md:p-0 p-2 md:px-0 px-8 md:w-fit w-[250px] md:bg-transparent 
              bg-primary md:h-fit h-screen transition-all ease-in-out duration-300  
              ${open ? 'right-0' : 'md:right-auto right-[-100%]'} animate-slide-in-right`}>
                <li className='w-full my-2 md:hidden flex items-center justify-between'>
                  <Link href={'/'} className="text-2xl text-secondaryText font-bold uppercase">
                    FLI<span className="text-main">MIFY</span>
                  </Link>
                  <button onClick={()=>setOpen(false)}
                  className='text-red-700 self-end'>
                    <IoClose size={30}/>
                  </button>
                </li>
                <li>
                  <NavLink href="/" title="Home"/>
                </li>
                <li className="relative group">
                  <NavLink href="#" title="Movies" icon={IoMdArrowDropdown} right={true}/>
                  <div className="absolute hidden top-5 left-0 p-3 px-4 bg-primary rounded-md 
                  shadow-md group-hover:flex flex-col items-start gap-3 transition-all 
                  duration-300 ease-in-out animate-fade-in">
                    <NavLink href="/african" title="African"/>
                    <NavLink href="/animations" title="Animations"/>
                    <NavLink href="/bollywood" title="Bollywood"/>
                    <NavLink href="/international" title="International"/>
                  </div>
                </li>
                <li>
                  <NavLink href="/tv-series" title="Tv-Series"/>
                </li>
                <li>
                  <NavLink href="/tv-series" title="K-Drama"/>
                </li>
                <li>
                  <NavLink href="/community" title="Community"/>
                </li>
              </ul>
            </div>

            {/* SEARCH AND USER LOGIN */}
            <div className='flex items-center md:justify-normal justify-end gap-3'>
              {/* DESKTOP SEARCH */}
              <Input type={'text'} className="h-[20px] md:block hidden" 
                placeHolder="Search..."
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                icon={BiSearch} iconClass={`text-xl cursor-pointer`} 
                iconOnclick={iconOnclick}
              />
              {
                user?.token && mounted ? (
                  <Button title={isMobileSearch ? '' : (user?.userName)}
                  icon={isMobileSearch ? FaRegUser : null}
                  onClick={()=>setOpenSubNav(!openSubNav)}/>
                ) : (
                  <Button title={'Login'} 
                  onClick={handlePushLogin}
                  className={`md:block hidden`}/>
                )
              }

              {/* OPEN MOBILE MENU */}
              <button className='text-secondaryText md:hidden block'
              onClick={()=>setOpen(!open)}>
                <IoMenu size={25}/>
              </button>
            </div>
          </nav>
      </div>

      {/* SUB NAVBAR */}
      {
        openSubNav &&
        <SubNavbar openSubNav={openSubNav} 
        setOpenSubNav={setOpenSubNav}
        handleOpenRequest={handleOpenRequest}
        dispatch={dispatch}/>
      }

      {/* MOBILE SEARCH */}
      {
        openSearch &&
        <div className='md:hidden fixed w-full h-screen top-0 left-0
        py-16 px-6 bg-[rgba(0,0,0,0.1)] z-[1000] animate-fade-in'
        onClick={()=>setOpenSearch(false)}>
          <div className='flex flex-col gap-2'
          onClick={(e)=>e.stopPropagation()}>
            <button onClick={()=>setOpenSearch(false)}
            className='text-red-700 self-end'>
              <IoClose size={30}/>
            </button>
            <Input type={'text'} className="h-[20px]" placeHolder="Search..."
            icon={BiSearch} iconclassName={`text-xl cursor-pointer`}
            value={value} iconOnclick={handleSearch}
            onChange={(e)=>setValue(e.target.value)}
            />
          </div>
        </div>
      }

      {
        openRequest && <Request isOpen={openRequest} 
        setOpenRequest={setOpenRequest}/>
      }
    </>
  )
}

export default Navbar