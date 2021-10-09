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
  
    useEffect(() => {
      const getHackathons = async () => {
        await axios
          .get("http://localhost:4000/api/v1/hackathons", {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3R1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTYzMzc3MjYxMn0.mZwBehL3RmY72OlPHoMsf2pNlekHUuokbNjma5-fTvc",
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
  
    return (
      <>
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
                              <Button variant="contained" fullWidth color="primary" className={classes.registerButton}>Register Now</Button>
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
  