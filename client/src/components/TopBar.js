import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
    return (
        <div className='w-full h-[50px] border flex items-center justify-center gap-[80px] font-bold text-lg'>

            <Link to={'/'} className='hover:underline hover:text-blue-700'>
                <p>Users</p>
            </Link>

            <Link to={'/form'} className='hover:underline hover:text-blue-700'>
                <p>Form</p>
            </Link>

        </div>
    )
}
