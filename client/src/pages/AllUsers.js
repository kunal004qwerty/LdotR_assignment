import React from 'react'
import UserCard from '../components/UserCard';
import useGetUsers from '../hooks/useGetUsers';


export default function AllUsers() {

    const users = useGetUsers()


    return (
        <div className='lg:w-[1020px] w-full mx-auto '>

            <div className='flex flex-wrap gap-10 p-5'>

                {
                    users.map((item, index) => {
                        return <UserCard data={item} key={`card-${index}`} />
                    })
                }
            </div>
        </div>
    )
}
