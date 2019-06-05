import React from 'react';
import './login.scss';

class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            loggedIn: false,
            username: '',
            password: ''
        }
    }
    
    login(){
        if(localStorage.getItem('username')){
            localStorage.removeItem('username');
        }
        localStorage.setItem('username', this.state.username )
        this.setState({
            loggedIn: true
        })
    }
    handleChangeForm  = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div>
                <h1>Welcome to <span className="insta">Instagram</span></h1>
                <h2>Please Log In to Continue</h2>
                <form className='loginForm' onSubmit={() =>this.login()}>
                    <input type="text" name="username" onChange={this.handleChangeForm} value={this.state.username} placeholder="username" required></input>
                    <input type="password" name="password" placeholder="password" required></input>
                    <button className="loginButton" type="submit">Login</button>
                </form>
            </div>
        )
    }
}



export default Login;
