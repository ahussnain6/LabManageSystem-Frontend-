import React from 'react'
import "./styles/Home.css";
import video from "../assets/y2mate.com - Science Laboratory 4K Stock Video_1080p.mp4";
import Layout from './Layout';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Footer from './Footer.jsx';
const Home =()=>{
  return (
    <>
    <div className="container-1" style={{border:"2px solid black"}}>
    <div className="cover"></div>
    <video className='video-1' src={video} autoPlay loop muted />
    <div className="part-11">
   <h1 className='h-1'>Transforming Your care</h1>
     <div className="btn-1">
     <button className='btn-11'>See Reports</button>
      <button className='btn-12'>Book an Appointment</button>
     </div>
    </div>
    </div>
    <Layout />
    <Layout1 />
    <Layout3 />
    <Layout2 />
   < Footer />
  </> 
  )
}
export default Home;