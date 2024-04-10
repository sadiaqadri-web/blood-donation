import React from 'react'
import { useNavigate } from 'react-router-dom'

// import css 
import '../Banner/Banner.css'
import './Donates.css'

// import icons
import { AiFillHeart } from "react-icons/ai";


const Donates = () => {
  // For Navigation
  const navigate = useNavigate();

  return (
    <>
   {/* Banner */}
   <section className="bread-crumbs">
      <div className="br-cont">
        <div className="br-row">
          <div className="row-cont">
            <p>Your Donation Matters</p>
            <h2>We Are Blood Donor Group</h2> 
            <div className="pagination">
              <span onClick={()=>navigate("/")}>Home &nbsp; / &nbsp; </span>
              <span className='active'>Donate Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner */}

    <section className="request">
      <div className="rq-cont">
        <div className="rq-row">
          {/* 1st coloumn */}
          <div className="bl-rq">
            <div className="bl-rq-cont">
            <h4>Current Blood Request</h4>
            <ul>
              <li><AiFillHeart className='heart'/> B+ Karachi, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> O+ Karachi, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> A+ Islamabad, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> A- Islamabad, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> AB+ Lahore, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> B- Karachi, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> O- Lahore, Pakistan (06.04.2024)</li>
              <li><AiFillHeart className='heart'/> AB- Islamabad, Pakistan (06.04.2024)</li>
            </ul>
            </div>
          </div>
          {/* 2nd coloumn */}
          <div className="bl-appnt">
            <div className="bl-appnt-cont">
            <h4>Request Appointment Here</h4>
            {/* form */}
            <form action="" className='appnt-form'>

              {/* Name and Contact */}
              <div className="two-inputs">
              {/* Name */}
                <div class="appnt-fld appnt-fld-flx appnt-name">
                  <input type="text" name="" id="" placeholder="Your Name"/>
                </div>
              {/* Number */}
                <div class="appnt-fld appnt-fld-flx appnt-number">
                  <input type="text" name="" id="" placeholder="Phone Number"/>
                </div>
              </div>

              {/* Email */}
              <div class="appnt-fld appnt-email">
                <input type="email" name="" id="" placeholder="Your Email"/>
              </div>
              {/* Donation Type */}
              <div class="appnt-fld appnt-dnt-type">
                <select class="dnt-type-select">
                  <option value="Selected" disabled selected>Donation Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">0+</option>
                  <option value="O-">0-</option>
                </select>
              </div>
              {/* Message */}
              <div class="appnt-fld appnt-message">
              <textarea class="appnt-message-msg">Your Message</textarea>
              </div>
              {/* Button */}
              <div class="appnt-fld appnt-submit">
              <button type="submit" class="btn-tans">Donate Now</button>
              </div>

            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Donates
