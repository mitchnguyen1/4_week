const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())



//routes 
// app.get('/api/movies',(req,res)=> {
//     let allMovies = db
//     res.status(200).send(allMovies)
// })

const userController = require('./controllers/userController')
const {getAllMovies, createMovie, deleteMovie,updateMovie} = userController

app.get('/api/movies',getAllMovies)
app.post('/api/movies',createMovie)
app.delete('/api/movies/:id',deleteMovie)
app.put('/api/movies/:id',updateMovie)

app.listen(4004, () => console.log('Listening on port 4004'))