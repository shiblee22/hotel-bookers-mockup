import React from 'react';
import logo from '../Images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { email, name } = props.userInfo;
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg">
                <Link class="navbar-brand" to='/'>
                    <img class="img-fluid logo" src={logo} alt="" />
                </Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a style={{color: 'white'}} class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a style={{color: 'white'}} class="nav-link" href="#">Service <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a style={{color: 'white'}} class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            {email ? <p className="nav-link btn login-btn">{name}</p> : <Link to="/login" className="nav-link btn login-btn">Login</Link>}
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark login-btn my-2 my-sm-0" type="submit"><h6>Search</h6></button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        isSignin : state.isSignin,
        userInfo : state.userInfo
    }
}

export default connect(mapStateToProps)(Navbar);