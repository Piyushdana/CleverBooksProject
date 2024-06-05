import React from 'react';
import Img1 from '../assets/imgs/img1.svg';
// import BgImg from '../assets/imgs/HomeBgImg.svg';
import Textimg1 from '../assets/textimgs/textimg1.svg';

export default function HeaderContent() {
  return (
    <div className="flex items-center lg:justify-around   lg:h-screen">
    <div className="relative w-full h-full bg-[59%] cover   lg:bg-cover lg:bg-center lg:flex " style={{ backgroundImage: `url('https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg')` }}>
      
      <div className='flex flex-col mt-32 items-center lg:-mt-16 lg:flex-row lg:items-center'>
         
        <div className="relative z-10 flex flex-col gap-6 items-start pl-3  text-white md:pl-12 lg:pl-10 xl:pl-32 xl:mt-32">
          <h1 className="text-[28px] pl-2 font-bold tracking-wider  lg:text-[42px] lg:-mt-10 leading-snug xl:text-[57px]">Every order <br />
                  fulfilled, <span className='bg-gradient bg-clip-text text-transparent'>on time.</span> </h1>
              
              <p className='w-[94%] pl-2 text-[16px] lg:w-[70%]'>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
              
              <div className='mt-7 lg:mt-12 flex gap-2'>
                  <div>
                    <button  className=' relative text-[14px] border py-2 px-4 rounded-full   lg:text-[15px]'>Get Started With Cleverbook </button> 
                  </div>
                    
                  <div>
                    <img  className=' w-[5.5rem]  mt-3 md:w-[8.5rem] lg:w-[10.5rem] xl:w-[12.5rem]' src={Textimg1} alt="" />
                  </div>
              </div>
          </div>

          <div>
              <img src={Img1} className=' w-[36rem] lg:w-[77rem] xl:w-[88] lg:p-0 p-10 object-contain' alt="" />
          </div>

      </div>

    </div>
  </div>
  );
}


{/* <div className="flex items-center justify-around h-screen">
      <div className="relative w-full h-full bg-cover bg-center flex" style={{ backgroundImage: `url('https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg')` }}>
        <div className='flex -mt-12 items-center'>
            <div className="relative z-10 flex flex-col gap-8 items-start pl-32 text-white ">
            <h1 className="text-[57px] font-bold tracking-wider -mt-10 leading-snug">Every order <br />
                    fulfilled, on time.</h1>
                
                <p className='w-[80%] text-[18px]'>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
                
                <div className='mt-7'>
                    <button  className='text-[16px] border py-2 px-4 rounded-full'>Get Started With Cleverbook </button> 
                    <img  className='translate-x-[16rem] -mt-5' src={Textimg1} alt="" />
                </div>
            </div>

            <div>
                <img src={Img1} className='w-[85rem]' alt="" />
            </div>
        </div>

      </div>
    </div> */}