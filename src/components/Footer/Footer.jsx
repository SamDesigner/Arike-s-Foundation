import React from 'react'
import Logo from '../../assets/images/logo.png'
import  {Link} from 'react-router-dom'
import Facebook from '../../assets/socials/facebook.png'
import Gmail from '../../assets/socials/gmail.png'
import linkedIn from '../../assets/socials/linkedIn.png'
import Instagram from '../../assets/socials/instagram.png'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-red-900'>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[40px] flex flex-col gap-[40px]'>
            <div className='flex flex-col items-center md:flex-row md:justify-between'>
                {/* <div className='bg-white w-[10vw] h-[15vh]'>
                    <img className='h-full w-full' src={Logo} alt='Company Logo' />
                </div> */}
                <div className='flex flex-col gap-[30px]'>
                    <ul className='text-white flex gap-[40px]'>
                        <li>
                            <Link to='/about'>About Us</Link>
                        
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        
                        </li>
                    </ul>
                    <div className='flex gap-[40px]'>
                        <a href='https://web.facebook.com/arikeswidowfoundation' target='_blank'>
                            <img src={Facebook} alt='Facebook' />
                        </a>
                        <Link to='/'>
                            <img src={linkedIn} alt='Linked In' />
                        </Link>
                        <a href='https://www.instagram.com/arikes_widows/'>
                            <img src={Instagram} alt='Instagram' />
                        </a>
                        <Link to='/'>
                            <img src={Gmail} alt='Gmail' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full border-t border-white'>
                <div className='py-[40px] text-center text-white'>
                    <p>Copyright &copy; {currentYear} Cipher Brainiac. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer