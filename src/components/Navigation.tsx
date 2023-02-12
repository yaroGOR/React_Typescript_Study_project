import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <div>
            <nav className='h-50px flex justify-between px-5 bg-gray-500 items-center text-white '>
                <span className='font-bold'> Products webstore </span>
                <span>
                    <Link to='/' className='mr-2'>Products</Link>
                    <Link to='/about'>About</Link>
                </span>
            </nav>
        </div>
    )
}

export default Navigation