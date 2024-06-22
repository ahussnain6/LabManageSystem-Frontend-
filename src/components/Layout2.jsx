import React from "react";
import "./styles/Layout2n.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData,responsive } from "../../public/Data"; 
import Item from "./Item";
const Layout2 = () => {
  const product = productData.map((item) => (
    <Item
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="lay-8e">
      <h1 className="center">Departments</h1>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );

};
export default Layout2;
//  <div className="lay-33">

// <div className="lay-34 lay">

// <div className="l-1">
//   <img src="https://images.pexels.com/photos/5726705/pexels-photo-5726705.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
//   className="bor pi-1" />
// </div>

// <div className="l-1">
//   <img src="https://images.pexels.com/photos/5878482/pexels-photo-5878482.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
//   className="bor pi-1" />
// </div>

// <div className="l-22">
// <img src="https://images.pexels.com/photos/4031504/pexels-photo-4031504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor img-99" />
// <img src="https://images.pexels.com/photos/7089392/pexels-photo-7089392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor img-99" />

// </div>

// </div>

// <div className="lay-35 lay">

// <div className="l-3">
// <img src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor" />
// </div>
// <div className="l-3">
// <img src="https://images.pexels.com/photos/3862376/pexels-photo-3862376.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor" />
// </div>

// </div>

// <div className="lay-36 lay">
// <div className="l-4">
// <img src="https://images.pexels.com/photos/6285358/pexels-photo-6285358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor" />
// </div>

// <div className="l-4">
// <img src="https://images.pexels.com/photos/3912518/pexels-photo-3912518.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor" />
// </div>

// <div className="l-4">
// <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bor" />
// </div>

// </div>

// </div>
