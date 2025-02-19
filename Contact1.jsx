import { Alert } from "bootstrap/dist/js/bootstrap.bundle";
import React, { useState } from "react";


const Contact1 = () => {
     
    const [data ,sdata] = useState({
        fullname: "" ,
        pnumber: "",
        email: "",
        msg: "",
        
});

     
     const InputEvent = (event) => {
         const {name , value }= event.target;

         sdata ((preVal) => {
             return{
                ...preVal,
               [ name ]: value,
             };
         });
     };


   const formSubmit = (e) => {
   e.preventDefault();
  alert(
 `My name is ${data.fullname} .My Mobile Number is ${data.pnumber} and email is ${data.email}, Here is what I want to say ${data.msg} `
  );
   };

    return(
  <>
  <div className="my-5">
    <h1 className="text-center"> Contact US</h1>
  </div>
  <div className="container contact_div">
    <div className="row">
        <div className="col-md-5 col-10 mx-auto">
            <from onSubmit= {formSubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
  name="fullname"
  value={data.fullname}
  onChange={InputEvent} placeholder="enter your name" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" 
  name="pnumber"
  value={data.pnumber}
  onChange={InputEvent} placeholder="enter your Number" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email"
  value={data.email}
  onChange={InputEvent} placeholder="name@example.com" />
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"
  name="msg"
  value={data.msg}
  onChange={InputEvent} rows="3"></textarea>
</div>

<div class="col-auto">
    <button type="submit" class="btn btn-outline-primary mb-3" >Submit Form</button>
  </div>

            </from>

        </div>
    </div>
  </div>
  </>
  )};
  
  
  export default Contact1;