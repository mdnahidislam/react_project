import React, {Component} from 'react';
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import "react-table/dist/react-table.development"

class Allstudent extends Component {
    constructor() {
        super();
        this.state ={
            all: []
        }
    }
    componentDidMount() {
        axios.get('http://my.holycareschool.com/holycare_work/fresh/api/allstudent.php').then(res=>{
            this.setState({all: res.data})
        }).catch(error=>{
            console.log(error)
        })
    }


    render() {
        const data = this.state.all;

        const retur = data.map(function (par) {
            return <tbody key={par.id}><tr>
                <td> { par.id } </td>
                <td> { par.name } </td>
                <td> { par.fname } </td>
                <td> { par.mname } </td>
                <td> { par.fnumber } </td>
                <td> { par.mnumber } </td>
                <td> { par.class } </td>
            </tr></tbody>

        })



        return (
            <div>
                <Header></Header>
                <div className="row m-0 p-0">
                    <Sidebar></Sidebar>
                    <div className="col-md-10">
                        <div className="bg-light p-2 h3">All student</div>
                        <table className="table table-bordered">
                            { retur }
                        </table>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Allstudent;