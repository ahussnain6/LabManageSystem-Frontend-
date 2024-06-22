import "./styles/Sign.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
import { API_URL } from "../assets/data";
const Signin = () => {
    const {id} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
  });
  const changeinput=(e)=>{
    const name = e.target.name;
    const values = e.target.value;
    setData({ ...data, [name]: values });
  };
  const submitform = async(e) => {
    e.preventDefault();
    const res = await axios.post(`${API_URL}/user/password/${id}/${data.password}`,"data")
    .then((response) => {
      const res = response.data;
      if(res.token || res.id){
      localStorage.setItem("token",res.token);
      localStorage.setItem("userId",res.id);
      navigate("/");
      setData({
        email: "",})  }
        
    })
  };
  return (
    <>
    <h1 className="center">Change Password</h1>
    <h2 className="h-10">Lets Continue your journey</h2>
    <form action="" className="form-11" onSubmit={submitform}>
      <input type="text" className="input-11" placeholder="Enter Your Password"
       autoComplete="off"
       name="password"
       onChange={changeinput}
       value={data.password} />
      <button className="btn" type="submit">Change Password</button>
      </form>
      
    
    </>
  )
}

export default Signin;