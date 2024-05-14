import React from "react";
   

let a=new Date();
a = a.getHours();

let c='';
const CssStyle ={};

if(a>1 && a<12){
    c ='Good Morning';
        CssStyle.color='green';
}
else if(a>12 && a<19 ){
    c ='Good AfterNoon';
    CssStyle.color='orange';
}
else{
    c = 'Good Night';
    CssStyle.color='white';
}

function Paragraph(){
    return(
        <span style={CssStyle}>{c}</span>
    );
}

export default Paragraph;