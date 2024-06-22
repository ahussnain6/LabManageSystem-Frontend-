import { useState } from "react";
import Dashboard from "./Dashboard";
import Patients from "./Patients";
import Users from "./Users";
import "./styles/Adminpage.css";
const Adminpage = () => {
  const [dash, setDash] = useState(null);
  const [users, setUsers] = useState(null);
  const [patients, setPatients] = useState(null);
  const getLoad = (elem) => {
    if (elem == "Dashboard") {
      setDash(true);
      setPatients(false);
      setUsers(false);
    } else if (elem == "Users") {
      setDash(false);
      setPatients(false);
      setUsers(true);
    } else {
      setDash(false);
      setPatients(true);
      setUsers(false);
    }
  };
  const page = ["Dashboard", "Users", "Patients"];
  return (
    <>
      <div className="page-1">
        <div className="side-1">
          {page.map((elem) => (
            <div className="side-99" onClick={() => getLoad(elem)}>
              {elem}
            </div>
          ))}
        </div>
        <div className="side-2">
          {dash ? (
            <Dashboard />
          ) : users ? (
            <Users />
          ) : patients ? (
            <Patients />
          ) : (
            <Dashboard />
          )}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Adminpage;
