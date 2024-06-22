import React from "react";
import "./styles/Footer.css";
import { Foot, Img,para } from "../assets/data";
// import { footer } from '../../public/Features';
const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="content">
          <div class="left box">
            <div class="upper">
              <div class="topic">About us</div>
              <p>
                {para}
               
              </p>
            </div>
            <div class="lower">
              <div class="topic">Contact us</div>
              <div class="phone m-91">
                <a href="#">
                  <i class="fas fa-phone-volume"></i>+92 3274666681
                </a>
              </div>
              <div class="email m-91">
                <a href="#">
                  <i class="fas fa-envelope"></i>ahussnain67h@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div class="middle box">
            <div class="topic">Our Services</div>
            {Foot.map((elem) => {
              return (
                <>
                  <div>
                    <a href="#">{elem}</a>
                  </div>
                </>
              );
            })}
          </div>
          <div class="right box">
            <div class="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Email Address" />
              <input type="submit" name="" value="Send" />
              <div class="media-icons">
                {Img.map((elem) => {
                  return (
                    <a href="#">
                      <img src={elem} class="img-99" alt="" />
                    </a>
                  );
                })}
              </div>
            </form>
          </div>
        </div>
        <div class="bottom">
          <p class="m-90">
            Copyright © 2024 <a href="#">Ali-Medicare</a> All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
