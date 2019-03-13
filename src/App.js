import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import AddTour from "./components/AddTour";
import ToursList from "./components/ToursList";
import TourDetail from "./components/TourDetail";
import AddArticle from "./components/AddArticle";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <Navbar/>
                        <Switch>
                            <Route path="/" exact={true} component={Dashboard}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/plan" component={Plan}/>
                            <Route path="/add-tour" component={AddTour}/>
                            <Route path="/add-article" component={AddArticle}/>
                            <Route path="/tours-list" component={ToursList}/>
                            <Route path="/tour/:id" component={TourDetail}/>
                        </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
