import React from 'react'

const ComingSoon = () => {
  return (
    <div>
  <div className="preloader">
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
  <div className="coming-soon-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="coming-soon-content">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="image" />
          </a>
          <h2>We are launching soon</h2>
          <div id="timer" className="flex-wrap d-flex justify-content-center">
            <div id="days" className="align-items-center flex-column d-flex justify-content-center" />
            <div id="hours" className="align-items-center flex-column d-flex justify-content-center" />
            <div id="minutes" className="align-items-center flex-column d-flex justify-content-center" />
            <div id="seconds" className="align-items-center flex-column d-flex justify-content-center" />
          </div>
          <form className="newsletter-form" data-toggle="validator">
            <div className="form-group">
              <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
              <span className="label-title"><i className="bx bx-envelope" /></span>
            </div>
            <button type="submit" className="default-btn">
              <span>Subscribe</span>
            </button>
            <div id="validator-newsletter" className="form-result" />
            <p>If you would like to be notified when your app is live, Please subscribe to our mailing list.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="go-top">
    <i className="bx bx-chevrons-up" />
    <i className="bx bx-chevrons-up" />
  </div>
</div>

  )
}

export default ComingSoon
