import React from 'react';
// import "./search.scss";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
    font-size: 2rem;
    width: 80%;
    display: flex;
    margin: 20px;
    align-items: center;
    justify-content: space-between;
    .left{
        font-family: cursive;
    }

    .center{
        text-align: center;
    }

    .right {

        i {
            margin: 0 10px;
        }
    }
`;

const SearchBar = (props) => {

    return (
        <Main>
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
        </Main>
    )


}

SearchBar.propTypes = {
    change: PropTypes.func,
    value: PropTypes.string,
    submit: PropTypes.func

}


export default SearchBar;
