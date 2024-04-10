import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


// import css 
import './Homes.css'

// import icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";


// import images
import home_2 from '../../assets/home-2.png'
import home_3 from '../../assets/home-3.jpg'
import home_4 from '../../assets/home-4.png'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import donor_1 from '../../assets/donor-1.png'
import donor_2 from '../../assets/donor-2.png'
import donor_3 from '../../assets/donor-3.png'
import donor_4 from '../../assets/donor-4.png'


const Homes = () => {
  // For Navigation
  const navigate = useNavigate();
  
  // Fuction For Slider Testimonials
  const slider = useRef();
  let tx = 0;
  
  const slideForward =  () =>{
    if(tx > -50) { 
      tx -= 25
      }
      slider.current.style.transform = `translateX(${tx}%)`; 
    }
    
  const slideBackward =  () =>{
    if(tx < 0) {
      tx += 25
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <>
    {/* hero section */}
    <section className="hero">
      <div className="hero-banner">
        <div className="hero-cont">
          <div className="hero-row">
            <div className="hero-row-col">
              <div className="hero-content">
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <button className='btn-tans'>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* donation seps */}
    <section className='dnt-steps'>
      <div className="dnt-steps-cont">
        <div className="dnt-steps-row">

        {/* stp-1 */}
          <div className="stps">
            <div className="stp-cont">
              <h2>01.</h2>
              <h5>Become a Donar</h5>
              <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but
              because occasionally</p>
            </div>
          </div>

        {/* stp-2 */}
          <div className="stps">
            <div className="stp-cont">
              <h2>02.</h2>
              <h5>Why Give Blood?</h5>
              <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but
              because occasionally</p>
            </div>
          </div>

        {/* stp-3*/}
          <div className="stps">
            <div className="stp-cont">
              <h2>03.</h2>
              <h5>How Donations Helps</h5>
              <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but
              because occasionally</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* reg-dnt and about section */}
    <section className="reg-dnt-abt">
      <div className="reg-dnt-abt-cont">

        {/* .cards  */}
        <div className="reg-dnt-crd-cont crd">

          {/* register card */}
          <div className="reg-crd sme">
            <div className="reg"onClick={()=>navigate("/register-now")}>

            <a href="">
              <div class="reg-content">
                <h4>Register Now</h4>
                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                  pain,
                </p>
              </div>
            </a>

            <div className="reg_icon">
              <a href=""><MdKeyboardDoubleArrowRight className='go'/></a>
            </div>

            </div>
          </div>

          {/* donate card */}
          <div className="dnt-crd sme">
          <div className="dnt"  onClick={()=>navigate("/donate-now")}>
            <a href="">
              <div class="reg-content">
                <h4>Donate Now</h4>
                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                  pain,
                </p>
              </div>
            </a>
            
          <div className="reg_icon">
            <a href=""><MdKeyboardDoubleArrowRight className='go'/></a>
          </div>
          
          </div>
          </div>

        </div>

        {/* .about */}
        <div className="about-cont crd">
        {/* .about-left */}
          <div className="about-cont-left">
            <div className="abt-cont-left-inner">
              <img src={home_2} alt="" className='img_1' />
              <img src={home_3} alt="" className='img_2' />
              <img src={home_4} alt="" className='img_3' />
            </div>
          </div>
        {/* about-right */}
          <div className="about-cont-right">
            <div className="about-cont-right-inner">
              <p className='red-head'>Help The People in Need</p>
              <h2>Welcome to Blood Donors Organization</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et
              dolore magna aliqua.suspendisse the gravida. Risus commodo viverra maecenas</p>
              <div className="tags">
              <ul>
                <li><MdKeyboardDoubleArrowRight className='double-arrow'/> Good Service</li>
                <li><MdKeyboardDoubleArrowRight className='double-arrow'/> Help People</li>
                <li><MdKeyboardDoubleArrowRight className='double-arrow'/> Hugine Tools</li>
              </ul>
              <ul>
                <li><MdKeyboardDoubleArrowRight className='double-arrow'/> 24h Service</li>
                <li><MdKeyboardDoubleArrowRight className='double-arrow'/> Health Check</li>
                <li><MdKeyboardDoubleArrowRight className='double-arrow'/> Blood Bank</li>
              </ul>
              </div>
              <button className='btn btn-tans'>Explore Now</button>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* Call-details */}
      <section className="call-now">
        <div className="call-now-cont">
          <div className="call-now-row">
            <div className="call-now-col">
              <div className="call-now-inner">
                <span className="call-over"><BsTelephoneFill/></span>
                <p>START DONATING</p>
                <a href="tel:1112223333"><h2>Call Now: <span>111 222 3333</span></h2></a>
                <ul>
                  <li>
                    <span className='locat'><HiLocationMarker/></span>
                    <span>Pakisatan - Street 68, Karachi</span>
                  </li>
                  <li>
                    <span className='mail'><IoMdMail/></span>
                    <a href="mailto:company@domin.com"><span>Donate@gmail.com</span></a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* donars says */}
      <section className='donars-says'>
        <div className="donars-says-cont">
          {/* Title */}
          <div className="donars-says-row">
            <div className="donars-says-col">
              <div className="donars-says-title">
                <p>Testimonials</p>
                <h2>What Our Donors Says !!</h2>
              </div>
            </div>
          </div>
          {/* Content testimonials */}
          <div className='testimonials'>
      <     img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
           <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
              <ul ref={slider}>
              {/* <ul> */}
            {/* 1st */}
                <li>
                  <div className="slide">
                    <div className="donor-info">
                      <img src={donor_1} alt="" />
                      <div>
                        <h3>Donor 1</h3>
                        <span>Karachi, Pakistan</span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus perferendis, consequatur cum blanditiis 
                    optio fuga ullam expedita quas nisi facilis excepturi illum et doloremque eos voluptas ex est iusto.</p>
                 </div>
            </li>
            {/* 1st */}
            {/* 2nd */}
                <li>
                  <div className="slide">
                    <div className="donor-info">
                      <img src={donor_2} alt="" />
                      <div>
                        <h3>Donor 2</h3>
                        <span>Islamabad, Pakistan</span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus perferendis, consequatur cum blanditiis 
                    optio fuga ullam expedita quas nisi facilis excepturi illum et doloremque eos voluptas ex est iusto.</p>
                 </div>
            </li>
            {/* 2nd */}
            {/* 3rd */}
                <li>
                  <div className="slide">
                    <div className="donor-info">
                      <img src={donor_3} alt="" />
                      <div>
                        <h3>Donor 3</h3>
                        <span>Lahore, Pakistan</span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus perferendis, consequatur cum blanditiis 
                    optio fuga ullam expedita quas nisi facilis excepturi illum et doloremque eos voluptas ex est iusto.</p>
                 </div>
            </li>
            {/* 3rd */}

            {/* 4th */}
                <li>
                  <div className="slide">
                    <div className="donor-info">
                      <img src={donor_4} alt="" />
                      <div>
                        <h3>Donor 4</h3>
                        <span>Sialkot, Pakistan</span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus perferendis, consequatur cum blanditiis 
                    optio fuga ullam expedita quas nisi facilis excepturi illum et doloremque eos voluptas ex est iusto.</p>
                 </div>
            </li>
            {/* 4th */}

        </ul>
      </div>
          </div>
          {/* Content testimonials */}
        </div>
      </section>

    </>
  )
}

export default Homes
