import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Amazon = () => {
    return(<>
        <Card  imgsrc = {Sdata[0].imgsrc}
      tittle = {Sdata[0].tittle}
       series = {Sdata[0].series}
      link ={Sdata[0].link} 
    
      />
       
        <Card  imgsrc = {Sdata[1].imgsrc}
      tittle = {Sdata[1].tittle}
       series = {Sdata[1].series}
      link ={Sdata[1].link} 
    
      />
            <Card  imgsrc = {Sdata[4].imgsrc}
      tittle = {Sdata[4].tittle}
       series = {Sdata[4].series}
      link ={Sdata[4].link} 
    
      />
      </>
    );
}

export default Amazon;