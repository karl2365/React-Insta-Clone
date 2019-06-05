import React from "react";
import Login from "../Login/Login";


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


        render(){
            if (this.state.loggedIn){
                return <PostsPage />
            }else{
                return <LoginPage />
            }
        }
};


export default withAuthenticate;