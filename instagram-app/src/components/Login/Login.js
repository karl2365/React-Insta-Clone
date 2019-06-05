import React from 'react';


class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            loggedIn: false
        }
    }
    
    login(name,password){
        if(localStorage.getItem('username')){
            localStorage.removeItem('username');
        }
        localStorage.setItem('username', name )
        this.setState({
            loggedIn: true
        })
    }

    render() {
        return(
            <div>
                <form className='loginForm' onSubmit={() =>this.login('karl', 'password')}>
                    <input type="text" id="name" placeholder="name"></input>
                    <input type="text" id="password" placeholder="password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}



export default Login;
