import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import css 
import '../Banner/Banner.css'
import './Quizes.css'

// import js file (quiz file) 
import {quizes} from './quizes';

// import images
import logo from '../../assets/logo.png'
import quizz3 from '../../assets/quizz3.gif'


const Quizes = () => {
  // For Navigation
  const navigate = useNavigate();

  // create Quiz
  let [index,setIndex] = useState(0);
  let [question,setQuestion] = useState(quizes[index]);
  let [lock,setlock] = useState(false);
  let [score, setScore] = useState(0);
  let [result,setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1,Option2,Option3,Option4];

  const checkAns = (e,ans) =>{
    if (lock === false){
      if(question.ans===ans){
        e.target.classList.add("correct");
        setlock(true);
        setScore(prev=>prev+1)
      }else{
        e.target.classList.add("wrong");
        setlock(true);
        option_array[question.ans-1].current.classList.add("correct")
      }
    }
  }

  {/*next */}

  const next = () => {
    if (lock===true){
      if (index === quizes.length -1){
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(quizes[index]);
      setlock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }
  
  {/* Reset */}
  const reset = () =>{
    setIndex(0);
    setQuestion(quizes[0]);
    setScore(0);
    setlock(false);
    setResult(false);
  }
  return (
    <>
     {/* Banner */}
     <section className="bread-crumbs">
      <div className="br-cont">
        <div className="br-row">
          <div className="row-cont">
            <p>Challenge Yourself</p>
            <h2>Challenge As A Blood Donor</h2> 
            <div className="pagination">
              <span onClick={()=>navigate("/")}>Home &nbsp; / &nbsp; </span>
              <span className='active'>Quiz and Challenges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner */}

    <section className="quiz">

      <div className="side-img">
        <div className="sidebar-inner">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="quiz-sec">
        <div className="quiz-cont">
          <div className="quiz-cont-inner">

            {result?<></>:<>
            <div className="ques-num"><span>Question {index+1} / {quizes.length}</span></div>
            {/* <div className="quest"><span>Over the Past Two (2) Weeks, how Often have You had little interest or Pleasure in Doing things?</span></div> */}
            <div className="quest"><span>{index+1}. {question.question}</span></div>
            <div className="options">

              <div className="opt-1" ref={Option1} onClick={(e)=>{checkAns(e,1)}}>
                  {/* <label><span className='opt-denot-A'>A</span>Access Therapists Who Accept insurance</label> */}
                  <label><span className='opt-denot-A'>A</span>{question.option1}</label>
              </div>
              <div className="opt-2" ref={Option2} onClick={(e)=>{checkAns(e,2)}}>
                  <label><span className='opt-denot-B'>B</span>{question.option2}</label>
              </div>
              <div className="opt-3" ref={Option3} onClick={(e)=>{checkAns(e,3)}}>
                  <label><span className='opt-denot-C'>C</span>{question.option3}</label>
              </div>
              <div className="opt-4" ref={Option4} onClick={(e)=>{checkAns(e,4)}}>
                  <label><span className='opt-denot-D'>D</span>{question.option4}</label>
              </div>

            </div>

            <div className="next-btn" onClick={next}>
              <button class="btn-tans" id="step1btn" type="button"><span>Next</span></button>
            </div>
            </>}

            {/* Result */}
            {result?<>
            <div className="result">
              <h4>You Result</h4>
              <div className="spacer"></div>
              <div className="score">
                <img src={quizz3} alt="" className='congrate'/>
                <h3>You Scored {score} out of {quizes.length}</h3>
              </div>
              <div className="next-btn" onClick={reset}>
                <button class="btn-tans" id="step1btn" type="button"><span>Reset</span></button>
              </div>
            </div>

            </>:<></>}


          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Quizes
