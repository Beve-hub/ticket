const Router = require('express');
const Booking = require('../models/Booking');
const Event = require('../models/CreateEvent');
const verify = require('./verifyToken');

const router = Router(); 

router.use((req,res,next) => { 
    if (req.session.user){
    next()}
    else{
        res.status(401).json({message: 'Unauthorized'})
    }
});
router.post('/', verify ,async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        const {book} = booking;
        if (book) {
            const {item} = booking
            item.push(booking);
            req.session.book.item = item;
        }
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

{/*
router.post('/', async (req, res) => {
    try{
       const {eventId} = req.body; // Extract the event ID from the request body
       const  userId = req.user._id; // Assuming authenticated user's ID is in req.user\

       // check if the event exists
       const event = await Event.findById(eventId);
       if(!event){
           return res.status(404).json({error: 'Event not found'});
       }

       //create a new booking fr this event and use
       const booking = new Booking({
        event: eventId,
        user: userId,
        paymentStatus: 'pending'
       });

       await booking.save();
       res.status(201).json({ message: 'Booking created successfully', booking});
    }catch(error){
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
})
*/}
router.get('/:item', async (req, res) => {
    try{
        const userId = req.user._id //Get the authenticated user's ID

        // Find all the bookings for this user
        const bookings = await Booking.find({user: userId}).populate('event', 'title date price'); // Populate event details if needed

        res.json({bookings});
    }catch(error){
        res.status(500).json({message: 'Error retriving bookings', error: error})
    }
})
module.exports = router;