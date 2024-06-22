import React from "react";
import "./styles/Layout.css";
const Layout = () => {
  return (
    <>
      <div className="border-11">
        <div className="border-12">
          <div className="part-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1683133827067-0638a6079379?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMHRlc3R8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="pic-9"
            />
          </div>
          <div className="part-2">
            <img
              src="https://images.pexels.com/photos/5215013/pexels-photo-5215013.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="pic-9"
            />
            <img
              src="https://img.freepik.com/premium-photo/top-view-doctor-checking-covid-test_23-2148747833.jpg?size=626&ext=jpg&ga=GA1.1.2088459960.1716871457&semt=ais_user"
              alt=""
              className="pic-9"
            />
          </div>
        </div>
        <div className="border-13">
          <h1 className="heading-11 font-12">
            Lorem ipsum dolor sit amet <span className="bold">consectetur</span>{" "}
            adipisicing
          </h1>
          <h2 className="heading-12 font-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            facilis laboriosam sunt enim assumenda,{" "}
            <span className="bold">quidem architecto, non exercitatione</span> m
            consectetur molestias nulla magni quam adipisci.
          </h2>
          <h3 className="heading-13 font-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptatem itaque totam ab asperiores, nesciunt ipsam{" "}
            <span className="bold">
              dignissimos dolorem officiis voluptatibus
            </span>
             veniam similique maxime error accusantium recusandae inventore
            numquam sed mollitia sint minus, dolorum quae voluptatum velit.
            Quidem voluptate doloremque dolorem dignissimos alias ratione
            voluptatibus. Non facilis
            <span className="bold">laudantium aspernatur porro doloremque</span>{" "}
            , libero reprehenderit consectetur. Numquam eius quo, temporibus
            praesentium quia aliquid?
          </h3>
          <div className="btns">
            <button className="btn-red">Book Now</button>
            <button className="btn-red">Get Date</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
