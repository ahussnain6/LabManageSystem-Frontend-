import "./styles/Sign.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../assets/data";
const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });
  const changeinput = (e) => {
    const name = e.target.name;
    const values = e.target.value;
    setData({ ...data, [name]: values });
  };
  const submitform = async (e) => {
    e.preventDefault();
    const re = await axios
      .post(`${API_URL}/user/email/${data.email}`, "body")
      .then((response) => {
        const res = response.data;
        if (res.Status == "Success") {
          setData({
            email: "",
          });
          toast.success("Link Sent to your email addesss");
          navigate("/");
        } else {
          toast.error("Invalid Email");
        }
      });
  };
  return (
    <>
      <h1 className="center">Sign In</h1>
      <h2 className="h-10">Lets Continue your journey</h2>
      <form action="" className="form-11" onSubmit={submitform}>
        <input
          type="text"
          className="input-11"
          placeholder="Enter Your Email"
          autoComplete="off"
          name="email"
          onChange={changeinput}
          value={data.email}
        />
        <button className="btn" type="submit">
          Get Mail
        </button>
      </form>
    </>
  );
};
export default Signin;
