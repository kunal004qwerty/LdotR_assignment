import React from 'react'
import PostForm from '../components/PostForm';
import useCreateUser from '../hooks/useCreateUser';

export default function AddUser() {

    const [saveUser, saveUserInfo] = useCreateUser()

    function onSubmit(userData) {
        saveUser(userData)
        console.log(userData);
     }

    return (
        <div className='lg:w-[1020px] w-full mx-auto h-screen '>

            <div className='border flex items-center justify-center h-full' >
                <PostForm
                    onSubmit={onSubmit}
                    submitText={
                        saveUserInfo?.isLoading
                            ? 'Saving...'
                            : saveUserInfo?.isError
                                ? 'Error!'
                                : saveUserInfo?.isSuccess
                                    ? 'Saved!'
                                    : 'Save User'
                    }
                />
            </div>
        </div>
    )
}
