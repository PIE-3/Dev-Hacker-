

import React from "react";
import Background from "./../../assets/Background.png";


function MainPage(){
    return(
        <div>
            <div className="row">
                <div className="row bg-image">
                    <img src= {Background} ></img>

                    <div className="row">
                    <div> 
                        <button className="button-fill">Buy</button> 
                    </div>
                    <div> 
                        <button className="button-fill">Rent</button> 
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default MainPage;