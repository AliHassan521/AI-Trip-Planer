import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[40px] text-center mt-16'><span className='text-[#6948dd]'>Discover Your Next Advanture with AI: </span>Personlized Itineraries at Your Fingertips</h1>
        <p className='text-lg text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        <Button>Get Started</Button>
    </div>
  )
}

export default Hero