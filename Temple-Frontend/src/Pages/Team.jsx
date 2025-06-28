import React from 'react'
import haridas from '../assets/imgs/Mens-Executive-Health-Check-up-over-40-scaled.webp'
import mahavarahdas from '../assets/imgs/Dollarphotoclub_64980674.jpg'
import vaikunthpatidas from '../assets/imgs/0c0331d5-3931-4f33-9.jpg'
import srivarajbhumidas from '../assets/imgs/bd10d13320d7d7f49afcf5371c54e917.jpg'

const Team = () => {
  return (
  <div>
 
  <div className="page-title-area bg-4">
    <div className="container">
      <div className="page-title-content">
        <h2>Team</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Team</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="causes-area pb-70">
        <div className="container">
          <div className="section-title" style={{marginTop:'2rem'}}>
            {/* <span>What The Causes</span> */}
            <h2>Meet the Sevakas</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-causes-box">
                <img src={haridas} alt="Image" style={{height:'20rem'}}/>
                <div className="single-causes-content">
                  <h3>
                    <a href="">HG Braj Hari Das
                    </a>
                  </h3>
                  <p>Brajhari Das joined in ISKCON at BHUBANESHWAR in June 1984. He met HH Jayapataka Swami who sent him to Hyderabad . Latter on he took Intiation from HH Jayapataka Swami in 1985. He came to Juhu temple for training and since then he has been rendering service in the temple.. He was leading the book distribution of ISKCON Juhu, then General manager, Vice President and President of the temple for last 20 years</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-causes-box">
                <img src={mahavarahdas} alt="Image" style={{height:'20rem'}} />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Mahavaraha Das
                    </a>
                  </h3>
                  <p>Mahavaraha prabhu joined ISKCON 26 years ago in Malaysia. He is disciple of HH Jayapataka Swami. Immediately after he had become a devotee, he immediately got the chance to do personal service to his guru maharaj. Since guru maharaj had the stroke, for every single moment, every single day, for the past so many years, he has been with his guru maharaj.
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={vaikunthpatidas} alt="Image" style={{height:'20rem'}} />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Vaikunthapati Das
                    </a>
                  </h3>
                  <p>Chartered Accountant by qualification and has held very senior positions in Mumbai & Middle East. Disciple of HH Jaypataka Swami Maharaja initiated in 1993 and founder of Krishna Katha Desh Yatra in Middle East and currently developing a community in Wadala, Mumbai. He has developed a strong community of devotees who closely knitted and are engaged in reading Srila Prabhupa’s books and spreading the movement.
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={srivarajbhumidas} alt="Image" style={{height:'20rem'}} />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Vaikunthapati Das
                    </a>
                  </h3>
                  <p>Chartered Accountant by qualification and has held very senior positions in Mumbai & Middle East. Disciple of HH Jaypataka Swami Maharaja initiated in 1993 and founder of Krishna Katha Desh Yatra in Middle East and currently developing a community in Wadala, Mumbai. He has developed a strong community of devotees who closely knitted and are engaged in reading Srila Prabhupa’s books and spreading the movement.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>

  )
}

export default Team
