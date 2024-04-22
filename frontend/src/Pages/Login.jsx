import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        // You'll update this function later...
    }


    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Please login</h3>
                    <div className="form-group mt-3">
                        <input
                            className="form-control mt-1"
                            value={email}
                            placeholder="Email Address"
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            className="form-control mt-1"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
