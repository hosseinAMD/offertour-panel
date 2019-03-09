import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import NavItems from "./NavItems";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: false
        }
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        return (
            <div className="right-dir">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('right', true)} >
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="grow font-applied">
                            آفرتور
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        <NavItems/>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Navbar;