import { useCallback, useReducer } from 'react'
import { httpCreateUser } from './requests'


export default function useCreateUser() {
    const [state, setState] = useReducer((state, action) => ({
        ...state,
        ...action,
    }), {
        // isIdle: true,
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: null,
        error: null,
    })

    const mutate = useCallback(async (values) => {
        setState({ isLoading: true, isIdle: false, isSuccess: false, isError: false })
        try {
            const { data } = await httpCreateUser(values)
            setState({ isLoading: false, isSuccess: true, data })
        } catch (error) {
            setState({ isLoading: false, isError: true, error: error.message })
        }
    }, [])

    return [mutate, state]
}
