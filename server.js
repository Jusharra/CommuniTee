require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const notificationRoute = require('./routes/notificationRoute');
const locationRoute = require('./routes/locationRoute');
const listRoute = require('./routes/listRoute');
const subscriberRoute = require('./routes/subscriberRoute');
const marketerRoute = require('./routes/marketerRoute');
const managerRoute = require('./routes/managerRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
var cors = require('cors')

const app = express()



const PORT = process.env.PORT || 3030
const MONGO_CONN = process.env.MONGO_CONN
const FRONTEND_URL = process.env.FRONTEND_URL

var corsOptions = {
    origin: FRONTEND_URL, // enter the url of your frontend app
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/notification', notificationRoute);
app.use('/api/location', locationRoute);
app.use('/api/list', listRoute);
app.use('/api/subscriber', subscriberRoute);
app.use('/api/marketer', marketerRoute);
app.use('/api/manager', managerRoute);

app.get('/', (req, res) => {
    res.send('CommuniTee Broadcast')
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_CONN)
.then(() => {
    console.log('MongoDB Connected')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      });
}).catch((err) => {
    console.log(err)
})
