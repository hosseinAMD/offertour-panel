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
import Login from "./components/Login";
import Playground from "./components/Playground";
import PanelSettings from "./components/PanelSettings";
import CountriesSetting from "./components/CountriesSetting";
import ProvincesSetting from "./components/ProvincesSetting";
import CitiesSetting from "./components/CitiesSetting";
import AirportsSetting from "./components/AirportsSetting";
import TerminalsSetting from "./components/TerminalsSetting";
import LastCommentsAndRates from "./components/LastCommentsAndRates";
import AgencyUsers from "./components/AgencyUsers";
import AddAgencyUser from './components/AddAgencyUser';
import EditAgencyUser from "./components/EditAgencyUser";
import EditPlan from "./components/EditPlan";
import AddSupportAdmin from "./components/AddSupportAdmin";
import AllUsers from "./components/AllUsers";
import AddAgency from "./components/AddAgency";
import PhoneNumbersList from "./components/PhoneNumbersList";
import AddManager from "./components/AddManager";
import AdminTourList from "./components/AdminTourList";
import {loggedInUser} from "./config/config";
import AddAdminTour from "./components/AddAdminTour";

class App extends Component {
    render() {
        let isLoggedIn = false;
        if (loggedInUser) {
            isLoggedIn = true;
        }
        if (isLoggedIn) {
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
                            <Route path="/admin-tours-list" component={AdminTourList}/>
                            <Route path="/tour/:id" component={TourDetail}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/settings" component={PanelSettings}/>
                            <Route path="/country-setting" component={CountriesSetting}/>
                            <Route path="/province-setting" component={ProvincesSetting}/>
                            <Route path="/city-setting" component={CitiesSetting}/>
                            <Route path="/airport-setting" component={AirportsSetting}/>
                            <Route path="/terminal-setting" component={TerminalsSetting}/>
                            <Route path="/rates-comments" component={LastCommentsAndRates}/>
                            <Route path="/agency-users" component={AgencyUsers}/>
                            <Route path="/all-users" component={AllUsers}/>
                            <Route path="/phone-numbers" component={PhoneNumbersList}/>
                            <Route path="/add-agency" component={AddAgency}/>
                            <Route path="/add-manager" component={AddManager}/>
                            <Route path="/add-agency-user" component={AddAgencyUser}/>
                            <Route path="/add-support-admin" component={AddSupportAdmin}/>
                            <Route path="/admin-add-tour" component={AddAdminTour}/>
                            <Route path="/edit-agency-user" component={EditAgencyUser}/>
                            <Route path="/edit-plan/:id" component={EditPlan}/>
                            <Route path="/pg" component={Playground}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            );
        } else {
            return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" exact={true} component={Login}/>
                            <Route path="/profile" component={Login}/>
                            <Route path="/plan" component={Login}/>
                            <Route path="/add-tour" component={Login}/>
                            <Route path="/add-article" component={Login}/>
                            <Route path="/tours-list" component={Login}/>
                            <Route path="/admin-tours-list" component={Login}/>
                            <Route path="/tour/:id" component={Login}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/settings" component={Login}/>
                            <Route path="/country-setting" component={Login}/>
                            <Route path="/province-setting" component={Login}/>
                            <Route path="/city-setting" component={Login}/>
                            <Route path="/airport-setting" component={Login}/>
                            <Route path="/terminal-setting" component={Login}/>
                            <Route path="/rates-comments" component={Login}/>
                            <Route path="/agency-users" component={Login}/>
                            <Route path="/all-users" component={Login}/>
                            <Route path="/phone-numbers" component={Login}/>
                            <Route path="/add-agency" component={Login}/>
                            <Route path="/add-manager" component={Login}/>
                            <Route path="/add-agency-user" component={Login}/>
                            <Route path="/add-support-admin" component={Login}/>
                            <Route path="/edit-agency-user" component={Login}/>
                            <Route path="/edit-plan/:id" component={Login}/>
                            <Route path="/pg" component={Playground}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            );
        }

    }
}

export default App;
