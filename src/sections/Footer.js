import React from 'react'
import Logo from '../assets/imgs/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook , faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='bg-[#151218] text-white overflow-x-hidden'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 xl:grid-cols-5 gap-16 p-5 md:p-20'>
            <div className='flex flex-col col-span-2 items-start  gap-4'>
                <div className='flex items-end  gap-4'>
                    <img className='md:w-16 w-14' src={Logo} alt="" />
                     <h2 className='text-[32px] md:text-[42px]'>CleverBooks</h2>
                </div>
                <p className='md:w-[70%] xl:w-[100%]'>CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. 
                    This helps them have the right amount of stock, optimise space and fulfil every order.</p>
            </div>

            <div className='flex flex-col list-none gap-5 md:mt-5'>
                    <h1 className='font-semibold'>Explore</h1>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Customer Review</a></li>
                    <li><a href="/">Career</a></li>
             </div>

             <div className='flex flex-col list-none lg:mt-5 gap-5'>
                    <h1 className='font-semibold'>Learn</h1>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Blog</a></li>
                     
             </div>


            <div className='flex flex-col col-span-2 xl:col-span-1 gap-6 leading-7'>
                <h1 className='font-semibold'>Contact CleaverBooks</h1>
                <span>clever@gmail.com</span>
                <span>Register office:  <br />
                     Address. Phoenix Park Castleknock Gate,
                     D15 Castleknock, Ireland. Contact. info@cleverbooks.eu · cleverbooks.</span>

                     <span>Corporate office: <br />
                            291, All Time Open, 3th Floor,
                            25th C Cross, Sector - 1,
                            Smarthub Layout, Hyderabad,
                            India.
                    </span>

                <div className='flex  text-2xl w-96 items-center flex-wrap gap-10'>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
             </div>

              
        </div>
        
        <div className='flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-2 text-center md:-translate-y-10 md:px-10 lg:px-20 xl:-translate-y-28 -translate-y-2'>

        <h2>Copywrite&copy;2024 </h2>
        <h2>Terms of service</h2>
        <h2>Privacy Policy</h2>
        </div>
    </div>
  )
}
