import React, {Component} from 'react';

import '../css/custom.css'
import axios from 'axios'
import {Redirect} from "react-router-dom";
import auth from "../config/auth";


class Login extends Component {
    constructor() {
        super();
        this.state={
            userid: "",
            psw: "",
            loading: "",

        }

    }

    update=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }
    onSubmit=()=>{
        let postdata = {
            user: this.state.userid,
            pass: this.state.psw,
        }
        axios.post('http://my.holycareschool.com/holycare_work/fresh/api/login.php',postdata
        )
            .then(res=>{
                console.log(res.data);
                if(res.data === 1)
                {
                    localStorage.setItem("admin",this.state.userid);
                    auth.login(()=>{
                        this.props.history.push("/");
                    })
                    this.setState({loading: res.data})

                }else
                {
                    this.setState({loading: res.data})
                }



            }).catch(err=>{
                console.log(err);
        })
    }



    render() {

        if(this.state.loading === 1)
        {
            console.log("sss")
            return <Redirect to="/app" />

        }else
        {

            return (
                <div className="bgs d-flex justify-content-center">

                    <div className="d-flex align-self-center">
                        <div className="border bg-light shadow p-4 c-width">
                            <div className="h4 c-bg c-text p-2 font-weight-bold"> Login </div>
                           {this.state.loading}
                            <div className="d-flex justify-content-between pt-4">
                                <label htmlFor="userid" className="w-100 c-text font-weight-bold">User ID:</label>
                                <input onChange={this.update} type="number" name="userid" className="form-control bg-transparent"/>
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <label htmlFor="psw" className="w-100 c-text font-weight-bold">Password:</label>
                                <input onChange={this.update} type="text" name="psw" className="form-control bg-transparent"/>
                            </div>
                            <div className="pt-4 d-flex justify-content-center">
                                <input onClick={this.onSubmit} type="submit" value="Login" className="font-weight-bold btn btn-info text-light form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;