import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Notfound extends Component {
    render() {
        return (
            <div className="min-vh-100 bg-light d-flex justify-content-center">
                <div className="h1 text-primary align-self-center">
                 <span className="text-danger">404</span>   Not Found
                   <div className="d-flex justify-content-center">
                       <Link to="/" className="btn btn-primary btn-lg mt-3 text-light">Home</Link>
                   </div>
                </div>
            </div>
        );
    }
}

export default Notfound;