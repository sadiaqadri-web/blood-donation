import React, { useState, useEffect} from 'react'
import axios, { Axios } from 'axios'

import { useNavigate } from 'react-router-dom'

// import css 
import '../Banner/Banner.css'
import './Registers.css'

// import icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";;
import { BiSolidEditAlt } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Registers = () => {
  // For Navigation
  const navigate = useNavigate();

  // For Backend
  const [users,setUsers] = useState([])
  const [newUser,setNewUser] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    blood_group: "",
    lst_dnt_date: "",
    contact_number: "",
    st_address: "",
    city: "",
    province: "",
    country: ""
  })
  const [selectedUser,setSelectedUsers] = useState(null)

  const [toView,setToView] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    blood_group: "",
    lst_dnt_date: "",
    contact_number: "",
    st_address: "",
    city: "",
    province: "",
    country: ""
  })
  const[openView,setOpenView]  = useState(false);

  useEffect(() => {
    fetchUsers()
  }, [])

  // get Records
  const fetchUsers = () => {
    axios.get('http://127.0.0.1:8000/api/users/')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => console.error(error))
  }
  
  const handleInputChange = (e) =>{
    setNewUser({...newUser, [e.target.name]:e.target.value})
    console.log(newUser)
  }
  
  // Register Records
  const handleRegister = () => {
    axios.post('http://127.0.0.1:8000/api/users/', newUser)
    .then(response => {
      setUsers([...users. response.data])
    setNewUser({
      first_name: "",
      last_name: "",
      dob: "",
      blood_group: "",
      lst_dnt_date: "",
      contact_number: "",
      st_address: "",
      city: "",
      province: "",
      country: ""
    })
  })
  .catch(error => console.error(error))
  }
  
  // View Record
  const handleView = async(id) => {
    const response =  await axios.get(`http://127.0.0.1:8000/api/users/${id}/`)
    setToView(response.data)
    setOpenView(true)
  }
  
  // Edit Record in inputs
  const handleEdit = async(user) => {
    setSelectedUsers(user)
    setNewUser(user)
  }
  
  // update Record
  const handleUpdateUser = (id) => {
    axios.put(`http://127.0.0.1:8000/api/users/${selectedUser.id}/`, newUser)
    .then(response => {
      fetchUsers();
      setNewUser({
        first_name: "",
        last_name: "",
        dob: "",
        blood_group: "",
        lst_dnt_date: "",
        contact_number: "",
        st_address: "",
        city: "",
        province: "",
        country: ""
      });
    })
    .catch(error => console.error(error))
  }

  //Cancel update Record
  const handleCancelUpdateUser = () => {
    setSelectedUsers(null)
    setNewUser({
      first_name: "",
      last_name: "",
      dob: "",
      blood_group: "",
      lst_dnt_date: "",
      contact_number: "",
      st_address: "",
      city: "",
      province: "",
      country: ""
    })
  }
  
  //Delete Record
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/users/${id}/`,)
    .then(response => {
      fetchUsers();
    })
    .catch(error => console.error(error))
  }


  return (
    <>
   {/* Banner */}
   <section className="bread-crumbs">
      <div className="br-cont">
        <div className="br-row">
          <div className="row-cont">
            <p>Get In Touch</p>
            <h2>Register As a Blood Donor</h2> 
            <div className="pagination">
              <span onClick={()=>navigate("/")}>Home &nbsp; / &nbsp; </span>
              <span className='active'>Register Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner */}
    

    <section className="register">
      <div className="register-cont">

        <div className="cont register-head">
          <div className="register-head-cont">
            <h2>Blood House Organization</h2>
          </div>
        </div>

        <div className="cont register-form">
          <div className="register-form-cont">
            <div className="register-form-cont-inner">

              <form action="" className="register-main-form">
                
                {/* 1st row */}
                <div className="cont md-1 tc row-1">

                <div class="md-3">
                  <label className='lb-1'>Full Name <span>*</span></label>
                </div>
                <div class="md-4">
                  <label className='lb-2'>First Name</label>
                  <input type="text" name="first_name" value={newUser.first_name} onChange={handleInputChange} required/>
                </div>
                <div class="md-4">
                  <label className='lb-2'>Last Name</label>
                  <input type="text" name="last_name" value={newUser.last_name} onChange={handleInputChange} required/>
                </div>

                </div>

                {/* 2nd row */}
                <div className="cont md-1 tc row-1">
                  <div class="md-3">
                    <label className='lb-1'>Date of Birth <span>*</span></label>
                  </div>
                  
                  <div class="md-4">
                    <label className='lb-2'>Date of Birth</label>
                    <input type="text" name="dob" value={newUser.dob} onChange={handleInputChange} required/>
                  </div>
                
                </div>

                {/* 3rd row */}
                <div className="cont md-1 tc row-1">
                  <div class="md-3">
                    <label className='lb-1'>Blood Group <span>*</span></label>
                  </div>
                  
                  <div class="md-4">
                    <label className='lb-2'>Blood Group</label>
                    <input type="text" name="blood_group" value={newUser.blood_group} onChange={handleInputChange} required/>
                  </div>
                
                </div>

                   {/* 4th row */}
                <div className="cont md-1 tc row-1">
                  <div class="md-3">
                    <label className='lb-1'>Last Donate Date <span>*</span></label>
                  </div>
                  
                  <div class="md-4">
                    <label className='lb-2'>Last Donate Date</label>
                    <input type="text" name="lst_dnt_date" value={newUser.lst_dnt_date} onChange={handleInputChange} required/>
                  </div>
                
                </div>

                {/* 5th row */}
                <div className="cont md-1 tc row-1">

                <div class="md-3">
                  <label className='lb-1'>Phone Number <span>*</span></label>
                </div>
                
                <div class="md-4">
                  <label className='lb-2'>Number</label>
                  <input type="text" name="contact_number" value={newUser.contact_number} onChange={handleInputChange} required/>
                </div>
                
                </div>

                {/* 6th row */}
                <div className="cont md-1 tc row-1">

                <div class="md-3">
                  <label className='lb-1'>Address <span>*</span></label>
                </div>
                
                <div class="md-4">
                  <label className='lb-2'>Street Address</label>
                  <input type="text" name="st_address" value={newUser.st_address} onChange={handleInputChange} required/>
                </div>
                
                </div>

                {/* 7th row */}
                <div className="cont md-1 tc row-1">

                <div class="md-3">
                  <label className='lb-1'><span></span></label>
                </div>
                
                <div class="md-4">
                  <label className='lb-2'>City</label>
                  <input type="text" name="city" value={newUser.city} onChange={handleInputChange} required/>
                </div>
                
                </div>

                {/* 8th row */}
                <div className="cont md-1 tc row-1">

                <div class="md-3">
                  <label className='lb-1'> <span></span></label>
                </div>
                
                <div class="md-4">
                  <label className='lb-2'>State / Province</label>
                  <input type="text" name="province" value={newUser.province} onChange={handleInputChange} required/>
                </div>
                
                </div>

                {/* 9th row */}
                <div className="cont md-1 tc row-1">

                <div class="md-3">
                  <label className='lb-1'><span></span></label>
                </div>
                
                <div class="md-4">
                  <label className='lb-2'>Country</label>
                  <input type="text" name="country" value={newUser.country} onChange={handleInputChange} required/>
                </div>
                
                </div>

                 {/* Register Button */}
                <div className="cont md-1 tc row-1">
                  <div class="md-3">
                    <label className='lb-1'><span></span></label>
                  </div>
                  
                  <div class="md-4 reg-btn">
                    <label className='lb-2'></label>
                    {
                      selectedUser ? (
                        <>
                        <div className='upd-close-btns'>
                        <button type="submit" className='update-btn btn-tans' name='' onClick={handleUpdateUser}>Update</button>
                        <br />
                        <button type="submit" className='close-btn btn-tans' name='' onClick={handleCancelUpdateUser}>Cancel</button>
                        </div>
                        </>
                      ) : (
                        <button type="submit" className='btn-tans but' onClick={handleRegister}>Register<i class="anglesright"><MdKeyboardDoubleArrowRight/></i></button>
                      )
                    }
                  </div>
                </div>
                
              </form>

            </div>
          </div>
        </div>

        
        {/* <ul className="users-list">
          {
            users.map(user => (
              <li key={user.id}>
                <div>
                  <strong>{user.id} {user.first_name} {user.last_name}</strong>
                </div>
                <div className="actions">
                  <button onClick={()=> handleView(user.id)}>View</button>
                  <button onClick={()=> handleEdit(user)}>Edit</button>
                  <button onClick={()=> handleDelete(user.id)}>Delete</button>
                </div>
              </li>
            ))
          }
        </ul> */}

        {/* display users */}
        <div className="users-list">
          <div className="users-cont">
            <h2>Registered Users</h2>
            <div className="users-table">

              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Blood Group</th>
                    <th colSpan={3}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                  users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td><a href="#">{user.first_name} {user.last_name}</a></td>
                    <td>{user.dob}</td>
                    <td>{user.st_address} , <br /> <small class="d-block">{user.city} {user.province} {user.country}</small></td>
                    <td>{user.contact_number}</td>
                    <td>{user.blood_group} <br /> <small class="d-block"><b>Last Donate:</b> {user.lst_dnt_date}</small></td>
                    <td><a href="#" class="more" onClick={()=> handleEdit(user)}><BiSolidEditAlt/></a></td>
                    <td><a href="#" class="more" onClick={()=> handleView(user.id)}><GrView /></a></td>
                    <td><a href="#" class="more" onClick={()=> handleDelete(user.id)}><AiFillDelete /></a></td>
                 </tr>
                  ))
                }
                </tbody>

              </table>

            </div>
            
          </div>
        </div>

        {/* single view */}
        
        {openView && (
        <div className="view-user">
          <div className="view-user-cont">

            <h2>User Information</h2>
            <div className="user-info">

              <div className="u-info">
              <strong>User ID :</strong>
              <span>{toView.id}</span>
              </div>

              <div className="u-info">
              <strong>User Name :</strong>
              <span>{toView.first_name} {toView.last_name}</span>
              </div>

              <div className="u-info">
              <strong>Date of Birth :</strong>
              <span>{toView.dob}</span>
              </div>

              <div className="u-info">
              <strong>Address :</strong>
              <span>{toView.st_address}, {toView.city} {toView.province} {toView.country}</span>
              </div>

              <div className="u-info">
              <strong>Contact :</strong>
              <span>{toView.contact_number}</span>
              </div>

              <div className="u-info">
              <strong>Blood Group :</strong>
              <span>{toView.blood_group}</span>
              </div>

              <div className="u-info">
              <strong>Last Donate Blood :</strong>
              <span>{toView.lst_dnt_date}</span>
              </div>

              {/* Button */}
              <div class="close-btn">
                <button type="submit" class="btn-tans" onClick={() => setOpenView(false)}>Close</button>
              </div>

            </div>
            
          </div>
        </div>
        )}

        {/* {openView && (
          <>
          <div>
            <strong>{toView.first_name} {toView.last_name}</strong>
            <br />
            <strong>Date of Birth: {toView.dob}</strong>
            <br />
            <strong>Blood Group: {toView.blood_group}</strong>
            <br />
            <strong>Last Donate Date: {toView.lst_dnt_date}</strong>
            <br />
            <strong>Contact Number: {toView.contact_number}</strong>
            <br />
            <strong>Address: {toView.st_address} {toView.city} {toView.province} {toView.country}</strong>
            <br />
          </div>
          <button onClick={() => setOpenView(false)}>Close</button>
          </>
        )} */}



      </div>
    </section>
    
    </>
  )
}

export default Registers
