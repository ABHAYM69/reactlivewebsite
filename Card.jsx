import React from "react";


function Card (props){
    return(
    <div className="cards">
    <div className="card">
  <img src = {props.imgsrc} alt="my pic"  className="card_img"></img>
      <div className="card_info">
       <span className="card-catagory">{props.tittle}</span>
       <h3 className="card-tittle">{props.series}</h3>
       <a href={props.link} target="blank">
        <button>Watch Now</button>
       </a>
      </div>
    </div>
  
    </div>
    );
  }

  export default Card;