require('dotenv').config()

const express = require('express')
const app = express()

require('./configs/mongoose.config')
require('./configs/debugger.config')
require('./configs/middlewares.config')(app)
require('./configs/view-engine.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)

app.use('/api/index', require('./routes/index.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use("/api/profile", require("./routes/profile.routes"))
app.use("/api/travels", require('./routes/travel.routes'))
app.use('/api/files', require('./routes/files.routes'))


app.use((req, res) => { res.sendFile(__dirname + "/public/index.html"); });

module.exports = app