import React from 'react'
import './Buy.css'
import 'react-bootstrap'
import room1 from './../../assets/room1.png'


function Buy(props){
    console.log(props.rooms)
    const {rooms} = props;
    if(rooms.length>0){
        return(
            rooms.map((room,index)=>{
                return(
                                <div className="Room-row p-3" key={room._id}>
                                    <div className="row w-100 align-items-center">
                                        <div className="col-lg-2 col-sm-12 col-md-5">
                                            <img className="image" src={room.image}></img>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-sm-12 content-style "> 
                                            <div className="availablity-headline ">
                                                <h4>Available for : {room.forGender}</h4>
                                            </div>
                                            <div>
                                                <h6>{room.address} {room.zipCode} </h6>
                                            </div>
                                            <div>
                                                <h6>{room.seated}</h6>
                                            </div>
                                            <br />
                                            <div>
                                                <span className="rent-container rounded-pill">Rent : {room.rent}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-sm-12 text-center">
                                            <button className="btn view-more-button rounded-pill">View More</button>
                                        </div>
                                    </div>
                                    
                                </div>
                   
                )

            })
        )
    }else{
        return(
            <div>
                no data
            </div>
        )
    }
}



export default function display(props){
    return(
        <div>
            <div className="Layout row">
                <div className="filter-container card col-lg-2 m-2 ">
                    <div className="List w-100 ">
                    <h3 className="text-center"> Filters </h3>

                    <div className="filter-spacing  p-4">
                        <div>       <input className="m-1 " type="checkbox" />   PG        </div> 
                        <div>        <input className="m-1" type="checkbox" />   Hostel     </div>
                    </div>

                    <div className="filter-spacing p-4">
                        <h5 className="text-center">         Price      </h5>
                        <div>      <input className="m-1" type="checkbox" /> around  2000  </div>
                        <div>     <input className="m-1" type="checkbox" />  around   5000  </div>
                        <div>      <input className="m-1" type="checkbox" /> around 8000    </div>
                        <div>      <input className="m-1" type="checkbox" /> around 15000   </div>
                    </div>

                    <div className="filter-spacing p-4">
                        <div>     <input className="m-1" type="checkbox" />      Girls      </div>
                        <div>       <input  className="m-1" type="checkbox" />    Boys       </div>
                    </div>

                    <div className="filter-spacing p-4">
                        <div>       <input  className="m-1"type="checkbox" />    Veg        </div>
                        <div>        <input className="m-1" type="checkbox" />   Non-Veg    </div>
                        <div>        <input className="m-1"type="checkbox" />   Both        </div>
                    </div>

                    <div className="p-3">
                        <div>   <input type="checkbox" />     Single-Seated      </div>
                        <div>     <input type="checkbox" />   Double-Seated      </div> 
                    </div>

                    </div>
                </div>
                <div className="card all-list-container col-lg-9 m-2" >
                    <div className="row row-list ">
                        {Buy(props)}
                    </div>
                </div>
            </div>
     </div>
                  
            
    )
}