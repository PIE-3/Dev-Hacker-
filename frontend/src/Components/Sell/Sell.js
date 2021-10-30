import React from 'react'
import './Sell.css'

export default  function Sell(){
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
                                <label htmlFor="exampleAccount">First Name</label> 
                                <input required className="form-control" id="exampleAccount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                                <label htmlFor="exampleCtrl">Last Name</label> 
                                <input className="form-control" id="exampleCtrl" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label htmlFor="exampleAmount">Mobile Number</label>
                            <input required className="form-control" id="exampleAmount" placeholder="+919460582151" type="number" />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-3 pb-3">
                                <label htmlFor="exampleCtrl">WhatsApp Mobile Number</label> 
                                <input className="form-control" id="exampleCtrl" placeholder="+919460582151" type="text" />
                        </div>
                        <div className="col-sm-6 pb-3">
                            <label htmlFor="exampleAmount">Address</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-2 pb-3">
                            <label htmlFor="Zip Code">Zip Code</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="number" />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-3 pb-3">
                             <label htmlFor="exampleAmount">Room Available for Boy / Girl</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Rent for a Room</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="number" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Security Fees</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="number" />
                        </div> 
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Category  : Hostel  or PG</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Electricity Bill is included in Rent : Yes or No</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label htmlFor="exampleAmount">Mess is provided : Yes or No</label>
                            <input  className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Mess Fess is Included in Rent(If mess is provided) : Yes or No</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label htmlFor="exampleAmount">Food available in Mess : Veg. , Non-Veg or both</label>
                            <input required className="form-control" id="exampleAmount" placeholder="" type="text" />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Additional Description(Optional)</label>
                            <textarea className="form-control w-100" id="complexExampleMessage" rows="3"></textarea> 
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className ="text-center">
                        <button className=" btn submit-button rounded-pill" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        
        </>
    )
}

