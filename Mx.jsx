import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Fav = () =>{
    return(
        <Card  imgsrc = {Sdata[3].imgsrc}
      tittle = {Sdata[3].tittle}
       series = {Sdata[3].series}
      link ={Sdata[3].link} 
    
      />
    );
}

export default Fav;