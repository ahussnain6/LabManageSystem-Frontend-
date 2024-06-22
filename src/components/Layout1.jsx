import React from 'react'
import "./styles/Layout1.css";
import photo from "../../public/image1.jpg";
const Layout1 = () => {
  return (
     <>
     <div className="layout">
        <img src={photo} alt="image-1" className='pic-11' />
     </div>
     </>
  )
}

export default Layout1;