import React from 'react'

const TeamCondition = () => {
  return (
    <div>
      <div className="sidebar-modal">
        <div className="sidebar-modal-inner">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="assets/img/logo.png" alt="Image" />
            </div>
            <span className="close-btn sidebar-modal-close-btn">
              <i className="bx bx-x" />
            </span>
          </div>
          <div className="sidebar-about">
            <div className="title">
              <p>Tians is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
            </div>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="bx bx-location-plus" />
                6890 Blvd, The Bronx, NY 1058 New York, USA
              </li>
              <li>
                <i className="bx bx-envelope" />
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#f69e939a9a99b6829f979885d895999b"><span className="__cf_email__" data-cfemail="c3aba6afafac83b7aaa2adb0eda0acae">[email&nbsp;protected]</span></a>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#462f28202906322f2728356825292b"><span className="__cf_email__" data-cfemail="167f78707956627f7778653875797b">[email&nbsp;protected]</span></a>
              </li>
              <li>
                <i className="bx bx-phone-call" />
                <a href="tel:+1-(123)-456-7899">+1 (123) 456 7899</a>
                <a href="tel:+1-(514)-312-6688">+1 (514) 312-6688</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-gallery-feed">
            <h3>Gallery</h3>
            <ul>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-follow-us">
            <h3>Sidebar Follow</h3>
            <ul className="social-wrap">
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-title-area bg-11">
        <div className="container">
          <div className="page-title-content">
            <h2>Terms &amp; Conditions</h2>
            <ul>
              <li>
                <a href="index.html">
                  Home
                </a>
              </li>
              <li className="active">Terms Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="terms-conditions-area ptb-100">
        <div className="container">
          <div className="single-privacy">
            <section>
              <h3>Eligibility</h3>
              <p>
                <strong>Volunteers:</strong> Must align with ISKCON principles and values and commit to serving Srila Prabhupada’s disciples respectfully and responsibly.
              </p>
              <p>
                <strong>Disciples:</strong> Must have received initiation directly from Srila Prabhupada and provide a referral or confirmation from an existing disciple or temple president for verification.
              </p>
            </section>
            <section>
              <h3>Responsibilities</h3>
              <p>Volunteers and disciples are expected to uphold ISKCON values and principles in all interactions.</p>
            </section>
            <section>
              <h3>Code of Conduct</h3>
              <p>Misconduct, harassment, or any behavior against ISKCON values will lead to removal from the program.</p>
            </section>
            <section>
              <h3>Termination</h3>
              <p>ISKCON reserves the right to terminate involvement for violations of the terms.</p>
            </section>
            <section>
              <h3>Liability</h3>
              <p>ISKCON is not responsible for personal loss, injury, or damage during service activities.</p>
            </section>

          </div>
        </div>
      </section>
    </div>

  )
}

export default TeamCondition
