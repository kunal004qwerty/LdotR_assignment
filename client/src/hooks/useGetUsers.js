import { useCallback, useEffect, useState } from 'react'
import { httpGetAllUsers } from './requests'



function useGetUsers() {
    const [users, setUsers] = useState([])

    const getUsers = useCallback(async () => {
        const fetchedUsers = await httpGetAllUsers()
        setUsers(fetchedUsers)
    }, [])


    useEffect(() => {
        getUsers()
    }, [getUsers])

    return users
}

export default useGetUsers