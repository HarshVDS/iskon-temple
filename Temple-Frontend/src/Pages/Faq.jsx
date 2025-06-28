import React, { useState } from 'react'
import AccordionTransition from './AccordionTransition'

const Faq = () => {


  const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
      {
          question: "In which state do you work most in Africa ?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
          question: "How to donate on our site using your form ?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
          question: "How to become a volunteer in Zambia state ?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
          question: "How can I give my clothes and other products ?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
          question: "How to become a volunteer in Zambia state ?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
          question: "How to donate on our site using your form ?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      }
  ];

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
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#0a626f6666654a7e636b647924696567"><span className="__cf_email__" data-cfemail="432b262f2f2c03372a222d306d202c2e">[email&nbsp;protected]</span></a>
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#90f9fef6ffd0e4f9f1fee3bef3fffd"><span className="__cf_email__" data-cfemail="21484f474e615548404f520f424e4c">[email&nbsp;protected]</span></a>
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
  <div className="page-title-area bg-9">
    <div className="container">
      <div className="page-title-content">
        <h2>FAQ</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">FAQ</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="faq-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis facilis! Magni explicabo nam velit nulla officiis dolorum? Ducimus illum</p>
                </div>
                <div className="row align-items-center">
                    {accordionItems.map((item, index) => (
                        <div className="col-lg-6 mt-4" key={index}>
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a
                                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                                            href="javascript:void(0)"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <i className="bx bx-plus" />
                                            {item.question}
                                        </a>
                                        <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                                            <p>{item.content}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

  <section className="contact-area faq-contact-area pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-wrap">
            <div className="contact-form">
              <div className="section-title">
                <h2>Ask Questions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis facilis! Magni explicabo nam velit nulla officiis dolorum? Ducimus illum</p>
              </div>
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Your Phone" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn page-btn">
                      <span>Send Message</span>
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Faq
