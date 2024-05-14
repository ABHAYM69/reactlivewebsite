import React from "react";
import { useParams ,useLocation ,useNavigate} from "react-router-dom";

const User = () => {

    const {fname , lname} = useParams();
    const loc = useLocation();
    const history = useNavigate();
return (
<>
    <h1>hii my name is Raj {fname }{lname} </h1>
     <p>My Location is {loc.pathname}</p>
         {loc.pathname === `/user/abhay/mishra` ?
         (<button  onClick={ () => history(-1)}>Click Me</button>)
         :null
         }

</>
)

};

export default User;