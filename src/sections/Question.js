import React from 'react'
import Img1 from '../assets/QImgs/Img1.svg'
import BagImg from '../assets/QImgs/BagImg.svg'
import Img2 from '../assets/QImgs/Img2.svg'
import HomeImg from '../assets/QImgs/HomeImg.svg'



export default function Question() {
  return (
    <>

    

    <div className='flex flex-col gap-20 items-center py-24 px-5'>

        <div>
            <h1 className=' text-[20px] text-center md:text-[44px] font-bold tracking-normal'>Four key questions answered by Cleverbooks</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  md:p-20 gap-10 '>

            <div className='flex flex-col w-full gap-3 p-6 py-8 bg-[#f1e9fc]  rounded-[20px]'>
                <img src={Img1} className='w-[56px] h-[56px]' alt="" />
                <h1 className='text-[20px] md:text-[28px] font-semibold'>What to Order</h1>
                <p className='text-[16px] text-left'>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
            </div>

            <div className='flex flex-col gap-3 p-6 bg-[#f1e9fc] w-auto rounded-[20px]'>
                <img src={BagImg} className='w-[56px] h-[56px]' alt="" />
                <h1 className='text-[20px] md:text-[28px] font-semibold'>What to Order</h1>
                <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
            </div>

            <div className='flex flex-col gap-3 p-6 bg-[#f1e9fc] w-auto rounded-[20px]'>
                <img src={Img2} className='w-[56px] h-[56px]' alt="" />
                <h1 className='text-[20px] md:text-[28px] font-semibold'>What to Order</h1>
                <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
            </div>

            <div className='flex flex-col gap-3 p-6 bg-[#f1e9fc] w-auto rounded-[20px]'>
                <img src={HomeImg} className='w-[56px] h-[56px]' alt="" />
                <h1 className='text-[20px] md:text-[28px] font-semibold'>What to Order</h1>
                <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
            </div>

        </div>

    </div>

    </>
  )
}
