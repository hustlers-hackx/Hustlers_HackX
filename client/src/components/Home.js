import {
    Button,
    Container,
    Divider,
    Grid,
    makeStyles,
    useTheme,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import { motion } from "framer-motion";
  import axios from "axios";
  import Card from "@material-ui/core/Card";
  import CardContent from "@material-ui/core/CardContent";
  import Typography from "@material-ui/core/Typography";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      margin: theme.spacing(2),
    },
    imageDiv: {
      height: "230px",
    },
    storeImage: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      height: "100%",
    },
    homePage: {
      marginTop: "100px",
    },
    cardContent : {
        textAlign : "Left"
    },
    buttonDiv : {
        display : "flex",
    },
  }));
  
  const Home = () => {
    const classes = useStyles();
    const [hackathons, setHackathons] = useState([]);
    const [uid, setUid] = useState("6161dd267db4ed4428efc596");

    useEffect(() => {
      const getHackathons = async () => {
        await axios
          .get("http://localhost:4000/api/v1/hackathons", {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppbmVzaG1vZGk5OUBnbWFpbC5jb20iLCJpYXQiOjE2MzM4MDM1Nzh9.DNygnVwiqmg0Ky3O0oSm3bp9UGqxda7n8fCglIbFG_U",
            },
          })
          .then((hackathons) => {
            console.log(hackathons.data.data);
            setHackathons(hackathons.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
      getHackathons();
    }, []);
   
    const hackathonAdd = async (hid) => {
        axios.get(`http://localhost:4000/api/v1/hackathons/${hid}`, {
            headers : {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppbmVzaG1vZGk5OUBnbWFpbC5jb20iLCJpYXQiOjE2MzM4MDM1Nzh9.DNygnVwiqmg0Ky3O0oSm3bp9UGqxda7n8fCglIbFG_U"
            }
        }).then(async (res) => {
            for (var i=0;i<res.data.data.participants.length;i++) {
                if (res.data.data.participants[i]._id === uid) {
                    toast.error("Already Registered"); 
                    return 0;
                }
            }
            await axios.post(`http://localhost:4000/api/v1/users/${uid}/hackathons/${hid}?participating=true`, {}, {
                headers : {
                    Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppbmVzaG1vZGk5OUBnbWFpbC5jb20iLCJpYXQiOjE2MzM4MDM1Nzh9.DNygnVwiqmg0Ky3O0oSm3bp9UGqxda7n8fCglIbFG_U"
                }
            }).then((res) => {
                toast.success("Registerd Successfully");
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
      <>
      <ToastContainer/>
        <Container className={classes.homePage}>
          <Grid container>
            {hackathons.map((hackathon) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Card className={classes.root}>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className={classes.imageDiv}>
                          <img
                              src={hackathon.image.url}
                              className={classes.storeImage}
                          />
                      </div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className={classes.cardContent}>
                          <CardContent>
                            <Typography component="h5" variant="h5">
                              {hackathon.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                              {hackathon.description}
                            </Typography>
                            <Typography>
                              Participants : {hackathon.participantCount}
                          </Typography>
                          <Typography>
                             Check More Details On <a href={hackathon.url}>{hackathon.url}</a>
                          </Typography>
                          <Typography>
                             Duration : {hackathon.duration}
                          </Typography>
                          <Typography>
                              Start Date : {hackathon.start_date.slice(0,10)}
                          </Typography>
                          <div className={classes.buttonDiv}>
                              <Button variant="contained" fullWidth color="primary" className={classes.registerButton} onClick={() => {
                                  hackathonAdd(hackathon._id)
                              }}>Register Now</Button>
                          </div>
                          </CardContent>
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  };
  
  export default Home;
  