import React from 'react'
import { useNavigate } from 'react-router-dom'

// import css 
import '../Banner/Banner.css'
import './Contacts.css'

// import icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";


const Contacts = () => {
  // For Navigation
  const navigate = useNavigate();

  return (
    <>
    {/* Banner */}
    <section className="bread-crumbs">
      <div className="br-cont">
        <div className="br-row">
          <div className="row-cont">
            <p>Get In Touch</p>
            <h2>Contact As A Blood Donor</h2> 
            <div className="pagination">
              <span onClick={()=>navigate("/")}>Home &nbsp; / &nbsp; </span>
              <span className='active'>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner */}

    <section className="contact">

        <div className="contact-cont">
            <div className="contact-form">

                <div className="contact-form-inner">

                {/* contact-form-inner-left */}
                  <div className="contact-form-inner-left">
                    <div className="cont-box-form">
                      <h4>Get In Touch</h4>
                      <p>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms
                      </p>
                      <form action="" className='cont-form'>
                        {/* name */}
                        <div className="row inputs">
                          <div className="first-name col">
                            <input type="text" name="" placeholder='First Name' />
                          </div>
                          <div className="last-name col">
                            <input type="text" name="" placeholder='Last Name' />
                          </div>
                        </div>

                        {/* email and Subject*/}
                        <div className="row inputs">
                          <div className="first-name col">
                            <input type="text" name="" placeholder='Email' />
                          </div>
                          <div className="last-name col">
                            <input type="text" name="" placeholder='Subject' />
                          </div>
                        </div>

                        {/* email and Subject*/}
                        <div className="row inputs">
                          <div className="message col">
                            <textarea name="" id="" rows="3" placeholder='Message'></textarea>
                          </div>
                        </div>

                        {/* Submit Button*/}
                        <div className="sub-btn">
                        <button type="submit" className='btn-tans but'>Submit<i class="anglesright"><MdKeyboardDoubleArrowRight/></i></button>
                        </div>

                      </form>
                    </div>
                  </div>

                {/* contact-form-inner-right */}
                  <div className="contact-form-inner-right">
                    <div className="contact-form-right-cont">
                      <span>Blood Excellence!</span>
                      <h4>Expanded Blood Donate Services Here</h4>
                      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                      <ul>
                        <li>
                          <span><BsTelephoneFill className='fa phone'/>Emergency Line: (+92) 111 2233</span>
                        </li>
                        
                         <li>
                          <span><HiLocationMarker class="fa location"/>Location: Street 68, Karachi,Pakistan</span>
                        </li>
                        
                        <li>
                          <span><AiFillClockCircle class="fa clock"/>Mon - Fri: 8:00 am - 7:00 pm</span>
                        </li>
                       </ul>

                    </div>
                  </div>
                </div>

            </div>
        </div>

    </section>

    {/* Social-btns */}
    <div className="social-btns">
      <div className="social-btns-cont">
        <div className="social-btns-cont-btns">
          <a href="https://www.facebook.com/" target='_blank' className="facebook social-btn btn-tans">Facebook</a>
          <a href="https://www.linkedin.com/" target='_blank' className="google social-btn btn-tans">Linkedin</a>
          <a href="https://twitter.com/" target='_blank' className="twitter social-btn btn-tans">Twitter</a>
          <a href="https://www.instagram.com/" target='_blank' className="Pinterest social-btn btn-tans">Instagram</a>
        </div>
      </div>
    </div>

    {/* map */}
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78011.85271200744!2d67.03402551106079!3d24.886798763582494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712221822643!5m2!1sen!2s" width="1519" height="450" className='map-layout' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Contacts
