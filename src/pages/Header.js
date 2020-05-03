import React, {Component} from 'react';
import logo from "../img/logo.png";
import {Redirect} from "react-router-dom";
import auth from "../config/auth";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="bg-info">
                    <div className="container">
                        <div className="row p-0 m-0">
                            <div className="col-md-1">
                                <img alt="Logo" src={logo} style={{ width: 70, height: 70 }}/>
                            </div>
                            <div className="col-md-8">
                                <div className="h3 font-weight-bold p-0 text-light">Holy Care School</div>
                                <p className="p-0"> Shantibug, Demra, Dhaka </p>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <button className="btn text-light" onClick={()=>{
                                    auth.logout(()=>{
                                        this.props.history.push("/login");

                                    });
                                    return(<Redirect to="/login"/>);

                                }}>
                                    logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;