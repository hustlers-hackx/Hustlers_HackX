import React from 'react';
import './Profile.css'

const Profile = () => {
    return (<>
        <div class="wrapper">
            <div class="left">
                <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
                <h4>Alex William</h4>
                <strong>Bio :</strong><br/>
                <p style={{margin:"10px"}}>
                Loremgfudgdbngjhdfbgdg
                erfbgdngdg
                \dfgbdfsfdj
                \dfpiguhdui</p>
            </div>
            <div class="right">
                <div class="info">
                    <h3>Information</h3>
                    <div class="info_data">
                        <div class="data">
                            <h4>Email</h4>
                            <p>alex@gmail.com</p>
                        </div>
                        <div class="data" style={{"width":"200px"}}>
                            <h4>Skills</h4>
                            <p>sbgd,gbudsfgb,udfgbdb<br/> ,bgsdfb,bfgsbgdjbg,</p>
                        </div>
                    </div>
                </div>
      
      <div class="projects">
            <h3>Hackathon Info</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Hackthon Id</h4>
                    <p>1111</p>
                 </div>
                 <div class="data">
                   <h4>Participating</h4>
                    <p>Yes / No</p>
              </div>
            </div>
        </div>

        <div class="projects">
            <h3>Other Information</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Friends</h4>
                    <p>jasdfb,ksfbajsd,bfjsadb</p>
                 </div>
                 <div class="data">
                   <h4>Createdat</h4>
                    <p>11/5/01</p>
              </div>
              <div class="data">
                   <h4>Updated At</h4>
                    <p>12/8/01</p>
              </div>              
            </div>
        </div>
    
    </div>
</div>
    </>);
}

export default Profile;