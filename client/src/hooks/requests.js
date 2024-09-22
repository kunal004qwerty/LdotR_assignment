
// const API_URL = 'http://localhost:8000/v1'
const API_URL = '/v1'

async function httpGetAllUsers() {
    const response = await fetch(`${API_URL}/users`)
    return await response.json()
}


async function httpCreateUser(userdata) {
    try {
        return await fetch(`${API_URL}/users`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userdata)
        })
    } catch (error) {
        return {
            ok: false
        }
    }
}


export {
    httpGetAllUsers,
    httpCreateUser
}