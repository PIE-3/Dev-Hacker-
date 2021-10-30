import React from 'react'
import room1 from './../../assets/room1.png'

function Sell(){
    return(

        <div>

            <div className="row">
                <div className="col-sm-3 col-lg-4 col-lg-4">
                    <img src={room1}></img>
                </div>

                <div>

                    <div>
                        Details
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Sell;