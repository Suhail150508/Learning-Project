import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import bkash from './Assests/bkash.jpg'
import nagod from './Assests/nagod.png'
import rocket from './Assests/rocket.png'
import Navbar from './Navbar/Navbar';

function Details() {

  const location=useLocation();
  return (
    <div>

        <Navbar/>
     <div style={{ backgroundColor:'lightgoldenrodyellow',height:'100vh' }}>
        <div className='row text-center pt-5' >
        <div className='col-md-2 p-3 text-white' >
        {/* <p>{location.state.item.title}</p> */}
        </div>
        <div className='col-md-4 p-3 bg-secondary' style={{ border:'2px solid red' }}>
        
      <img src={location.state.item.img} alt="" style={{ height:'200px',width:'170px' }}/>

    </div>
    <div className='col-md-4  text-white p-3' style={{ backgroundColor:'lightsteelblue' }}>
    <h3>Price: {location.state.item.price} BDT </h3>
    <h4>{location.state.item.title}</h4>
    <h4>Duration: {location.state.item.duration}</h4>
    <h4>Language: {location.state.item.language}</h4>
    <h4>Payment: <img src={bkash} alt="img" style={{ height:'26px',width:'50px' }}/> <img src={nagod} alt="img" style={{ height:'26px',width:'50px' }}/> <img src={rocket} alt="img"  style={{ height:'26px',width:'50px' }} /></h4>
 
    <Link className='button' style={{ width:'100%' }} to='/contact'>Enroll Now</Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Details