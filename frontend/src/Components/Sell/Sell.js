import React from 'react'
import './Sell.css'

function Sell(){
    return(
        <>
        <div className="text-center p-4 ">
            <h1>Room and Room Owner Details</h1>
        </div>
        <div className=" ">
              <div className="card-header">
                <h3 className="mb-0">Let's get your Rooms Booked</h3>
              </div>
              <form className="card-body p-3">
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                                <label for="exampleAccount">First Name</label> 
                                <input className="form-control" id="exampleAccount" placeholder="XXXXXXXXXXXXXXXX" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                                <label for="exampleCtrl">Last Name</label> 
                                <input className="form-control" id="exampleCtrl" placeholder="0000" type="text" />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label for="exampleAmount">Mobile Number</label>
                            <input className="form-control" id="exampleAmount" placeholder="+919460582151" type="number" />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-3 pb-3">
                                <label for="exampleCtrl">WhatsApp Mobile Number</label> 
                                <input className="form-control" id="exampleCtrl" placeholder="+919460582151" type="text" />
                        </div>
                        <div className="col-sm-6 pb-3">
                            <label for="exampleAmount">Address</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-2 pb-3">
                            <label for="Zip Code">Zip Code</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="number" />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-3 pb-3">
                             <label for="exampleAmount">Room Available for Boy / Girl</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label for="exampleAmount">Rent for a Room</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="number" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label for="exampleAmount">Security Fees</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="number" />
                        </div> 
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                            <label for="exampleAmount">Category  : Hostel  or PG</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label for="exampleAmount">Electricity Bill is included in Rent : Yes or No</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label for="exampleAmount">Mess is provided : Yes or No</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                            <label for="exampleAmount">Mess Fess is Included in Rent(If mess is provided) : Yes or No</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label for="exampleAmount">Food available in Mess : Veg. , Non-Veg or both</label>
                            <input className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label for="exampleAmount">Additional Description</label>
                            <textarea className="form-control w-100" id="complexExampleMessage" rows="3"></textarea> 
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className ="text-center">
                        <button className=" btn submit-button rounded-pill">Submit</button>
                    </div>
                </form>
            </div>
        
        </>
    )
}

export default Sell;