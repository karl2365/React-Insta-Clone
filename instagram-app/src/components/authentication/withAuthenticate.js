import React from "react";
import Login from "../Login/Login";
// import './authenticate.scss';
import styled from 'styled-components';

const ButtonA = styled.button`
    position: relative;
    left: 40%;
    top: 59px;
    height: 30px;
    border-radius: 15px;
    background: #cc6633;
    color: white;
    font-weight: 600;
    outline: none;
}
`;


const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component  {
        constructor(){
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username')){
                this.setState({
                    loggedIn: true
                })
            }else {
                this.setState({
                    loggedIn: false
                })
            }
        }

        logout = () => {
            if(localStorage.getItem('username')) {
                localStorage.removeItem('username');
                this.setState({
                    loggedIn: false
                })
            }
        }
        render(){
            if (this.state.loggedIn){
                return(
                <>
                <ButtonA onClick={this.logout}>Log Out</ButtonA>
                <PostsPage />
                </>
                )
            }else{
                return <LoginPage />
            }
        }
};


export default withAuthenticate;