import React, { Component } from 'react';
import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';


class Navbar extends Component {

    constructor(){
        super();

        this.state = {
            authenticated: localStorage.getItem('postsToken') !== null
        }
    }

    authenticatedRender = () => {
        if(isAuthenticated()){
            return(
                <ul className="">
                    <li><a href="/me"> Bienvenido {payload().email} </a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/logout"> Log out </a></li>
                </ul>
            )
        }else{
            return(
                <ul className="">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup"> Sign Up </a></li>
                </ul>
            )
        }
    }

    render() { 
        return ( 
            <nav>
                <div className="">
                    <a href="#" className="">My Posts</a>

                    {
                        this.authenticatedRender()
                    }

                </div>
            </nav>
         );
    }
}
 
export default Navbar;