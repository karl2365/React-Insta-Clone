import React from "react";
import Login from "../Login/Login";
import './authenticate.scss';


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
                <button onClick={this.logout}>Log Out</button>
                <PostsPage />
                </>
                )
            }else{
                return <LoginPage />
            }
        }
};


export default withAuthenticate;