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
                 <form type="checkbox"> </form>  <div>     PG        </div>
                 <div>         Hostel     </div>
                 <div>         Price      </div>
                 <div>        2000       </div>
                 <div>        5000       </div>
                 <div>        8000       </div>
                 <div>         Girls      </div>
                 <div>         Boys       </div>
                 <div>         Veg        </div>
                 <div>         Non-Veg    </div>
                 <div>         Both        </div>
                 <div>      Single-Seated      </div>
                 <div>      Double-Seated      </div>
                
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