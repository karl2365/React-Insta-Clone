import React from 'react';
import "./search.scss";


const SearchBar = () => {

    return (
        <div className="main">
            <div className="left">
            <i class="fab fa-instagram"></i> | <span className="insta-logo">Instagram</span>
            </div>
            <div className="center">
                <input type="text" placeholder="Search"></input>
            </div>
            
            <div className="right">
            <i class="far fa-compass"></i><i class="far fa-heart"></i><i class="far fa-user"></i>

            </div>
        </div>
    )


}




export default SearchBar;
