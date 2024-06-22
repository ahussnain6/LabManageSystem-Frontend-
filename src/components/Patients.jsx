import axios from "axios";
import "./styles/Patient.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelPatients, fetchPatients } from "../store/DataSlice";
const Patients = () => {
  const dispatch = useDispatch() ;
  const {patients,delPatient }= useSelector((state)=>state.Data);
  const [patient, setPatient] = useState([]);
  const getPatients =() =>{
    if(patients.length > 9){
      const patients1 = patients.slice(0,9);
       setPatient(patients1);
     }else{
       setPatient(patients);
     }
   };
  const DelItem =async(id)=>{
    dispatch(DelPatients(id));
    dispatch(fetchPatients());
    getPatients();
  }
  useEffect(()=>{
    dispatch(fetchPatients());
    getPatients();
  }, []);
  return (
    <>
    <div className="table-1"> 
 { patient && patient.length > 1 ?  <table className="table-2"> <tr>
          <th>Patient Name</th>
          <th>Email Address</th>
          <th>Contact</th>
          <th>Test Name</th>
          <th>Address</th>
          <th>Action</th> </tr>
          {patient && patient.map((curElem) => {   return <> 
          <tr className="space-1">
            <td>{curElem.firstname} {curElem.lastname}</td>
            <td>{curElem.email}</td>
            <td>{curElem.contact}</td>
            <td>{curElem.testname}</td>
            <td>{curElem.address}</td>
            <td className="click" onClick={()=>DelItem(curElem._id)}>Delete</td>
            </tr> </>; })}  </table> 
            
            : <img src='https://i.gifer.com/ZKZg.gif' width="20%" height="20%" />  
            }
            </div>
    
    </>
  );
};

export default Patients;
