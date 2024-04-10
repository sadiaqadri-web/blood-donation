import React from 'react'
import { useNavigate } from 'react-router-dom'

// import css 
import '../Banner/Banner.css'
import './Inforesourcess.css'

// import icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Inforesourcess = () => {
  // For Navigation
  const navigate = useNavigate();

  return (
    <>
   {/* Banner */}
   <section className="bread-crumbs">
      <div className="br-cont">
        <div className="br-row">
          <div className="row-cont">
            <p>Informationl Resources</p>
            <h2>Informationl about Blood Donation</h2> 
            <div className="pagination">
              <span onClick={()=>navigate("/")}>Home &nbsp; / &nbsp; </span>
              <span className='active'>Informationl Resources</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner */}
    
    <section className="info-res">
      <div className="info-res-cont">
        
        {/* info-res-1 */}
        <div className="info-resources">
          <div className="info-res-img">
            <div className="info-res-img-child bg-img-1">
              {/* Background image */}
            </div>
          </div>
          <div className="info-res-1-cont">
            <h4>Donation is hope for poor helpless children</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
               alteration in some form, by injected humour, or randomised words which don't look even slightly
               believable. If you are going to If you are going to use a passage of Lorem Ipsum, you need to be
               sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <span>Read More <i className='doublearrow'><MdKeyboardDoubleArrowRight /></i></span>
          </div>
        </div>

        {/* info-res-2 */}
        <div className="info-resources">
          <div className="info-res-img">
            <div className="info-res-img-child bg-img-2">
              {/* Background image */}
            </div>
          </div>
          <div className="info-res-1-cont">
            <h4>Your Help Can Make Someone life Better.</h4>
            <p>
            <b className='points'>Keep the strip bandage on for the next several hours; to avoid a skin rash, clean the area around the bandage with soap and water.</b>
            <b className='points'>Don’t do any heavy lifting or vigorous exercise for the rest of the day.</b>
            <b className='points'>If the needle site starts to bleed, apply pressure and raise your arm straight up for 5-10 minutes or until bleeding stops.</b>
            <b className='points'>Call us at [Help-line Number] to report any additional health information that you forgot to tell us, if you have any problems or if you needed medical care after giving blood.</b>
            <b className='points'>If you experience dizziness or lightheadedness, stop what you’re doing and sit down or lie down until you feel better; avoid performing any activity where fainting may lead to injury for at least 24 hours.</b>
            <b className='points'>Keep eating iron-rich foods.</b>
            <b className='points'>If you donate frequently, be sure to take multivitamins with iron to ensure you continue to replenish your iron stores before your next donation.</b>
            </p>
            <span>Read More <i className='doublearrow'><MdKeyboardDoubleArrowRight /></i></span>
          </div>
        </div>

        {/* info-res-3 */}
        <div className="info-resources">
          <div className="info-res-img">
            <div className="info-res-img-child bg-img-3">
              {/* Background image */}
            </div>
          </div>
          <div className="info-res-1-cont">
            <h4>Additional tips before donating:</h4>
            <p>
            <b className='points'>Donating Platelets? Don't take aspirin for 2 days before your appointment. Learn About Platelet Donations.</b>
            <b className='points'>Ask a friend to donate at the same time . You can support each other and do twice as much good!</b>
            <b className='points'>Download the Blood Donor App to receive appointment reminders, start your RapidPass and more.</b>
            </p>
            <span>Read More <i className='doublearrow'><MdKeyboardDoubleArrowRight /></i></span>
            </div>
        </div>

        {/* info-res-4 */}
        <div className="info-resources">
          <div className="info-res-img">
            <div className="info-res-img-child bg-img-4">
              {/* Background image */}
            </div>
          </div>
          <div className="info-res-1-cont">
            <h4>Additional tips for the day of your donation:</h4>
            <p>
            <b className='points'>Drink an extra 16 oz. of water (or other nonalcoholic drink) before your appointment.</b>
            <b className='points'>Eat a healthy meal, avoiding fatty foods like hamburgers, fries or ice cream.</b>
            <b className='points'>Wear a shirt with sleeves that you can roll up above your elbows.</b>
            <b className='points'>Let us know if you have a preferred arm or particular vein that has been used successfully in the past to draw blood.</b>
            <b className='points'>Relax, talk to other donors or read while you donate.</b>
            <b className='points'>Applied Muscle Tension (AMT) is a series of simple exercises that help your blood pressure stay up and improve blood flow, so your chance of experiencing any side effects, like fainting, stays low. These exercises can be performed throughout your donation and afterwards in the refreshment area.</b>
            </p>
            <span>Read More <i className='doublearrow'><MdKeyboardDoubleArrowRight /></i></span>
          </div>
        </div>

        {/* info-res-5 */}
        <div className="info-resources">
          <div className="info-res-img">
            <div className="info-res-img-child bg-img-5">
              {/* Background image */}
            </div>
          </div>
          <div className="info-res-1-cont">
          <h4>Don’t Do This Activity After You Donating Your Blood</h4>
            <p>
            <b className='points'>Keep the strip bandage on for the next several hours; to avoid a skin rash, clean the area around the bandage with soap and water.</b>
            <b className='points'>Don’t do any heavy lifting or vigorous exercise for the rest of the day.</b>
            <b className='points'>If the needle site starts to bleed, apply pressure and raise your arm straight up for 5-10 minutes or until bleeding stops.</b>
            <b className='points'>Call us at [Help-line Number] to report any additional health information that you forgot to tell us, if you have any problems or if you needed medical care after giving blood.</b>
            <b className='points'>If you experience dizziness or lightheadedness, stop what you’re doing and sit down or lie down until you feel better; avoid performing any activity where fainting may lead to injury for at least 24 hours.</b>
            <b className='points'>Keep eating iron-rich foods.</b>
            <b className='points'>If you donate frequently, be sure to take multivitamins with iron to ensure you continue to replenish your iron stores before your next donation.</b>
            </p>
            <span>Read More <i className='doublearrow'><MdKeyboardDoubleArrowRight /></i></span>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Inforesourcess
