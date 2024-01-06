import express from 'express'
import mongoose from 'mongoose'
import Notifications from './models/notificationsModel.js'
import Locations from './models/locationsModel.js'
import Lists from './models/listsModel.js'
import Subscribers from './models/subscribersModel.js'
import Marketers from './models/marketersModel.js'
import Managers from './models/managersModel.js'

import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('CommuniTee Broadcast')
})

//NOTIFICATIONS
// get all notifications
app.get('/notifications', async(req, res) => {
    try {
        const notifications = await Notifications.find({});
        res.status(200).json(notifications);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get a notification by id
app.get('/notifications/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const notifications = await Notifications.findById(id);
        res.status(200).json(notifications);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a notification
app.post('/notifications', async(req, res) => {
    try {
        const notifications = await Notifications.create(req.body)
        res.status(200).json(notifications);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a notification
app.put('/notifications/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const notifications = await Notifications.findByIdAndUpdate(id, req.body);
        if(!notifications){
            return res.status(404).json({message: "Notification not found for ${id}"})
        }
        const updatedNotifications = await Notifications.findById(id);
        res.status(200).json(updatedNotifications);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a notification
app.delete('/notifications/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const notifications = await Notifications.findByIdAndDelete(id);
        if(!notifications){
            return res.status(404).json({message: "Notification not found for ${id}"})
        }
        res.status(200).json(notifications);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// LOCATIONS
// get all locations
app.get('/locations', async(req, res) => {
    try {
        const locations = await Locations.find({});
        res.status(200).json(locations);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get a location by id
app.get('/locations/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const locations = await Locations.findById(id);
        res.status(200).json(locations);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a location
app.post('/locations', async(req, res) => {
    try {
        const locations = await Locations.create(req.body)
        res.status(200).json(locations);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a location
app.put('/locations/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const locations = await Locations.findByIdAndUpdate(id, req.body);
        if(!locations){
            return res.status(404).json({message: "Location not found for ${id}"})
        }
        const updatedLocations = await Locations.findById(id);
        res.status(200).json(updatedLocations);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a location
app.delete('/locations/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const locations = await Locations.findByIdAndDelete(id);
        if(!locations){
            return res.status(404).json({message: "Location not found for ${id}"})
        }
        res.status(200).json(locations);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// LISTS
// get all lists
app.get('/lists', async(req, res) => {
    try {
        const lists = await Lists.find({});
        res.status(200).json(lists);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get a list by id
app.get('/lists/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const lists = await Lists.findById(id);
        res.status(200).json(lists);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a list
app.post('/lists', async(req, res) => {
    try {
        const lists = await Lists.create(req.body)
        res.status(200).json(lists);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a list
app.put('/lists/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const lists = await Lists.findByIdAndUpdate(id, req.body);
        if(!lists){
            return res.status(404).json({message: "List not found for ${id}"})
        }
        const updatedLists = await Lists.findById(id);
        res.status(200).json(updatedLists);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a list
app.delete('/lists/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const lists = await Lists.findByIdAndDelete(id);
        if(!lists){
            return res.status(404).json({message: "List not found for ${id}"})
        }
        res.status(200).json(lists);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// SUBSCRIBERS
// get all subscribers
app.get('/subscribers', async(req, res) => {
    try {
        const subscribers = await Subscribers.find({});
        res.status(200).json(subscribers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get a subscriber by id
app.get('/subscribers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const subscribers = await Subscribers.findById(id);
        res.status(200).json(subscribers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a subscriber
app.post('/subscribers', async(req, res) => {
    try {
        const subscribers = await Subscribers.create(req.body)
        res.status(200).json(subscribers);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a subscriber
app.put('/subscribers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const subscribers = await Subscribers.findByIdAndUpdate(id, req.body);
        if(!subscribers){
            return res.status(404).json({message: "Subscriber not found for ${id}"})
        }
        const updatedSubscribers = await Subscribers.findById(id);
        res.status(200).json(updatedSubscribers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a subscriber
app.delete('/subscribers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const subscribers = await Subscribers.findByIdAndDelete(id);
        if(!subscribers){
            return res.status(404).json({message: "Subscriber not found for ${id}"})
        }
        res.status(200).json(subscribers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// MARKETERS
// get all marketers
app.get('/marketers', async(req, res) => {
    try {
        const marketers = await Marketers.find({});
        res.status(200).json(marketers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get a marketer by id
app.get('/marketers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const marketers = await Marketers.findById(id);
        res.status(200).json(marketers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a marketer
app.post('/marketers', async(req, res) => {
    try {
        const marketers = await Marketers.create(req.body)
        res.status(200).json(marketers);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a marketer
app.put('/marketers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const marketers = await Marketers.findByIdAndUpdate(id, req.body);
        if(!marketers){
            return res.status(404).json({message: "Marketer not found for ${id}"})
        }
        const updatedMarketers = await Marketers.findById(id);
        res.status(200).json(updatedMarketers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a marketer
app.delete('/marketers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const marketers = await Marketers.findByIdAndDelete(id);
        if(!marketers){
            return res.status(404).json({message: "Marketer not found for ${id}"})
        }
        res.status(200).json(marketers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// MANAGERS
// get all managers
app.get('/managers', async(req, res) => {
    try {
        const managers = await Managers.find({});
        res.status(200).json(managers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get a manager by id
app.get('/managers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const managers = await Managers.findById(id);
        res.status(200).json(managers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a manager
app.post('/managers', async(req, res) => {
    try {
        const managers = await Managers.create(req.body)
        res.status(200).json(managers);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a manager
app.put('/managers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const managers = await Managers.findByIdAndUpdate(id, req.body);
        if(!managers){
            return res.status(404).json({message: "Manager not found for ${id}"})
        }
        const updatedManagers = await Managers.findById(id);
        res.status(200).json(updatedManagers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a manager
app.delete('/managers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const managers = await Managers.findByIdAndDelete(id);
        if(!managers){
            return res.status(404).json({message: "Manager not found for ${id}"})
        }
        res.status(200).json(managers);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})







mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://1stchoicecyber:uQG3s71fwDHsr3B6@broadcast.lr2blcg.mongodb.net/Communitee?retryWrites=true&w=majority')
.then(() => {
    console.log('MongoDB Connected')
    app.listen(3030, () => {
        console.log('Server is running on port 3030')
      });
}).catch((err) => {
    console.log(err)
})
