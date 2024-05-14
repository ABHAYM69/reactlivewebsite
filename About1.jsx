import React from "react";
import { NavLink } from "react-router-dom";
 
const About1 = () => {
  

    return(
  <>


<section id="header" className="d-flex align-items-center">
    
    <div className="container-fluid nav_bg">
       <div className="row">
         <div className="col-10 mx-auto">
          <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
         <h1>
         Welcome to About page
             <strong className="brand-name">Tech WD</strong>
         </h1>
         <h6 className="my-3">
             We are the tem of talented devloper making websites
         </h6>
         <div className="mt-3">
             <NavLink to={"/Contact"} className="btn-get-started btn-outline-success">
                 Contact Now
             </NavLink>
         </div>
        </div>
 
         <div className="col-lg-6 order-1 order-lg-2 header-img">
          <img  src="https://thapatechnical.github.io/reactlivewebsite/static/media/hero-img.619f0cc8.png"
           className="img-fluid animated" alt="common img"/>
 
         </div>
 
 </div>
         </div>
             </div>
         </div>
   </section>
  
  </>
  )};
  
  
  export default About1;