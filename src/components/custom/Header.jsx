import React from 'react'
import { Button } from '../ui/button'


const Header = () => {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center'>
        <img src="/logo.svg" alt="" />
        <div className="">
            <Button>Sign Up</Button>
        </div>
    </div>
  )
}

export default Header