const express = require('express');
const mongoose = require("mongoose"); // Corrected import
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')
const passport = require('passport');


require('dotenv').config(); // Load environment variables

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies in POST requests
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: URL
    }),
    cookie: { 
        sameSite: 'strict', // or try 'lax' if you have issues
        secure: false       // Set to `true` if using HTTPS
        }  // For development purposes, you might want to set secure to true when deploying to production.  This will only work if your application is served over HTTPS.  This prevents the cookie from being sent over HTTP.  Also, make sure to set your domain correctly in your client-side code.  This is a basic setup.  You might want to consider using a more secure session management strategy for production.  For example, you could use a
}))



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error));



// IMport route
const eventRoutes = require('./routes/Event');
const bookRoutes = require('./routes/Booking');
const authRoutes = require('./routes/auth');


app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
     next()
    
 });
 
app.use(passport.initialize());
 app.use(passport.session());


app.use('/api/event', eventRoutes);
app.use('/api/bookings', bookRoutes);
app.use('/api/auth', authRoutes);



module.exports = app