import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: localStorage.getItem('postsToken') !== null
        }
    }

    authenticatedRender = () => {
        if (isAuthenticated()) {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/me">
                            Bienvenido {payload().email}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts">
                            Posts
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">
                            Log out
                        </a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">
                            Sign Up
                        </a>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    My Posts
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {
                        this.authenticatedRender()
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;