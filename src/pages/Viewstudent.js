import React, {Component} from 'react';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

class Viewstudent extends Component {
    constructor({match}) {
        super();
        this.state={
            student: [],
            studentid: match.params.id,
        }

    }
    componentDidMount() {
        axios.get('http://localhost/holycare_work/fresh/api/viewstudent.php?id='+this.state.studentid)
            .then(res=>{
                this.setState({student: res.data})
            }).catch(er=>{
                console.log(er)
        })
    }

    render() {
        const student = this.state.student;

        return (
            <div className="">
                <Header></Header>
                <div className="row m-0 p-0">
                    <Sidebar></Sidebar>
                    <div className="col-md-10 mt-2">
                        <div className="">
                            <div className="bg-secondary p-2 text-light mb-5">
                                Student profile of {student.name}
                            </div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td> {student.name} </td>
                                        </tr>
                                        <tr>
                                            <td>Class</td>
                                            <td> {student.class} </td>
                                        </tr>
                                        <tr>
                                            <td>Roll</td>
                                            <td> {student.class_roll} </td>
                                        </tr>
                                        <tr>
                                            <td>Father Name</td>
                                            <td>{ student.fname }</td>
                                        </tr>
                                        <tr>
                                            <td>Father number</td>
                                            <td> {student.fnumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Mother name</td>
                                            <td>{student.mname}</td>
                                        </tr>
                                        <tr>
                                            <td>Mother number</td>
                                            <td>{student.mnumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>{student.mnumber}</td>
                                        </tr>
                                    </tbody>
                                </table>

                        </div>
                    </div>

                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default Viewstudent;