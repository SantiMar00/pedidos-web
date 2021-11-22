import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3001/'

ReactDOM.render(<App />, document.getElementById('root'))
