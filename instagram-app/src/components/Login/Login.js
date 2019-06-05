import React from 'react';


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
                <form className='loginForm' onSubmit={() =>this.login()}>
                    <input type="text" name="username" onChange={this.handleChangeForm} value={this.state.username} placeholder="name"></input>
                    <input type="text" name="password" placeholder="password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}



export default Login;
