import React from "react";
import './Detail.css';
export default function RoomDetail(){
    const whatsApp = () =>{
        window.open(  `https://api.whatsapp.com/send?phone=${+919351649868}&text=hello sir! `,"_blank")
    }
    const phone = () => {
        window.open('tel://+919351649868',
        "_blank");
    }
    const email = () =>{
        window.open('mailto:startradingdwarka@gmail.com?subject=Order Enquiry &body=Description',
        "_blank");
    }
    return(
        <div className="row detail-container p-5">
            <div className="col-lg-6">
                <img className="room-image"  src="https://play-zelo-production.s3.ap-south-1.amazonaws.com/uploads/center/cover_photo/5ce5233a429c11659f6f57d0/h400_0_cover.jpeg" />
            </div>
            <div className="col-lg-6 ">
                <div className="row">
                    <h1>Available for only Females</h1>
                </div>
                <div className="row text-muted">
                    <h4>Address : D-4, Bahubali Colony, Rajeen Road, Udaipur (313001)</h4>
                </div>
                <br />
                <br />
                <br />
                <div className="row rent-container rent rounded-pill ">
                    Rent : 8000rs/-
                </div>
                <div className="row ">
                    <ul>
                        <li className=" word mt-2">
                            Category : Hostel
                        </li>
                        <li className=" word mt-2">
                            Seated : Both Double Seated and Single Seated Available
                        </li>
                        <li className=" word mt-2">
                            Electricity and Water Bill is included in Room Rent.
                        </li>
                        <li className=" word mt-2">
                            Mess is Provided if you want(Additional Charges).
                        </li>
                    </ul>
                </div>
                <br />
                <br />
                <div className="row">
                    <h3>Contact the Owner ----------</h3>
                </div>
                <br />
                <div className="row contact-info w-50">
                    <div className="col">
                        <button className="btn whatsapp " onClick={()=>{whatsApp()}}>
                               WhatsApp 
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn phone " onClick={()=>{phone()}}>
                              Make Call
                        </button>
                    </div>
                    <div className="col">
                         <button className="btn mail " onClick={()=>{email()}}>
                              Send Mail
                        </button>
                    </div>
                        

                </div>
            </div>
        </div>
    )
}