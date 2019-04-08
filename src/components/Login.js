import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        return(
            <Grid container className="my-container">
                <div className="login-wrapper">
                    <Paper elevation={1} className="login-paper right-dir">
                        <img src='assets/logo.png' alt="logo" className="login-logo"/>
                        <h3 className="font-applied center-txt">ورود به پنل کاربری <span style={{color:'#f50057'}}>آفرتور</span></h3>
                        <FormControl className="login-fields">
                            <InputLabel classes={{focused:'login-focused-label'}} className="font-applied login-label" htmlFor="username">نام کاربری</InputLabel>
                            <Input
                                id="username"
                                className="font-applied"
                                value={this.state.username}
                                onChange={this.handleChange('username')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Icon>account_circle</Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl  className="login-fields">
                            <InputLabel  classes={{focused:'login-focused-label'}} className="font-applied login-label" htmlFor="password">رمز عبور</InputLabel>
                            <Input
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Icon>fingerprint</Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <p><a href="#" className="my-link">رمز عبور خود را فراموش کرده اید؟</a></p>
                        <Button variant="contained" color="secondary" className="font-applied">
                            ورود به پنل کاربری
                        </Button>
                    </Paper>
                </div>
            </Grid>
        );
    }
}

export default Login;