import './Profile.css'
import imgmain from '../../../Resources/login-hero.svg';
import userIcon from '../../../Resources/UserIcon.png';
import passwordIcon from '../../../Resources/PasswordIcon.png';
import imgside from '../../../Resources/AppLogo.png';
import React, { useState } from 'react';
import logout from '../../../Resources/log-out.png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  let nav = useNavigate()

  const [searchQuery, setSearchQuery] = useState('');


  
 
    return (
      <div class="Profile-login-container">
      <div class="Profile-Login-hor">
        <div>
          <img src={imgside} id="profilesideimg"/>
        </div>
        <div className='divisions1'>
          <h1 className="pageTitle">Kavach - India's Leading Tele-Radiology Platform</h1>
        </div>
        </div>
        <div class="Profile-Login-hor1">
          <div class="left">
            <div class="front">
              <svg class="profile" stroke="blue" fill="none" stroke-width="0" viewBox="0 0 24 24" height="10em" width="10em" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0E0F62' }}><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg>
              <div class="item">Upload Profile Picture</div>
              <div class="item">Change Password</div>
            </div>
          
        </div>
          <div class="right">
           <div class="back"></div>
           <div class="bg">
           <div class="item1">Full Name</div>
           <div class="item2">Degree</div>
           <div class="item2">Specialization</div>
           <div class="item2">Email</div>
           <div class="item2">UserName</div>
           <div class="item2">Department</div>
           <div class="item3">Password</div>
           </div>
          </div>
        </div>
      </div>
    );
}
export default Profile;