import Axios from 'axios'

class AuthService {
    login(username, password) {
        return Axios.post('login', {
            username,
            password,
        })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem('user', JSON.stringify(res.data))
                    console.log(localStorage.getItem('user'))
                }

                return res.data
            })
            .catch((err) => {
                console.log('Error: ' + err.message)
            })
    }

    logout() {
        localStorage.removeItem('user')
    }

    register(username, password) {
        return Axios.post('register', {
            username,
            password,
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log('Error: ' + err.message)
            })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new AuthService()
