const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

//load env vars
dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

const app = express();

// enable CORS
app.use(cors());

//body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

//sanitize data
app.use(mongoSanitize());

//set security header
app.use(helmet());

//prevent XSS attacks
app.use(xss());

//prevent http param pollutions
app.use(hpp());

//Rate Limiting
const limiter = rateLimit({
    windowsMs: 10*60*1000, //10 mins
    max: 1
});
app.use(limiter);

//route files
const hospitals = require('./routes/hospitals');
const appointments = require('./routes/appointments');
const auth = require('./routes/auth');

//mount routers
app.use('/api/v1/hospitals', hospitals);
app.use('/api/v1/appointments', appointments);
app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 5000 ;

const server = app.listen(PORT, console.log('server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log('Error: '+err.message);
    server.close(()=>process.exit(1));
})