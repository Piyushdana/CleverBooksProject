import React, { useState, useEffect } from 'react';
import Arrow from '../assets/imgs/ArrowRight.svg';

const Data = [
  {
    img: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg',
    title: 'Purpose-built & ever-improving tech',
    content: `Our demand forecasting engine has been meticulously built,
         while our ML engine constantly trains on years of data and is ever-evolving`,
  },
  {
    img: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png',
    title: 'Deep Domain Expertise',
    content: `Our team members have years of experience leading supply 
        chains for businesses ranging from $10M to $10B.`,
  },
  {
    img: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg',
    title: 'A focus on KPIs that matter',
    content: `Our tools help you make decisions to grow your business. Everything 
        works towards improving cash flow and product availability.`,
  },
  {
    img: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg',
    title: 'Ease of use, for everyone',
    content: `With an intuitive interface and empathetic design, 
        Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.`,
  },
];

export default function MetricsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? Data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === Data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (

    <>  

    <div className='flex flex-col bg-gray-100'> 
    <h1 className='text-center font-semibold text-[23px] md:text-[27px] lg:text-[37px] xl:text-[43px]  mt-20'>Get CleverBook and get...</h1>
    <div className="flex  p-5 justify-center items-center h-screen  relative">
      <img
        src={Arrow}
        onClick={prevSlide}
        className="rotate-180 px-4 cursor-pointer hidden md:flex left-0"
        alt="Previous"
      />
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Data.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center p-8"
            >
              <div className="flex-1 w-full md:w-1/2">
                <img
                  src={item.img}
                  alt="Illustration"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={Arrow}
        onClick={nextSlide}
        className="px-4 cursor-pointer right-0 hidden md:flex "
        alt="Next"
      />
    </div>
    </div>
    </>
  );
}
