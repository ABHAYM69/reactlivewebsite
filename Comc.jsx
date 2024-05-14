import React from "react";
import { fname,lastn } from "./App";


const Comc = () => {
  return(
<>
<fname.Consumer>
    {
        (f) =>{
            return (
            <lastn.Consumer>
                {
                    (l) =>{
                        return (<h1>My name is {f} {l}</h1>);
                    }
                }
            </lastn.Consumer>
            );
        } }
</fname.Consumer>
</>
)};


export default Comc;