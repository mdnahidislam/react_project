import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import axios from 'axios';

class Addstudent extends Component {
    constructor() {
        super();
        this.state = {
            classlist: [],
            name: " ",
            father_name: "",
            father_phone: "",
            mother_name: "",
            mother_phone: "",
            gender: "",
            class: "",
        }
    }

    componentDidMount() {
            axios.get('http://my.holycareschool.com/holycare_work/fresh/api/class_list.php')
                .then(res=>{
                    this.setState({classlist: res.data})
                })

    }



    onChangeHandler=(event)=>{
        var names = event.target.name;
        var value = event.target.value;
        this.setState({[names]: value});
        


    }

    onSubmitHandler=(event)=>{

        axios.post('http://my.holycareschool.com/holycare_work/fresh/api/insert.php',this.state.name)
            .then(res=>{
               console.log(res);
            }).catch(errors=>{
                alert(errors)
        })
    }






    render() {

        const add = this.state.classlist;
        const class_list = add.map(function (result) {
            return <option key={result.class_id} value={result.class_id}>{ result.class_name }</option>
        });




        return (
            <div>
                <Header></Header>
                <div className="row m-0 p-0">
                    <Sidebar></Sidebar>
                    <div className="col-md-7 mt-2  mx-auto">
                        <div className="border shadow p-5">
                            <div className="h3 bg-light p-3">
                                Registration New Student
                            </div>
                                <div className="h3">You entered {this.state.class}</div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Student Name</label>
                                    <input type="text"  name="name" onChange={this.onChangeHandler} className="form-control col-md-10"/>
                                </div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Father Name</label>
                                    <input type="text"  name="father_name" onChange={this.onChangeHandler} className="form-control col-md-10"/>
                                </div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Father Phone</label>
                                    <input type="text"  name="father_phone" onChange={this.onChangeHandler} className="form-control col-md-10"/>
                                </div>
                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Mother Name</label>
                                    <input type="text"  name="mother_name" onChange={this.onChangeHandler} className="form-control col-md-10"/>
                                </div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Mother Phone</label>
                                    <input type="text"  name="mother_phone" onChange={this.onChangeHandler} className="form-control col-md-10"/>
                                </div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Gender</label>
                                    <select name="gender" id="" onChange={this.onChangeHandler} className="form-control col-md-10">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <label className="col-md-2" htmlFor="name">Class</label>
                                    <select name="class" id="" onChange={this.onChangeHandler} className="form-control col-md-10">
                                        {class_list}
                                    </select>
                                </div>

                                <div className="form-group row m-0 p-0 mt-3">
                                    <input type="submit" className="btn btn-info" onClick={this.onSubmitHandler} value="Submit"/>
                                </div>



                        </div>

                    </div>
                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default Addstudent;