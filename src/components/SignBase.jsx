import React, { useEffect, useState } from 'react'
import "./styles/Sign.css";
import { useNavigate} from "react-router-dom";
import Signup from './Signup';
import Signin from './Signin';
const SignBase = () => {
const navigate = useNavigate();
  const [signup,setSignup] = useState(true);
  useEffect(()=>{
    if(localStorage.getItem("token") || localStorage.getItem("userId")){
      navigate("/");
    }
    },[])
  return (
    <>
      <div className="sign-1">
        <div className="sign-10">
          <img src={signup ? "https://images.pexels.com/photos/9020063/pexels-photo-9020063.png?auto=compress&cs=tinysrgb&w=600": "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className='img-side' />
        </div>
      <div className="sign-11">
      {signup ?<><Signup />
     <h1 className="h-11" onClick={()=>setSignup(false)}>Already Have Account ? <span className='blu'>
     Let's Login
     </span> </h1></>:
<>
<Signin />  
<h1 className="red" onClick={()=>navigatetoemail()}>Forget Password</h1>    
  <h1 className="h-11" onClick={()=>setSignup(true)}>Do Not Have Account ? <span className='blu'>
     Let's Create Account
     </span>
     </h1>
  
</> 
}
</div>   
</div>
    </>
  )
}
export default SignBase;