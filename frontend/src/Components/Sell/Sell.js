import React , {useState} from 'react'
import axios from 'axios'
import './Sell.css'

export default  function Sell(){
    const [name,getName] = useState('');
    const [phoneNumber,getPhoneNumber] = useState('')
    const [whatsAppNumber,getwhatsAppNumber] = useState('')
    const [address,getAddress] = useState('')
    const [zipcode,getZipcode] = useState('');
    const [rent,getRent] = useState('')
    const [category,getCategory] = useState('')
    const [description,getDescription] = useState('')
    const [seated,getSeated] = useState('');
    const [forGender,getForGender] = useState('')
   
    const handlenameInputChange =(e) =>{
        getName(e.target.value)
        console.log(e.target.value);
    };
    const handlephoneNumberInputChange=(e)=>{
        getPhoneNumber(e.target.value)
        console.log(e.target.value);
    }
    const handleWhatsAppInputChange =(e) =>{
        getwhatsAppNumber(e.target.value)
        console.log(e.target.value);
    };
    const handleaddressInputChange=(e)=>{
        getAddress(e.target.value)
        console.log(e.target.value);
    }

    const handleRentInputChange =(e) =>{
        getRent(e.target.value)
        console.log(e.target.value);
    };
    const handleZipCodeInputChange=(e)=>{
        getZipcode(e.target.value)
        console.log(e.target.value);
    }

    const handleCategoryInputChange =(e) =>{
        getCategory(e.target.value)
        console.log(e.target.value);
    };
    const handleDescriptionInputChange=(e)=>{
        getDescription(e.target.value)
        console.log(e.target.value);
    }
    const handleSeatedInputChange =(e) =>{
        getSeated(e.target.value)
        console.log(e.target.value);
    };
    const handleGenderInputChange=(e)=>{
        getForGender(e.target.value)
        console.log(e.target.value);
    }

    const data = {

        name: name,
        phoneNumber : phoneNumber,
        whatsAppNumber : whatsAppNumber,
        address : address,
        zipcode : zipcode,
        rent : rent,
        category : category,
        description : description,
        seated : "seated",
        forGender : forGender,
        iamge : "sddddddddddddddd"
    }
    const submitData =() =>{
        console.log(data);
        axios.post('http://localhost:4000/api/postData', data)
          .then(function (response) {
            window.alert('Your Data is Added Successfully.')
            console.log("Room is added SuccessFully");
          })
    }

    return(
        <>
        <div className="text-center p-4 ">
            <h1>Room and Room Owner Details</h1>
        </div>
        <div className=" ">
              <div className="card-header">
                <h3 className="mb-0">Let's get your Rooms Booked</h3>
              </div>
              <div className="card-body p-3">
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                                <label htmlFor="exampleAccount">First Name</label> 
                                <input required 
                                       className="form-control" 
                                       id="exampleAccount" placeholder="" 
                                       type="text"
                                       value={name} onChange={handlenameInputChange}
                                />
                        </div>
                        <div className="col-sm-4 pb-3">
                                <label htmlFor="exampleCtrl">Last Name</label> 
                                <input className="form-control" 
                                       id="exampleCtrl" placeholder="" 
                                       type="text" 
                                       
                                />
                        </div>
                        <div className="col-sm-3 pb-3">
                            <label htmlFor="exampleAmount">Mobile Number</label>
                            <input required className="form-control" 
                                   id="exampleAmount" placeholder="+919460582151" 
                                   type="number" 
                                   value={phoneNumber} onChange={handlephoneNumberInputChange}
                            />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-3 pb-3">
                                <label htmlFor="exampleCtrl">WhatsApp Mobile Number</label> 
                                <input className="form-control" id="exampleCtrl" 
                                      placeholder="+919460582151" type="text" 
                                      value={whatsAppNumber} onChange={handleWhatsAppInputChange}
                                />
                        </div>
                        <div className="col-sm-6 pb-3">
                            <label htmlFor="exampleAmount">Address</label>
                            <input required className="form-control" 
                                  id="exampleAmount" placeholder="" type="text"
                                  value={address} onChange={handleaddressInputChange}
                             />
                        </div>
                        <div className="col-sm-2 pb-3">
                            <label htmlFor="Zip Code">Zip Code</label>
                            <input required 
                                className="form-control" 
                                id="exampleAmount" placeholder="" 
                                type="number" 
                                value={zipcode} onChange={handleZipCodeInputChange}
                        />
                        </div>
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-3 pb-3">
                             <label htmlFor="exampleAmount">Room Available for Boy / Girl</label>
                            <input required 
                                  className="form-control" 
                                  id="exampleAmount" placeholder="" type="text" 
                                  value={forGender} onChange={handleGenderInputChange}
                            />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Rent for a Room</label>
                            <input required className="form-control" 
                                     id="exampleAmount" placeholder="" type="number" 
                                value={rent} onChange={handleRentInputChange}
                            />
                        </div>
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Security Fees</label>
                            <input required className="form-control" 
                                  id="exampleAmount" placeholder="" type="number" 

                            />
                        </div> 
                    </div>
                    <div className="row mt-2 justify-content-around">
                        <div className="col-sm-4 pb-3">
                            <label htmlFor="exampleAmount">Category  : Hostel  or PG</label>
                            <input required className="form-control" 
                                    id="exampleAmount" placeholder="" type="text"
                                    value={category} onChange={handleCategoryInputChange}
                            />
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
                            <textarea className="form-control w-100" i
                                    d="complexExampleMessage" rows="3"
                                    value={description} onChange={handleDescriptionInputChange}
                            ></textarea> 
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className ="text-center">
                        <button className=" btn submit-button rounded-pill" 
                            type="submit" onClick={()=>{submitData()}}>Submit</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

