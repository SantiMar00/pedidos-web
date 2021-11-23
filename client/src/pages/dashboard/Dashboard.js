import { React, useEffect, useState } from 'react'
import userService from '../../services/user.service'
import './Dashboard.css'

function Dashboard() {
    const [username, setUsername] = useState('')

    useEffect(() => {
        userService
            .getUser()
            .then((res) => {
                setUsername(res.username)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="main">
            <h1>{username}</h1>
        </div>
    )
}

export default Dashboard
