const db = require('../db.json')
let id = db.length

//exporting 
module.exports = {
    getAllMovies : (req,res)=> {
        let allMovies = db
        res.status(200).send(allMovies)
    },
    createMovie : (req,res) => {
        id++
        let movie = {...req.body, id: id}
        db.push(movie)
        res.status(200).send(db)
    },
    deleteMovie :  (req,res) => {
        const {id} = req.params
        for(let i = 0; i<db.length;i++){
            if(db[i].id === +id){
                db.splice(i,1)
            }
        }
        res.status(200).send(db)
    },
    updateMovie : (req,res) => {
        const {type} = req.body
        const {id} = req.params
        for(let i = 0; i < db.length; i++){
            if(db[i].id === +id){
                if(type === 'plus'){
                    db[i].rating += 1;
                }
                else{
                    db[i].rating -= 1
                }
            }
        }
        res.status(200).send(db)
    }
}