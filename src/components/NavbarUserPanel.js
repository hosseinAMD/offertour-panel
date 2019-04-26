import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PlanStars from "./PlanStars";
import {NavLink} from "react-router-dom";
import {loggedInUser, role} from "../config/config";

class NavbarUserPanel extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({open: !state.open}));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {open} = this.state;
        return (
            <div className="user-panel">
                <Avatar alt="Remy Sharp" src={`data:image/jpeg;base64,${loggedInUser.Image}`}/>
                <Button className="font-applied" color="inherit" buttonRef={node => {
                    this.anchorEl = node;
                }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}><span><span
                    className="bold">{`${loggedInUser.Name} ${loggedInUser.FamilyName}`}</span> خوش آمدید</span></Button>
                <Popper style={{zIndex: '1000'}}
                        open={open}
                        anchorEl={this.anchorEl}
                        transition disablePortal
                >
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        <MenuItem className="font-applied" component={NavLink} to="/profile"
                                                  onClick={this.handleClose}>اطلاعات کاربری</MenuItem>
                                        {role === 'support' ?
                                            <MenuItem className="font-applied" component={NavLink} to="/plan"
                                                      onClick={this.handleClose}>پلن ها </MenuItem> :
                                            <MenuItem className="font-applied" component={NavLink} to="/plan"
                                                      onClick={this.handleClose}>پلن فعال: <PlanStars
                                                star={2}/></MenuItem>}
                                        <MenuItem className="font-applied logout-menu" component={NavLink} to="/login"
                                                  onClick={this.handleClose}>خروج</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        );
    }
}


export default NavbarUserPanel;