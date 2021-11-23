import Axios from 'axios'
import authHeader from './auth-header'

class UserService {
    getUser() {
        return Axios.get('/user', {
            headers: authHeader(),
        })
            .then((res) => {
                return res.data
            })
            .catch((err) => {
                console.log('Error: ' + err.message)
            })
    }
}

export default new UserService()
