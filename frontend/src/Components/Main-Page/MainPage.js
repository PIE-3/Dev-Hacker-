import React from "react";
import Background from "./../../assets/Background.png";
import front from './../../assets/undraw.png';
import './MainPage.css';

function MainPage(){
    return(
        <div className="row front-container p-5 w-100 align-items-center">
            <div className="col-lg-6 col-sm-12 text-center">
                <img  src={front} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12  ">
                <div className="row h-25 text-center align-items-start project-name">                    
                    <h1 >PROJECT NAME</h1>
                </div>
                <div className="row h-25 text-center align-items-end">                    
                    <h2 className="text-secondary">Find the Best Pg, Hostel for you</h2>
                </div>
                <br />
                <br />

                <div className="row w-100 text-center align-items-start g-3">
                    <div className="col-lg-6 col-sm-12">
                        <button className="btn search-button rounded-pill">Search Room</button>
                    </div>
                    <div className="col-lg-6 cik-sm-12">
                        <button className="btn add-button rounded-pill">For Room Owners</button>
                    </div>
                </div>
            </div>
           
        </div>

    );
}

export default MainPage;