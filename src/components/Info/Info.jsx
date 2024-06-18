import React from 'react'
import happyMom from '../../assets/images/happyMom.png';
const Info = () => {
  return (
    <div className='bg-red-700 h-auto pt-[100px]'>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] flex flex-col lg:flex-row'>
            <div className='flex-1'>
                <img src={happyMom} className='h-full w-full object-cover' alt='Image of mother and child' />
            </div>
            <div className='flex-1 rounded-3xl pb-[100px]'>
                <div className=' bg-white h-full rounded-3xl p-[20px] flex flex-col gap-[20px]'>
                    <h1 className='text-primaryRed text-[30px]'>Our Mandate</h1>    
                    <p className='text-[17px] text-gray-600 text-justify leading-[30px] '>
                        We are dedicated to empowering widows, orphans, and vulnerable individuals by enhancing their living conditions and overall wellbeing. We provide support services, legal assistance, education, and counseling to improve their lives and protect their rights. Our goal is to create a supportive community that fosters dignity and hope for all those we serve.
                    </p>
                    <button className='border border-primaryRed text-primaryRed py-[8px] px-[20px] w-fit'>Learn More</button>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Info