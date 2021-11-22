import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import './Home.css'

function Home() {
    let history = useHistory()

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())

    const logout = () => {
        AuthService.logout()
        setCurrentUser()
        history.push('/')
    }

    return (
        <div>
            <h1>Bienvenido {currentUser.username}</h1>
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={logout}
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Home
