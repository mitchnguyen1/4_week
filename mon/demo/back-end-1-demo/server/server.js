//imports and packages needed to create server
const express = require('express')
const cors = require('cors')

//initializing express
const app = express()


//middle ware to excute endpoints
app.use(express.json())
app.use(cors())

//fake database
const inventory = [
    'greeting card','table','chair','milk','boat','cookies','cheese','shampoo','conditioner','face wash'
]

//endpoints
app.get('/api/inventory',(req,res)=>{
    //query param for ?item=${var}
    if(req.query.item){
        const filtered = inventory.filter((invItem) => invItem.toLowerCase().includes(req.query.item))
        res.status(200).send(filtered)
    }else{
        res.status(200).send(inventory)
    }
})

//request param
app.get(`/api/inventory/:id`,(req,res)=>{
    res.status(200).send(inventory[req.params.id])
})


app.listen(5050, () => console.log("server is running"))