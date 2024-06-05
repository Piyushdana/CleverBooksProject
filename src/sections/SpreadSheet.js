import React, { useState } from 'react';
import SpreadSheetImg from '../assets/imgs/SpreadSheetImg.webp';
import Automation from '../assets/imgs/Automation.webp';
import Purchase from '../assets/imgs/Purchase.webp'; // Add your other images here
import Distribution from '../assets/imgs/Distribution.webp';
import Integration from '../assets/imgs/Integration.webp';
import Dashboards from '../assets/imgs/Dashboards.webp';
import Consensus from '../assets/imgs/Consensus.png';
import Arrow from '../assets/imgs/ArrowRight2.svg';

const data = [
    {
        id: 'Forecasting',
        title: 'Accurate Demand Forecasting',
        para: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don\'t: trends real-time market signals, promotional activities, and even logistics disruptions.',
        img: SpreadSheetImg,
    },
    {
        id: 'Automation',
        title: 'HELIX: Workflow Automation',
        para: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird\'s eye view of your supply chain, and help you do things a spreadsheet never can.',
        img: Automation,
    },
    {
        id: 'Purchase',
        title: 'Automated Purchase Planning',
        para: 'Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What\'s more, Crest improves with every planning cycle as the data set gets richer.',
        img: Purchase,
    },
    {
        id: 'Distribution',
        title: 'Automated Distribution Planning',
        para: 'Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.',
        img: Distribution,
    },

    {
        id: 'Integration',
        title: 'Automated Distribution Planning',
        para: 'Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.',
        img: Integration,
    },

    {
        id: 'Dashboards',
        title: 'Custom Dashboards',
        para: 'Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.',
        img: Dashboards,
    },
    {
        id: 'Consensus',
        title: 'Consensus Planning',
        para: 'Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning.',
        img: Consensus,
    }
];

export default function SpreadSheet() {
    const [openSection, setOpenSection] = useState(null);

    const handleOpen = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const currentImage = data.find(item => item.id === openSection)?.img || SpreadSheetImg;

    return (
        <div>
            <h1 className='lg:text-[27px] xl:text-[44px] text-[23px] font-bold text-center'>Things Your SpreadSheet Wishes it could do</h1>
            <div className='grid grid-row-2 md:grid-cols-1 p-5 md:p-10 lg:py-10 lg:p-0 lg:grid-cols-5 lg:gap-20 xl:gap-28 justify-between py-28 lg:pl-20 xl:pl-28'>
                <div className='flex flex-col gap-1 col-span-2 order-last lg:order-none md:mt-8'>
                    {data.map((item) => (
                        <div key={item.id} className='border-b-2 py-[20px]'>
                            <h2 className='md:text-[21px] font-semibold text-[20px]' onClick={() => handleOpen(item.id)}>{item.title}</h2>
                            <div className={`${openSection === item.id ? 'animate-scrollDown' : 'hidden'}`}>
                                <p className='text-[16px] mt-3'>{item.para}</p>
                                <a href="/" className='flex items-center text-[16px] py-7 ml-1 gap-3'>Learn more <img src={Arrow} alt="" /></a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-span-3 lg:rounded-bl-3xl lg:rounded-tl-3xl -mt-4 lg:mt-0'>
                    <img className='p-6 bg-boxGradient rounded-3xl lg:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl w-full object-contain h-[100%] py-24' src={currentImage} alt="" />
                </div>
            </div>

            <div className='text-center py-8'>
                <a href="/" className='py-2 px-5 border border-gray-500 rounded-3xl'>View All Features</a>
            </div>
        </div>
    );
}
