import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sec from './com/Sec'
import First from './com/First'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Fun from './com/Fun';
import Index from './pages/Index'
import Get from "./pages/Get";
import Addstudent from "./pages/Addstudent";
import Allstudent from "./pages/Allstudent";
import Notfound from "./pages/Notfound";
import Viewstudent from "./pages/Viewstudent";
import Login from "./pages/Login";
import {ProtectedRoute} from "./config/protectedRoute";






const myrouter=(

<Router>
      <Switch>
            <ProtectedRoute
                exact path="/"
                component={Index}
            />
            <Route exact path="/login" component={Login} />
            <Route path="/app" component={App} />
            <Route path="/fun" component={Fun} />
            <Route path="/first" component={First} />
            <Route path="/logout" component={Sec} />
            <Route path="/get" component={Get} />

            <Route path="/new_student" component={Addstudent} />
            <Route path="/all_student" component={Allstudent} />
            <Route path="/view_student/:id" component={Viewstudent} />
            <Route  component={Notfound} />

      </Switch>

</Router>

);



ReactDOM.render(
  myrouter,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
