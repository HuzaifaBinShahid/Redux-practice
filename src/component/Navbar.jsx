import React from 'react'
import {useSelector} from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.amount)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand mx-2" href="/">Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-primary mx-2">{state}</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar