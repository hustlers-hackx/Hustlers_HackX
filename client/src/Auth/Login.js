import React,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router';
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const Login=()=>{

    const paperStyle={padding :"20px",height:'70vh',width:350, margin:"80px auto",backgroundColor:"	#F8F8FF"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'50px 0',"margin-bottom":'15px',backgroundColor:"green"}
    const fields={margin:'5px'}
    const btnstyle2 = {backgroundColor:"#24292f","margin-bottom":'15px'}
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    function formsignin () {

        // console.log(email + " " + password)
        axios.post('http://localhost:4000/api/v1/auth/login',{email,password})
        .then(function(response) {
            console.log(response);
            alert(response.data.message);            
            history.push('/')            
        })
        .catch(function (error) {
            console.log(error.response);
            alert(error.response.data.message);
            history.push('/Login')
        });
    }

    return(        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>                
                <TextField label='Email' placeholder='Enter Email' style={fields} name="email" fullWidth required onChange={(e)=>{setEmail(e.target.value)}} />
                <TextField label='Password' placeholder='Enter Password' style={fields} name="password" fullWidth required onChange={(e)=>{setPassword(e.target.value)}} />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={formsignin}>Sign in</Button>
                <Button type='button' color='primary' variant="contained" style={btnstyle2} fullWidth>Sign in with Github</Button>
                <Typography > Don't have an account ? 
                    <Link to="/Signup" > 
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}