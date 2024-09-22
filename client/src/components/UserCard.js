import React from 'react'

export default function UserCard({ data }) {
    return (
        <div className='border border-black p-2  flex flex-col  rounded-md'>
            <p className='font-semibold'>Name: <span className='font-normal'>{data?.name}</span></p>
            <p className='font-semibold'>Age: <span className='font-normal'>{data?.age}</span></p>
            <p className='font-semibold'>Email: <span className='font-normal'>{data?.email}</span></p>

        </div>
    )
}
