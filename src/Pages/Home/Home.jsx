import React from 'react'
import { Datas } from '../Data' 
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
<Navbar/>
<div className='name mt-2' style={{padding:'.8rem .1rem ',textAlign:'center'}}>
  <h2>Class Lectures</h2>
</div>
<div className='card-component'>

{
Datas.map((item)=>{

    return (
<div className='card'> <Link to='/details' state={{ item }} style={{color:"white",textDecoration:'none'}}>
    <h3>{item.title}</h3> 
    <img  src={item.img} alt="img" />
    <h4 className='btn btn-success '  style={{ margin:'1.4rem ',marginBottom:'.6rem' }}>Enroll</h4> 
    
    </Link>
 
</div>
    )
})

}
</div>

    </div>
  )
}

export default Home