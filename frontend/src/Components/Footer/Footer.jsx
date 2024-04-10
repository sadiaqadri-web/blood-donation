import React from 'react'
// import css 
import './Footer.css'

// import icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


// import images 
import footer_1 from '../../assets/footer-1.jpg'
import footer_2 from '../../assets/footer-2.jpg'

const Footer = () => {
  
  return (
    <>
    {/* footer-top */}
    <section className="footer-top">

      <div className="ftr-top-cont">

        {/* ftr-top-cont-upper */}
        <div className="ftr-top-cont-upper sme">
        {/* About Us */}
          <div className="ftr-upper-one sec1">
            <div className="footer-content">
            <h5>About Us</h5>
            <p>Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
            <ul>
              <li><span>Phone:</span> +1(456)657-887, 999</li>
              <li><span>Email:</span> contactblood@gmail.com</li>
            </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ftr-upper-two sec2">
            <div className="footer-content">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Services</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> About Us</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> New Campaign</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Latest News</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Contact</a></li>
              </ul>

            </div>
          </div>

          {/* Our Services */}
          <div className="ftr-upper-three sec2">
            <div className="footer-content">
            <h5>Our Services</h5>
              <ul>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Blood Donation</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Health Check</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Blood Bank</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Donate Process</a></li>
                <li><a href="">< MdKeyboardDoubleArrowRight class="dble-angle-right"/> Blood Info</a></li>
              </ul>
            </div>
          </div>

          {/* Latest News */}
          <div className="ftr-upper-four sec1">
            <div className="footer-content">
              <h5>Latest News</h5>
              <div className="ftr-blog">

                {/* 1 row */}
                <div className="ftr-blogs blogs">
                  <div className="ftr-blg-cont sme">

                    <div className="ftr-blg-cont-1">
                      <div className="cont-1-img">
                        <a href=""><img src={footer_1} alt="" /></a>
                      </div>
                    </div>

                    <div className="ftr-blg-cont-2">
                      <div className="cont-1-content">
                        <a href=""> A Formula For Help And Happiness</a>
                        <span>18 February, 2022</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2 row */}
                <div className="ftr-blogs blogs">
                  <div className="ftr-blg-cont sme">

                    <div className="ftr-blg-cont-1">
                      <div className="cont-1-img">
                        <a href=""><img src={footer_2} alt="" /></a>
                      </div>
                    </div>

                    <div className="ftr-blg-cont-2">
                      <div className="cont-1-content">
                        <a href=""> Donation is hope for poor helpless children</a>
                        <span>18 February, 2022</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ftr-top-cont-bottom */}
        <div className="ftr-top-cont-btm sme">
          {/* ftr-btm-left-cont */}
          <div className="ftr-cont-left same">
            <div className="ftr-btm-left-cont">
            <h6>Subscribe us for more update &amp; news !!</h6>
            <form>
              <input type="email" name="" id="" />
              <button className="btns btn-out" type="submit">Subscribe</button>
            </form>
            </div>
          </div>
          {/* ftr-btm-right-cont */}
          <div className="ftr-cont-right same">
            <div className="ftr-btm-right-cont">
              
            <ul class="social_icons">
              <li><a href="https://www.facebook.com/" target='_blank'>< FaFacebookF  className="scl-icon" /></a></li>
              <li><a href="https://www.linkedin.com/" target='_blank'>< FaLinkedin className="scl-icon" /></a></li>
              <li><a href="https://twitter.com/" target='_blank'>< FaTwitter className="scl-icon" /></a></li>
              <li><a href="https://www.instagram.com/" target='_blank'>< FaInstagram className="scl-icon" /></a></li>
            </ul>
              
            <ul class="page-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">/</a></li>
              <li><a href="#">Terms &amp; Condition</a></li>
              <li><a href="#">/</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>

            </div>
          </div>
        </div>

      </div>
    </section>

    {/* footer-bottom */}
    <section className="ftr-btm">
      <div className="ftr-btm-cont">
        <div className="ftr-btm-row same">
          <div className="ftr-btm-col">
            <p>Copyright © 2024 Blad House All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Footer
