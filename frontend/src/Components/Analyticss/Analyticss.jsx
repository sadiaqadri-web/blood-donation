import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { Chart as Chartjs} from "chart.js/auto"
import { Bar,Doughnut ,Line ,Pie,Radar,PolarArea} from 'react-chartjs-2'
// import css 
import '../Banner/Banner.css'
import './Analyticss.css'

// import js file (quiz file) 
// import {custom} from './custom';

const Analyticss = () => {
  // For Navigation
  const navigate = useNavigate();
  // onClick={()=>navigate("/register-now")}

  return (
    <>
   {/* Banner */}
   <section className="bread-crumbs">
      <div className="br-cont">
        <div className="br-row">
          <div className="row-cont">
            <p>Your Analytics</p>
            <h2>Blood Donation Analytics</h2> 
            <div className="pagination">
              <span onClick={()=>navigate("/")}>Home &nbsp; / &nbsp; </span>
              <span className='active'>Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner */}

    <section className="analytics">
      <div className="analytic-cont">

        <div className="analytic-header">
          <h2>Blood Donation Chart</h2>
        </div>

        <div className="other-blood-charts">

          {/* users */}
          <div className="users">
            <h1>Registered Users</h1>
          <Line
              data={{
                labels: ['Last Year', 'Jan 2024', 'Feb 2024', 'March 2024', 'April 2024'],
                datasets: [
                  // 1st set
                  {
                    label: 'Our Users',
                    data: [3000, 2700, 2800, 2650, 2850],
                    borderWidth: 3,
                    backgroundColor: ["#0d9d00"],
                    borderRadius: 5,
                  },
                ],
              }}
          />              
          </div>

            {/* // cure patients */}
          <div className="cure-blood-patients">
            <h1>Cured Patients</h1>
          <Pie
              data={{
                labels: ['Cancer', 'Sickle cell anemia', 'Thalassemia', 'Leukemia', 'Anaemia', 'Erythrocytosis','Blood clots','More'],
                datasets: [
                  // 1st set
                  {
                    label: 'No of Blood Donors',
                    data: [3000, 2000, 3000, 2500, 2000, 1300,2200,2500],
                    borderWidth: 1,
                    backgroundColor: ["#660000","#8B0000","#800000","#CC1100","#DC143C","#86001b","#5e0013","#4b000f"],
                    borderRadius: 5,
                  },
                ],
              }}
          />          
          </div>
        </div>

        <div className="blood-donors-chart">
          <h1  style={{color:'#FFF'}}>Blood Donors in Last 3 Months</h1>
          <Bar
              data={{
                labels: ['A+ Blood', 'A- Blood', 'B+ Blood', 'B- Blood', 'AB+ Blood', 'AB- Blood','O+ Blood','O- Blood'],
                datasets: [
                  // 1st set
                  {
                    label: 'No of Blood Donors',
                    data: [3000, 2000, 3000, 2500, 2000, 1300,350,200],
                    borderWidth: 1,
                    backgroundColor: ["#0d9d00"],
                    borderRadius: 5,
                  },
                  // 2nd set
                  {
                    label: 'Urgent Need of Blood',
                    data: [3500, 2200, 5000, 3500, 3000, 2300,1200,2300],
                    borderWidth: 1,
                    backgroundColor: ["#ea062b"],
                    borderRadius: 5,
                  },
                ],
              }}
          />          
        </div>


      </div>
    </section>

    </>
  )
}

export default Analyticss
