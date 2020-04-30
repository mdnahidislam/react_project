import React, { Component } from 'react';

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row m-0 p-0">
                    <Sidebar></Sidebar>
                    <div className="col-md-10">

                    </div>
                </div>
                <Footer></Footer>
            </div>



        );
    }
}

export default Index;