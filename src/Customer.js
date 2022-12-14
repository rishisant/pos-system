import React from 'react';
import {useNavigate} from "react-router-dom"

const Customer = () => {
    const navigate = useNavigate();
    return(
        <div>
            {/* Logo in Top Right */}
            <div id="prelogo">
                <img id="logo" alt="Click Here to Return Home" onClick={() => navigate(-1)} src={"https://i.imgur.com/Y2jdLdx.png"}></img>
            </div>
            <br></br>

            {/* Manager Div */}
            <div className = "HomeScreen-top">
                <header id="ManagerTopText">Customer</header>
            </div>
            <div id="disc1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Welcome to the customer screen! Here you can place orders, view your order history, and view your current order. 
                Click on the logo in the top-right to return to the home screen.
            </div>
            <br></br>

            {/* Divs */}
            <div id="allDivs">
                <div class="box">BOX 1 (Insert a Table within this space)</div>
                <div class="box">BOX 2 (Insert a Table within this space)</div>
                <div class="box">BOX 3 (Insert a Table within this space)</div>
            </div>
        </div>
    )
};
export default Customer;