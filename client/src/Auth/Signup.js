import React,{useState}  from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { BrowserRouter as Router,useHistory, Route, Link } from "react-router-dom";
import axios from 'axios'

export const Signup = () => {    
    const paperStyle={padding :"20px",height:'70vh',width:350, margin:"80px auto",backgroundColor:"	#F8F8FF"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'50px 0',"margin-bottom":'15px',backgroundColor:"green"}
    const fields={margin:'5px'}

    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()

    const history = useHistory()
    function formsignup () {        
        axios.post('http://localhost:4000/api/v1/auth/register',{email:user,password,name})
        .then(function(response) {
            console.log(response);
            alert(response.data.message);            
            history.push('/Login')            
        })
        .catch(function (error) {
            console.log(error.response);
            alert(error.response.data.message);
            history.push('/Signup')
        });
    }

    return(
        <Grid>    
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' style={fields} name="name" fullWidth required onChange={(e)=>{setName(e.target.value)}} />
                <TextField label='Email' placeholder='Enter email' style={fields} name="email" fullWidth required onChange={(e)=>{setUser(e.target.value)}} />
                <TextField label='Password' placeholder='Enter password' style={fields} name="password" type='password' fullWidth required onChange={(e)=>{setPassword(e.target.value)}}/>                                
                <Button type='submit' color='primary' variant="contained" style={btnstyle}  onClick={formsignup} fullWidth>Sign up</Button>                                
                <Typography > Don't have an account ? 
                    <Link to="/Login" style={{":hover":"cursor:pointer"}} > 
                        Login
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )
}
