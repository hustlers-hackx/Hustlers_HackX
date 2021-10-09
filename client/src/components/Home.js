import {
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  useTheme
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    homePage : {
        marginTop : "100px"
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

const Home = () => {
  const classes = useStyles();
  const [hackathons, setHackathons] = useState();

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
            console.log(hackathons);
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
              <Grid item lg={12}>
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                      <IconButton aria-label="previous">
                        
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                      </IconButton>
                      <IconButton aria-label="next">
                        
                      </IconButton>
                    </div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Divider />
      </Container>
    </>
  );
};

export default Home;
