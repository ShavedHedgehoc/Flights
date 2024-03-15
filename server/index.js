const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')
const driverRouter = require('./routes/driver.routes')
const plantRouter = require('./routes/plant.routes')
const pointRouter = require('./routes/point.routes')
const flightRouter = require('./routes/flight.routes')
const stateRouter = require('./routes/state.router')
const cors = require('cors')
const app = express()
const PORT = config.get('serverPort')

app.use(express.json(), cors())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/drivers', driverRouter)
app.use('/api/plants', plantRouter)
app.use('/api/points', pointRouter)
app.use('/api/flights', flightRouter)
app.use('/api/states', stateRouter) //remove

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'))
        app.listen(PORT, () => {
            console.log('Server started on port: ', PORT)
        })
    } catch (error) {
        console.log('Connection failed!')
    }
}
start()
