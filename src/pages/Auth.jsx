import React from 'react'
import {auth} from '../Config/firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Instagram from '../assets/socials/instagram.png'
import Facebook from '../assets/socials/facebook.png'
import linkedIn from '../assets/socials/linkedIn.png'
import '../App.css'
const Auth = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth , email , password);
            setEmail('')
            setPassword('')
            setError('')
            navigate('/admin')
        }catch(err){
            setError(err.message)
        }
       
    }
  return (
    <div className='auth_bg flex justify-center'>
        <div className='flex flex-col gap-[20px] justify-center items-center h-auto w-[100%] lg:w-[40%] glassmorphic mx-auto'>
            <div className='bg-gray-200 h-[100px] w-[100px] rounded-full border border-4 border-green-600'>
                <img src={Logo} />
            </div>
            
            <div className='flex flex-col w-full  items-center gap-[20px] '>
                <div className='w-full'>
                    <label></label>
                    <input className='border w-full p-3 bg-gray-200' type='text' placeholder='Email....' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='w-full'>
                    <input className='border p-3 bg-gray-200 w-full' type='Password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={handleLogin} className=' bg-green-600 p-3 rounded-md w-full'>Sign In</button>
                {error && <p>{error}</p>}
                <p className='text-white'>Forgot Password? Contact Engineer</p>
                <div className='flex gap-[30px] cursor-pointer'>
                    <a href='https://www.instagram.com/bode__black/' target='_blank'>
                        <img src={Instagram} />
                    </a>
                    <a href='https://web.facebook.com/profile.php?id=61557838860908' target='_blank'>
                        <img src={Facebook} />
                    </a>
                    <a href='www.linkedin.com/in/bode1' target='_blank'>
                        <img src={linkedIn} />
                    </a>
                </div>  
            </div>

        </div>
    </div>
  )
}

export default Auth