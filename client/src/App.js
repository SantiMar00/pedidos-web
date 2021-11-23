import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Landing from './pages/landing/Landing'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <ProtectedRoute exact path="/home" component={Home} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default App
