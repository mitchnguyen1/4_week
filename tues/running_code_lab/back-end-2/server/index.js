const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const controller = require('./controller.js')
let {getHouses,createHouses,updateHouses,deleteHouses} = controller

//requests
app.get('/api/houses',getHouses)
app.post('/api/houses',createHouses)
app.put('/api/houses/:id',updateHouses)
app.delete('/api/houses/:id',deleteHouses)



app.listen('4004',console.log("running on 4004"))