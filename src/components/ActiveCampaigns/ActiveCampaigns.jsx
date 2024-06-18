import React from 'react'
import PostOne from '../../assets/images/post1.jpg';
import {Link} from 'react-router-dom'
import PostTwo from '../../assets/images/post2.jpg';
import PostThree from '../../assets/images/post3.jpg';
const ActiveCampaigns = () => {
  return (
    <div className='bg-gray-100'>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[100px] flex flex-col gap-[100px]'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-[14px] text-red-400'>GIVE US A HAND</h3>
                <h1 className='text-primaryRed text-[40px]'>Active Campaigns</h1>
                <p className='md:w-[527px] text-center'>We touch lives and impact our generation by supporting widows and children with their basic needs and amenities.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-[30px]'>
                <div className='flex-1'>
                    <div className='bg-white rounded-xl shadow-xl'>
                        <div className='h-[400px] w-full'>
                            <img className='h-full w-full object-cover rounded-tr-xl rounded-tl-xl' src={PostOne}  />
                        </div>
                        <div className='p-[20px]'>
                            <h1 className='text-primaryRed text-[25px]'>Human Need Support -- Osun State</h1>
                            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos aliquid et reiciendis inventore natus nulla eum. Similique, vero labore voluptatibus doloribus modi quam! Soluta tempora est consectetur nulla natus?</p>
                            <Link to='/' className='underline text-blue-500'>read more</Link>
                        </div>
                    </div>
                </div>  
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                    <div className='bg-white rounded-xl shadow-xl'>
                        <div className='h-[200px] w-full'>
                            <img className='h-full w-full object-cover rounded-tr-xl rounded-tl-xl' src={PostTwo}  />
                        </div>
                        <div className='p-2'>
                            <h1 className='text-primaryRed text-[16px]'>Human Need Support -- Osun State</h1>
                            <p className='text-[15px] text-gray-400'>Similique, vero labore voluptatibus doloribus modi quam! Soluta tempora est consectetur nulla natus?</p>
                            <Link to='/' className='underline text-blue-500'>read more</Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl'>
                        <div className='h-[200px] w-full'>
                            <img className='h-full w-full object-cover rounded-tr-xl rounded-tl-xl' src={PostThree}  />
                        </div>
                        <div className='p-2'>
                            <h1 className='text-primaryRed text-[16px]'>Human Need Support -- Osun State</h1>
                            <p className='text-[15px] text-gray-400'>Similique, vero labore voluptatibus doloribus modi quam! Soluta tempora est consectetur nulla natus?</p>
                            <Link to='/' className='underline text-blue-500'>read more</Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl'>
                        <div className='h-[200px] w-full'>
                            <img className='h-full w-full object-cover rounded-tr-xl rounded-tl-xl' src={PostOne}  />
                        </div>
                        <div className='p-2'>
                            <h1 className='text-primaryRed text-[16px]'>Human Need Support -- Osun State</h1>
                            <p className='text-[15px] text-gray-400'>Similique, vero labore voluptatibus doloribus modi quam! Soluta tempora est consectetur nulla natus?</p>
                            <Link to='/' className='underline text-blue-500'>read more</Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl'>
                        <div className='h-[200px] w-full'>
                            <img className='h-full w-full object-cover rounded-tr-xl rounded-tl-xl' src={PostTwo}  />
                        </div>
                        <div className='p-2'>
                            <h1 className='text-primaryRed text-[16px]'>Human Need Support -- Osun State</h1>
                            <p className='text-[15px] text-gray-400'>Similique, vero labore voluptatibus doloribus modi quam! Soluta tempora est consectetur nulla natus?</p>
                            <Link to='/' className='underline text-blue-500'>read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActiveCampaigns