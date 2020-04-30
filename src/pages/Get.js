import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

class Get extends Component {
    constructor() {
        super();

        this.state = {
            vdata: [],

        }
    }

    componentDidMount() {
        axios.get('http://my.holycareschool.com/holycare_work/fresh/api/class_list.php')
            .then(response=>{
                this.setState({vdata: response.data});
                console.log(response.data);
                console.log(response.status);
            })
            .catch(error=>{
                console.log(error)
            });
    }


        render()
        {
            const classs = this.state.vdata;
            const ss = classs.map(function (ok) {
                return <li key={ok.class_id}> { ok.class_name } </li>;

            })


            return (
                <div> <ul>
                    { ss }

                </ul> </div>
            )


        }





}

export default Get;