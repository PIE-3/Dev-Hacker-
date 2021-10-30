import React from 'react'
import './Buy.css'
import 'react-bootstrap'
import room1 from './../../assets/room1.png'


function Buy(){
    return(

      <div>

        <div className="Layout">
             <div className="col-xs-12 col-sm-3 col-md-3 col-lg-4 col-xl-4">
               <ul className="List">
                 <h4> Filters </h4>

                <div className="filter-spacing">
                
                    <div>       <input type="checkbox" />   PG        </div> 
                    <div>        <input type="checkbox" />   Hostel     </div>
                 </div>

                 <div className="filter-spacing">
                    <div>         Price      </div>
                    <div>      <input type="checkbox" />    2000       </div>
                    <div>     <input type="checkbox" />     5000       </div>
                    <div>      <input type="checkbox" />    8000       </div>
                 </div>

                 <div className="filter-spacing">
                     <div>     <input type="checkbox" />      Girls      </div>
                     <div>       <input type="checkbox" />    Boys       </div>
                 </div>

                 <div className="filter-spacing">
                     <div>       <input type="checkbox" />    Veg        </div>
                     <div>        <input type="checkbox" />   Non-Veg    </div>
                     <div>        <input type="checkbox" />   Both        </div>
                 </div>

                 <div>
                     <div>   <input type="checkbox" />     Single-Seated      </div>
                     <div>     <input type="checkbox" />   Double-Seated      </div> 
                 </div>

               </ul>
             </div>


             <div className="row row-list">

               <div className="Room-row">
                    <div>
                        <img className="image" src={room1}></img>
                    </div>
                    <div className="content-style"> 
                        <div>Price</div>
                        <div>Address  
                            dkcnkadjchbvgdcsjbhnask xmasxlaśxmksjabchjvdc bdn cm
                        </div>
                    </div>
               </div>
               <div className="Room-row">
                 <div>
                    <img className="image" src={room1}></img>
                 </div>
               

                <div className="content-style"> 
                       <div>Price</div>
                       <div>Address  
                         dkcnkadjchbvgdcsjbhnask xmasxlaśxmksjabchjvdc bdn cm
                       </div>
                       
                </div>
               </div>

               <div className="Room-row">
                 <div>
                    <img className="image" src={room1}></img>
                 </div>
               

                <div className="content-style"> 
                       <div>Price</div>
                       <div>Address  
                         dkcnkadjchbvgdcsjbhnask xmasxlaśxmksjabchjvdc bdn cm
                       </div>
                </div>
               </div>

               <div className="Room-row">
                 <div>
                    <img className="image" src={room1}></img>
                 </div>
               

                <div className="content-style"> 
                       <div>Price</div>
                       <div>Address  
                         dkcnkadjchbvgdcsjbhnask xmasxlaśxmksjabchjvdc bdn cm
                       </div>
                </div>
               </div>

               
               
             </div>

        </div>
      
      </div>
                 
    );
}

export default Buy;