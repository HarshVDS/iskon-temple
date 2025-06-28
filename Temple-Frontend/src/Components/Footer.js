import React from 'react'
import { useNavigate } from 'react-router-dom'
import f1 from '../assets/imgs/f1.jpg'
import f2 from '../assets/imgs/f2.jpg'
import f3 from '../assets/imgs/f3.jpg'
import f4 from '../assets/imgs/f4.jpg'
import f5 from '../assets/imgs/f5.jpg'
import f6 from '../assets/imgs/f6.jpg'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
      

     <footer className="footer-area bg-color pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget">
          <h3>Find Us</h3>
          <ul className="address">
            <li className="location">
              <i className="bx bxs-location-plus" />
              ISKCON, Chandrodaya Mandir, Mayapur, West Bengal 741313, India
            </li>
            <li>
              <i className="bx bxs-envelope" />
              <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#9df5f8f1f1f2dde9f4fcf3eeb3fef2f0"><span className="__cf_email__" data-cfemail="fd9598919192bd89949c938ed39e9290">spdcp.seva@gmail.com</span></a>
              {/* <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#adc4c3cbc2edd9c4ccc3de83cec2c0"><span className="__cf_email__" data-cfemail="cea7a0a8a18ebaa7afa0bde0ada1a3">[email&nbsp;protected]</span></a> */}
            </li>
            <li>
              <i className="bx bxs-phone-call" />
              <a href="tel:+1-(123)-456-7899">+91 94747 51202</a>
              <a href="tel:+1-(514)-312-6688">+91 9920182562 </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget">
          <h3>Useful Links</h3>
          <ul className="link">
            <li>
              <a onClick={() => navigate("/privacypolicy")} href="#"> Privacy Policy</a>
            </li>
            <li>
              <a onClick={() => navigate("/teamcondition")} href="#"> Terms and Condition</a>
            </li>
           
           
          </ul>
        </div>
      </div>
    
      <div className="col-lg-6 col-sm-6">
        <div className="footer-widget">
          <h3>Photo Gallery</h3>
          <ul className="photo-galler">
            <li>
              <a href="#">
                <img src={f1} alt="image" style={{height:'80px', width:'150px'}} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={f2}alt="image" style={{height:'80px', width:'150px'}} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={f4} alt="image" style={{height:'80px', width:'150px'}} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={f5} alt="image" style={{height:'80px', width:'150px'}} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={f6} alt="image" style={{height:'80px', width:'150px'}} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={f1} alt="image" style={{height:'80px', width:'150px'}} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
