import React from 'react';
import "./search.scss";
import PropTypes from 'prop-types';

const SearchBar = (props) => {

    return (
        <div className="main">
            <div className="left">
            <i className="fab fa-instagram"></i> | <span className="insta-logo">Instagram</span>
            </div>
            <div className="center">
                <form onSubmit={props.submit}>
                    <input onChange={props.change} value={props.value} placeholder="Search"></input>
                </form>
            </div>
            
            <div className="right">
            <i className="far fa-compass"></i><i className="far fa-heart"></i><i className="far fa-user"></i>

            </div>
        </div>
    )


}

SearchBar.propTypes = {
    change: PropTypes.func,
    value: PropTypes.string,
    submit: PropTypes.func

}


export default SearchBar;
