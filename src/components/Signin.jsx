import "./styles/Sign.css";
import {useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GetSignin } from "../store/DataSlice";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeinput = (e) => {
    const name = e.target.name;
    const values = e.target.value;
    setData({ ...data, [name]: values });
  };
  const submitform = async(e) => {
    e.preventDefault();
    const response = await dispatch(GetSignin(data));
    const res = response.payload.data;
      if(res.id || res.id){
      localStorage.setItem("token",res.token);
      localStorage.setItem("userId",res.id);
      setData({email: "",password: ""})
      navigate("/");
      toast.success("Login Successfully");
      }else{
            toast.error("Login Failed with Invalid credentials");
    }  };
    useEffect(()=>{
    if(localStorage.getItem("token") || localStorage.getItem("userId")){
      navigate("/");
    }
    },[])
  return (
    <>
    
    <h1 className="center">Signin</h1>
    <h2 className="h-10">Lets Continue your journey</h2>
    <form action="" className="form-11" onSubmit={submitform}>
      <input type="text" className="input-11" placeholder="Enter Your Email"
       autoComplete="off"
       name="email"
       onChange={changeinput}
       value={data.email} />
      <input type="text" className="input-11"
       autoComplete="off"
       name="password"
       onChange={changeinput}
       value={data.password}
      placeholder="Enter Your Password" />
      <button className="btn" type="submit">Sign In</button>
      </form>
      
    
    </>
  )
}

export default Signin;