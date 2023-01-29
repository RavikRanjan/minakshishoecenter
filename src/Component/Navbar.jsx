import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from "../Store/ActionCreatore/UserActionCreatore"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})
    var dispatch = useDispatch()

    function getAPIData() {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (d)
            setuser(d)
    }
    var navigate = useNavigate()
    function logout() {
        sessionStorage.clear()
        navigate("/login")
    }
    useEffect(() => {
        getAPIData()
    }, [users.length])
    return (
        <>
            <div className="py-1 bg-black">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="row d-flex">
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span
                                        className="icon-phone2"></span></div>
                                    <span className="text">+91 - 8002552360</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span
                                        className="icon-paper-plane"></span></div>
                                    <span className="text">sumanbharti@email.com</span>
                                </div>
                                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">Minakshi Shoe Centre</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to="" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/shop/All/" className="nav-link">Shop</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span
                                className="icon-shopping_cart"></span>[0]</Link></li>

                            {
                                sessionStorage.getItem("login") ?
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name}</Link>
                                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                                            <Link className="dropdown-item" to="/profile">Profile</Link>
                                            <Link className="dropdown-item" to="/cart">Cart</Link>
                                            <button className="dropdown-item" onClick={logout}>Logout</button>
                                        </div>
                                    </li> :
                                    <li className="nav-item"><Link to="/Login" className="nav-link">Login</Link></li>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
