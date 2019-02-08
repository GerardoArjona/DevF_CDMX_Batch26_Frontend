import React, { Component } from 'react';
import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';
import 'bootstrap/dist/css/bootstrap.css';


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
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a className="nav-link" href="/me"> Bienvenido {payload().email} </a></li>
                    <li className="nav-item"><a className="nav-link" href="/posts">Posts</a></li>
                    <li className="nav-item"><a className="nav-link" href="/logout"> Log out </a></li>
                </ul>
            )
        } else {
            return (
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                    <li className="nav-item"><a className="nav-link" href="/signup"> Sign Up </a></li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav >
                <div >
                    <a href="#">My Posts</a>

                    {
                        this.authenticatedRender()
                    }

                </div>
            </nav>
        );
    }
}

export default Navbar;