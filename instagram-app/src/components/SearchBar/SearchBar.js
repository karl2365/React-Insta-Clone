import React from 'react';
import "./search.scss";


const SearchBar = (props) => {

    return (
        <div className="main">
            <div className="left">
            <i className="fab fa-instagram"></i> | <span className="insta-logo">Instagram</span>
            </div>
            <div className="center">
                <form onSubmit={props.submit}>
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
            
            <div className="right">
            <i className="far fa-compass"></i><i className="far fa-heart"></i><i className="far fa-user"></i>

            </div>
        </div>
    )


}




export default SearchBar;
