import React from 'react'
import { Datas } from '../Data' 
import image from '../Assests/male.jpeg'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer'



function Home() {
  return (
    <div>
<Navbar/>

<div className='name ' style={{ marginTop:'-3rem' }} >
<div className='m-5 d-flex m-1 text-white' style={{ marginRight:'10rem',paddingTop:'3rem' }}>
<img src={image} alt="img" style={{borderRadius:'250px',border:'15px solid #f2e'}}/>
<div className='' style={{ marginLeft:'2rem',marginTop:'3rem' }}>
<h2>Information- </h2>
<h4>This Course is Full of Great Learning Resource that Sohel Rana Ever Made</h4>
</div>
</div>
  <h2 className='text-center'>Class Courses</h2>
</div>
<div className='card-component' style={{textAlign:'center',marginTop:'-.5rem'}} >

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
<Footer/>
    </div>
  )
}

export default Home