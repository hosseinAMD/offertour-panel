import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import AddTour from "./components/AddTour";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div className="main-background">
                    <Navbar/>
                        <Switch>
                            <Route path="/" exact={true} component={Dashboard}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/plan" component={Plan}/>
                            <Route path="/add-tour" component={AddTour}/>
                        </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
