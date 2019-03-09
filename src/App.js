import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact={true} component={Dashboard}/>
                        <Route path="/profile" component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
