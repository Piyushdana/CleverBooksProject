import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBarsStaggered}from '@fortawesome/react-fontawesome  '
import { faBarsStaggered, faClose } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets//imgs/Logo.png'
export default function NavBar() {

  const [open, setOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection(null);
        return;
      }

      if (currentScroll > lastScroll) {
        setScrollDirection('down');
      } else if (currentScroll < lastScroll) {
        setScrollDirection('up');
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function handleOpen(){
      setOpen(prevOpen => !prevOpen);
  }

  return (
        <> 
        <div className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        } bg-primary bg-opacity-70 flex items-center justify-around md:justify-between px-2 py-5 lg:px-10 lg:py-3 xl:px-36 md:py-5 text-white`}>
                <div className='flex space-x-2 items-center'>
                    <img src={Logo} className='w-16' alt="Logo" />
                    <span className=' text-xl lg:text-2xl font-bold'>Cleverbooks</span>
                </div>

                <div className=''>
                    <ul className='hidden lg:flex space-x-10 py-5'>
                        <li> <a href="/" className='text-[16px]'>Product</a></li>
                        <li><a href="/"  className='text-[16px]' >Pricing</a></li>
                        <li><a href="/"  className='text-[16px]' >Industry</a></li>
                        <li><a href="/"  className='text-[16px]'>Customer Stories</a></li>
                        <li><a href="/"  className='text-[16px]'>About</a></li>
                        <li><a href="/"  className='text-[16px]'>Blog</a></li>
                    </ul>
                </div>


                <div className='hidden lg:flex gap-5 items-center'>
                    <a href="/" className='text-gradient bg-gradient bg-clip-text text-transparent'>Login</a>
                    <a href="/" className='bg-custom-gradient py-2 px-4 rounded-full'>Talk to Us</a>
                </div>

        <FontAwesomeIcon onClick={handleOpen} className=' text-xl mt-1 text-white lg:hidden' icon={open ? faClose : faBarsStaggered} />


     </div>

                { open && <div className='bg-white  animate-slideInLeft  mt-20  flex-col gap-2 '>
              <div className='px-5'>
                    <ul className='space-y-10 py-8'>
                        <li> <a href="/" className='text-[16px]'>Product</a></li>
                        <li><a href="/"  className='text-[16px]' >Pricing</a></li>
                        <li><a href="/"  className='text-[16px]' >Industry</a></li>
                        <li><a href="/"  className='text-[16px]'>Customer Stories</a></li>
                        <li><a href="/"  className='text-[16px]'>About</a></li>
                        <li><a href="/"  className='text-[16px]'>Blog</a></li>
                    </ul>
                </div>


                <div className='flex text-gradient items-center justify-center flex-row space-x-2 py-5'>
                    <a href="/">Login</a>
                    <a href="/" className='bg-custom-gradient py-2 px-4 rounded-full'>Talk to Us</a>
                </div>

                </div>}
     </>
  )
}



 



{/* <div className='bg-primary flex items-center justify-around text-white'>
            <div className='flex space-x-4 items-center'>
                <img src="" alt="Logo" />
                <span className='text-2xl font-bold'>Cleverbooks</span>
            </div>

            <div>
                <ul className='flex space-x-10 py-5'>
                    <li> <a href="/" className='text-[16px]'>Product</a></li>
                    <li><a href="/"  className='text-[16px]' >Pricing</a></li>
                    <li><a href="/"  className='text-[16px]' >Industry</a></li>
                    <li><a href="/"  className='text-[16px]' >Customer Stories</a></li>
                    <li><a href="/"  className='text-[16px]' >About</a></li>
                    <li><a href="/"  className='text-[16px]' >Blog</a></li>
                </ul>
            </div>


            <div className='flex gap-5 items-center'>
                <a href="/">Login</a>
                <a href="/" className='bg-red-200 py-2 px-4 rounded-full'>Talk to Us</a>
            </div>
    </div> */}