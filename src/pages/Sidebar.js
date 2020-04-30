import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (

                <div className="col-md-2 ml-0 p-0 mt-2">

                    <div className="bg-info p-2 mb-1">
                        <Link to="/" className="text-light text-decoration-none">
                            Home
                        </Link>
                    </div>

                    <div className="bg-info p-2 mb-1">
                        <Link to="new_student" className="text-light text-decoration-none">
                            Add Student
                        </Link>
                    </div>

                    <div className="bg-info p-2 mb-1">
                        <Link to="all_student" className="text-light text-decoration-none">
                            All Student
                        </Link>
                    </div>

                    <div className="bg-info p-2 mb-1">
                        <Link to="search_student" className="text-light text-decoration-none">
                            Search Student
                        </Link>
                    </div>
                </div>

        );
    }
}

export default Sidebar;