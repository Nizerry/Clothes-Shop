import React from 'react'

const LoginSignup = () => {
  return (
    <div className='w-[100%]  bg-[#f3cce7] h-[90vh] relative '>
      <div className=' w-[400px] h-[380px] mx-[400px] bg-white absolute top-[70px] rounded-sm pl-8 py-5' >
        <h1 className='text-xl font-semibold pb-4'>Sign up</h1>
        <div className='flex flex-col gap-3 loginSignup-filed '>
          <input type="text" placeholder='Your Name' className='border-solid border-[2px] mr-5 ps-3 h-[40px]  '/>
            <input type="email" placeholder='Email Address '  className='border-solid border-[2px] mr-5 ps-3 h-[40px] '/>
            <input type="password" placeholder='Password ' className='border-solid border-[2px] mr-5 ps-3 h-[40px]  '/>
        </div>
        <button className=' bg-red-500 h-[40px] mt-3 w-[94%] text-white'>Continue</button>
        <p className='text-[#5c5c5c] mt-3'>Already have an account? <span className='text-red-600 font-medium cursor-pointer'>Login here</span></p>
        <div className='flex gap-3 mt-5'>
          <input type="checkbox" name='' id='' />
          <p className='text-[12px] text-[#5c5c5c] font-normal'>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
