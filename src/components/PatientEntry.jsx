import "./styles/PatientEntry.css";
import {useDispatch} from "react-redux";
import {useState} from "react";
import { SetPatient } from "../store/DataSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PatientEntry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [option,setOption] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname:"",
    email:"",
    countryname:"",
    streetno:"",
    occupation:"",
    zipcode:"",
    address:"",
    code:"",
    contact:"",
    information:""});
  const changeinput = (e) => {
    const name = e.target.name;
    const values = e.target.value;
    setData({ ...data, [name]: values });};
  const submitform = async(e) => {
    e.preventDefault();
    const updatedData = {...data,testname:option}
    const response = await dispatch(SetPatient(updatedData));
    const email = response.payload.data.email;
    if(email){
      toast.success("Data Submitted Successfully")
      navigate("/");
    }else{
      toast.error("Invalid Credentials")
    }
  };
  return (
  <>
  <div className="form-13">
    <form action="" onSubmit={submitform} className="form-133">
  <div className="num-1">
    <h1 className="g-7">General Information</h1>
    <span className="series-1">
    <input type="text" className="input-91" placeholder="First Name"
    autoComplete="off"
    name="firstname"
    onChange={changeinput}
    value={data.firstname}
    />
<input type="text"  className="input-91" placeholder="Last Name" 
 autoComplete="off"
 name="lastname"
 onChange={changeinput}
 value={data.lastname}
/>
    </span>
<input type="text"  className="input-99" placeholder="Email"
 autoComplete="off"
 name="email"
 onChange={changeinput}
 value={data.email}
/>
<input type="text" className="input-99" placeholder="Country Name" 
 autoComplete="off"
 name="countryname"
 onChange={changeinput}
 value={data.countryname}
/>
<input type="text"  className="input-99" placeholder="Street + Nr" 
 autoComplete="off"
 name="streetno"
 onChange={changeinput}
 value={data.streetno}
/>
<input type="text"  className="input-99" placeholder="Occupation" 
 autoComplete="off"
 name="occupation"
 onChange={changeinput}
 value={data.occupation}
/>
  </div>
<div className="num-2">
<h1  className="g-8">Contact Details</h1>
<select
              name="testname"
              id="sort"
              className="select font upper-1"
              onChange={(e)=>setOption(e.target.value)}
              >
                <option>Test Name</option>
              <option value="Complete Blood Count (CBC)">Complete Blood Count (CBC)</option>
              <option value="Basic Metabolic Panel (BMP)">Basic Metabolic Panel (BMP)</option>
              <option value="Congo Virus (CCHF) PCR Qualitative">Congo Virus (CCHF) PCR Qualitative</option>
              <option value="COVID-19 (SARS-CoV-2) PCR Test Travel Certifcate">COVID-19 (SARS-CoV-2) PCR Test Travel Certifcate</option>
              <option value="T-Spot TB Test">T-Spot TB Test</option>
              <option value="Dengue RNA by PCR">Dengue RNA by PCR</option>
              <option value="HDV PCR (Qualitative)">HDV PCR (Qualitative)</option>
              <option value="Lipoprotein (Lipid) Panel">Lipoprotein (Lipid) Panel</option>
            </select>
<input type="text"  className="input-99" placeholder="Zip Code"
 autoComplete="off"
 onChange={changeinput}
 value={data.zipcode}
 name="zipcode"
/>
<input type="text" className="input-99" placeholder="Address" 
 autoComplete="off"
 onChange={changeinput}
 value={data.address}
 name="address"
/>
<span className="series-2">
    <input type="text" className="input-91" placeholder="Code"
     autoComplete="off"
     onChange={changeinput}
     name="code"
     value={data.code}
    />
<input type="text"  className="input-91" placeholder="Contact"
 autoComplete="off"
 onChange={changeinput}
 value={data.contact}
 name="contact"
/>
    </span>

<input type="text"  className="input-99" placeholder="Additional Information"
 autoComplete="off"
 onChange={changeinput}
 value={data.information}
 name="information" />
<button className="btn-90">Submit</button>
</div>
</form>
  </div>
  </>
  )
}

export default PatientEntry;