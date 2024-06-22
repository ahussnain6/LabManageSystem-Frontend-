import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
import { FiAlignLeft } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { checklogin } from "../store/DataSlice";
const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Data.login);
  const [icons, setIcons] = useState(true);
  const [sign, setSign] = useState(null);
  const Logout = () => {
    setIcons(true);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setSign(true);
  };
  const check = ()=>{
    const data = localStorage.getItem("userId") || localStorage.getItem("token");
    if (data) {
      setSign(false);
    } else if (!data) {
      setSign(true);
    } 
  };
  useEffect(() => {
    dispatch(checklogin());
    check();
  }, [location]);
  return (
    <div className="navbar-1">
      <div className="nav-1">
        <NavLink exact to="/" className="size-1 active" onClick={() => setIcons(true)}>
          ALI-MEDICARE LABS
        </NavLink>
      </div>
      <div className="nav-11">
        <div className="list">
          {icons ? (
            <FiAlignLeft
              className="hamburger"
              onClick={() => setIcons(!icons)}
            />
          ) : (
            <RxCross1 className="cross" onClick={() => setIcons(!icons)} />
          )}
          <ul className={icons ? "upper" : "lower"}>
            <li>
              <NavLink
                exact
                to="/admindata"
                onClick={() => setIcons(true)}
                className="active"
              >
                AdminPage
              </NavLink>{" "}
            </li>
            {sign ? (
              <li>
                <NavLink
                  to="/Sign"
                  onClick={() => setIcons(true)}
                  className="active"
                >
                  Sign Up{" "}
                </NavLink>{" "}
              </li>
            ) : (
              <li>
                <NavLink onClick={() => Logout()} className="active">
                  Logout
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/Disease"
                className="active"
                onClick={() => setIcons(true)}
              >
                Disease
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/patiententry"
                className="active"
                onClick={() => setIcons(true)}
              >
                Patient Entry
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
