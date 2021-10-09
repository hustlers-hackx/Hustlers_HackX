const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const authRouter = require('./routes/auth.router');
const hackathonRouter = require('./routes/hackathon.router');

const port = process.env.PORT || 5000
const mongo_url = process.env.MONGO_URL
const frontendURL = process.env.FRONTEND_URI

const app = express();

mongoose.connect(mongo_url,{useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({
    origin : frontendURL
}))

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/hackathons',hackathonRouter)

app.listen(port, ()=>{
    console.log(`Server Running on ${port}`)
});