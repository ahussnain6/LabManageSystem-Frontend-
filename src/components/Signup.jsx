import "./styles/Sign.css";
import {useState,useEffect} from "react";
import axios from "axios";
// import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
// import { SETSignup } from "../store/DataSlice";
import { toast } from "react-toastify";
const Signup = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",});
  const changeinput = (e) => {
    const name = e.target.name;
    const values = e.target.value;
    setData({ ...data , [name]: values });};
  const submitform =async(e)=>{
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  const respons = await fetch("https://lab-manage-system-backend.vercel.app/user/signup", requestOptions);
  const datas = await respons.json();
  console.log(datas);
      if( datas && datas.id || datas.token){
      localStorage.setItem("token",datas.token);
      localStorage.setItem("userId",datas.id);
      setData({
        username: "",
        email: "",
        password: "",})
      navigate("/");
      toast.success("Signup Successfully");
      }else{
      if(datas.msg){
      toast.error(datas.msg);
      }else{
        toast.error(datas.extraDetails ? datas.extraDetails[0] : datas.message)
      }}
  };
  return (
    <>
 <h1 className="center">Signup</h1>
    <h2 className="h-10">Lets Start A New journey</h2>
    <form className="form-11" action="" onSubmit={submitform}>
      <input type="text" className="input-11" placeholder="Enter Your Name"
      autoComplete="off"
      name="username"
      onChange={changeinput}
      value={data.username}
      />
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
      <button className="btn" type="submit">Sign Up</button>
      </form>    
    </>
  )
}

export default Signup;