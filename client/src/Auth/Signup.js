import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const Signup = () => {    
    const paperStyle={padding :"20px",height:'70vh',width:350, margin:"80px auto",backgroundColor:"	#F8F8FF"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'50px 0',"margin-bottom":'15px',backgroundColor:"green"}
    const fields={margin:'5px'}
    const btnstyle2 = {backgroundColor:"#24292f","margin-bottom":'15px'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' style={fields} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' style={fields} type='password' fullWidth required/>                
                <TextField label='Confirm Password' placeholder='Enter confirm password' style={fields} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Button type='submit' color='primary' variant="contained" style={btnstyle2} fullWidth>Sign in with Github</Button>
                <Typography > Don't have an account ? 
                      <Link to="/Login" style={{":hover":"cursor:pointer"}} > 
                     Login
                      </Link>
                </Typography>
            </Paper>
        </Grid>

    )
}
