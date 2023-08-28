import React from 'react'

function Footer() {
  return (
    <div className='bg-dark'>
<div className='footer bg-dark' style={{ paddingTop: "4rem" }} >
        <div className='bg-footer' style={{position:"relative",height:"auto"}}>
          {/* <img style={{height:"100vh",width:"100%"}} src={footer} alt="img"/> */}
          <div >
          <div className='footer-info row  p-5 ' style={{position:"absolute",top:"2px",paddingTop: "10rem"}}>
            <div className=' col-6 col-md-6 col-lg-3 mt-sm-2 mt-lg-5 ' style={{marginTop:"4rem"}}>
              <h2 className="footer-h2" >About Me</h2>
              <p  className= "footer-para" style={{ marginLeft:"3rem" }}>
   I Am A Professional Web Designer And Developer.
   I Always Try My Best To Provide Good Work For My Clients,
   And Try To Fulfill There Requirements In Time.
             </p>
            </div>
            <div className='col-6 col-md-6 col-lg-3 mt-sm-2 mt-lg-5 '  style={{marginTop:"4rem"}}>
              <h2 className="footer-h2" >Servicess</h2>
             <div className= "footer-para" style={{ marginLeft:"3rem" }}>
              <p className='f-para'>Resposive Cv</p>
              <p className='f-para'>Website Design</p>
              <p className='f-para'>Frontend Design</p>
              <p className='f-para'>Backend Design</p>
            </div>
            </div>
            <div className='col-6 col-md-6 col-lg-3  mt-lg-5'  style={{marginTop:"1rem"}}>
              <h2 className="footer-h2" >Languages</h2>
              <div className= "footer-para" style={{ marginLeft:"3rem" }}>
              <p className='f-para'>React js</p>
              <p className='f-para'>Javascript</p>
              <p className='f-para'> Bootstrap</p>
              <p className='f-para'> HTML</p>
            </div>
            </div>
            <div className='col-6 col-md-6 col-lg-3  mt-lg-5 ' style={{marginTop:"1rem"}}>
              <h2 className="footer-h2" >Contact</h2>
              <div className= "footer-para" style={{ marginLeft:"3rem" }}>
              <p className='f-para'><i class="fa-solid fa-phone  text-warning"></i> +8801571320434</p>
              <p className='f-para'><i class="fa-brands fa-facebook text-warning"></i> Sohel Rana</p>
              <p className='f-para'><i class="fa-solid fa-at  text-warning"></i> sohail1054155@gmail.com </p>
              <p className='f-para'><i class="fa-brands fa-whatsapp text-warning"></i> Sohel Rana</p>
            </div>
            </div>
          </div>
          </div>
        </div>
      

        
    </div>
    </div>
  )
}

export default Footer