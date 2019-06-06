import React from 'react';
// import './login.scss';
import styled from 'styled-components';


const StyledInput = styled.input`
    margin-right: 15px;
    border-radius: 5px;
    font-size: 1.4rem;
    border-color: #cc6633;

    &:focus {
        outline: none;
    }
`;

const StyledButton = styled.button`
height: 30px;
border-radius: 15px;
background: #cc6633;
color: white;
font-weight: 600;
outline: none;
`;

const Insta = styled.span`
    font-family: cursive;
`;

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
                <h1>Welcome to <Insta>Instagram</Insta></h1>
                <h2>Please Log In to Continue</h2>
                <form className='loginForm' onSubmit={() =>this.login()}>
                    <StyledInput type="text" name="username" onChange={this.handleChangeForm} value={this.state.username} placeholder="username" required></StyledInput>
                    <StyledInput type="password" name="password" placeholder="password" required></StyledInput>
                    <StyledButton className="loginButton" type="submit">Login</StyledButton>
                </form>
            </div>
        )
    }
}



export default Login;
