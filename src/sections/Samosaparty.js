import React from "react";
import SamosaPartyImg from "../assets/imgs/SamosaPartyImg.webp";
import SamosaLogo from "../assets/imgs/SamosaLogo.svg";
import Profile1Img from "../assets/imgs/profile1img.webp";
import Arrow from "../assets/imgs/ArrowRight.svg";
import Arrow2 from "../assets/imgs/ArrowRight2.svg";

export default function Samosaparty() {
  return (
    <div className="w-full">
      {/* <div className="animate-marquee w-48  overflow-x-hidden  flex space-x-10"  > 
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471e19ebc9f547ee1453_the%20whole%20truth.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaa30f40ffaa9438ea5_swiss%20beauty%201.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg" loading="eager" alt="" class="hp-client-img"/>
         <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg" loading="eager" alt="" class="hp-client-img"/>
       <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c8d12e2df177eeec2_ajanta.svg" loading="eager" alt="" class="hp-client-img"/>
         <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c00347cedbc54fcdb_the%20white%20willow.svg" loading="eager" alt="" class="hp-client-img"/>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg" loading="eager" alt="" class="hp-client-img"/>
         <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg" loading="eager" alt="" class="hp-client-img"/>
         <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77ce4473d4ee696e286_TAILOR%20AND%20CIRCUS.svg" loading="eager" alt="" class="hp-client-img"/>
         <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg" loading="eager" alt="" class="hp-client-img"/>
    </div> */}

      <div className="grid grid-row-3 gap-10 xl:p-28 p-8  lg:grid-cols-3   ">
        <div className="flex flex-col gap-5 order-last   lg:order-first lg:gap-16 col-span-2">

          {/* paraGraph */}
          <p className="md:hidden text-left">
            D2C brands face issues with supply chain management and high growth
            startups are not equipped to run their demand forecast manually.
            Crest automates all the workflows and helps brands predict high
            demand periods and be ready to cater to customer demands
            <span>...</span>
          </p>

          <p className="hidden md:flex lg:hidden">
            D2C brands face issues with supply chain management and high growth
            startups are not equipped to run their demand forecast
            manually.Crest automates all the workflows and helps brands predict
            high demand periods and be ready to cater to customer demands It has
            a direct impact on the revenue readiness of a company and that's the
            value we see Crest unlocking for many companies in the future.
          </p>
          <p className="hidden lg:flex lg:text-[18px] lg:font-normal">
            D2C brands face issues with supply chain management and high growth
            startups are not equipped to run their demand forecast
            manually.Crest automates all the workflows and helps brands predict
            high demand periods and be ready to cater to customer demands It has
            a direct impact on the revenue readiness of a company and that's the
            value we see Crest unlocking for many companies in the future.Rahul
            and team have built a robust product with years of their experience
            distilled into the workflows.
          </p>

            {/* Profile */}
          <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={Profile1Img}
                    className="w-[60px] h-[60px] rounded-full"
                    alt=""
                  />
                </div>

                <div>
                  <h2 className="text-[16px] lg:text-[23px] font-semibold">Diksha Pandey </h2>
                  <span className="text-[15px] lg:text-[18px]">Co.Founder Samosa Party</span>
                </div>
              </div>

              <div>
                <img src={SamosaLogo} className="hidden md:flex w-[100px]" alt="" />
              </div>
          </div>

          {/* Arrow */}
          <div className=" gap-6 -mt-8 hidden lg:flex ">
            <div>
              <a href="/">
                <img src={Arrow} className="rotate-180" alt="" />
              </a>
            </div>

            <div>
              <a href="/">
                <img src={Arrow} className="" alt="" />
              </a>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid md:w-full grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 ">
            <div className="text-center bg-[#f1e9fc] p-5 rounded-xl">
              <h2 className="text-[14px] md:text-[32px] xl:text-[44px]">Upto 95%</h2>
              <span className="text-18px">Demand Fullfillmet</span>
            </div>

            <div className="text-center bg-[#f1e9fc] p-5 rounded-xl">
              <h2 className="text-[14px] lg:text-[32px] xl:text-[44px]"> {`<3%`}</h2>
              <span className="text-18px">Daily Stock-out</span>
            </div>

            <div className="text-center  items-center justify-center bg-[#f1e9fc] p-2 lg:p-5 flex gap-2 lg:rounded-xl rounded-3xl">
              <h2 className="text-[16px] xl:text-[17px]">Read Story</h2>
              <img src={Arrow2} alt="" />
            </div>

            {/* Mobile Screen Arrow */}
            <div className="flex gap-6 items-center text-right mx-auto lg:hidden ">
              <div>
                <a href="/">
                  <img src={Arrow} className="rotate-180 w-[4rem]" alt="" />
                </a>
              </div>

              <div>
                <a href="/">
                  <img src={Arrow} className="w-[4rem]" alt="" />
                </a>
              </div>
            </div>


          </div>
        </div>

          {/* Bucket Img */}
          <div className="border  border-#d8c3ff rounded-2xl h-full col-span-2 lg:col-span-1">
            <img
              className="w-full border  border-#d8c3ff h-full object-[85%] rounded-2xl object-cover "
              src={SamosaPartyImg}
              alt=""
            />
          </div>
      </div>
    </div>
  );
}

// <div className='grid md:grid-cols-3 gap-10 p-28 '>
// <div className='flex flex-col gap-16 col-span-2'>
//     <p className='text-[18px] font-normal'>D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust
//       product with years of their experience distilled into the workflows.
//     </p>

//  <div className='flex items-center justify-between'>
//       <div className='flex items-center gap-4'>
//           <div>
//             <img src={Profile1Img} className='w-[60px] h-[60px] rounded-full' alt="" />
//           </div>

//           <div>
//             <h2 className='text-[23px] font-semibold'>Diksha Pandey </h2>
//             <span className='text-[18px]'>Co.Founder Samosa Party</span>
//           </div>
//       </div>

//       <div>
//           <img src={SamosaLogo} className='w-[100px]' alt="" />
//       </div>
// </div>

// <div className='flex gap-6 -mt-8'>
//     <div>
//       <a href="/"><img src={Arrow} className='rotate-180' alt="" /></a>
//     </div>

//     <div>
//       <a href="/"><img src={Arrow} className='' alt="" /></a>
//     </div>
// </div>

// <div className='grid grid-cols-3 gap-10 items-center'>
//   <div className='text-center bg-[#f1e9fc] p-5 rounded-xl'>
//       <h2 className='text-[44px]'>Upto 95%</h2>
//       <span className='text-18px'>Demand Fullfillmet</span>
//   </div>
//   <div className='text-center bg-[#f1e9fc] p-5 rounded-xl'>
//       <h2 className='text-[44px]'> {`<3%`}</h2>
//       <span className='text-18px'>Daily Stock-out</span>
//   </div>
//   <div className='text-center items-center justify-center bg-[#f1e9fc] p-11  rounded-xl'>
//       <h2 className='text-[18px]'>Read Story</h2>
//       <img src={Arrow2} alt="" />
//   </div>
// </div>
// </div>

// <div className='border  border-#d8c3ff rounded-2xl col-span-1'>
//     <img className='w-full h-full object-[85%] rounded-2xl object-cover' src={SamosaPartyImg} alt="" />
// </div>
// </div>
