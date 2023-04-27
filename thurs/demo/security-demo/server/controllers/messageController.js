//import bcrypt
const bcrypt = require('bcryptjs')
let chats = []

  //model of chats
  //append if pin exists
  // {
  //   message: ["hakuna matana",'hakuyta'],
  //   pin: 1234
  // },
  // {
  //   message: ['hello'],
  //   pin: 5678
  // }

module.exports = {
  createMessage : (req,res) => {
    //deconstruct the body
    const {pin,message} = req.body
    //look if pin already exist
    //if true, append
    //else create new obj
    for(let i =0; i < chats.length;i++){
      //compare a string with hash 
      const existing = bcrypt.compareSync(pin,chats[i].pinHash)
      if(existing){
        chats[i].message.push(message)
        let messageToReturn = {...chats[i]}
        delete messageToReturn.pinHash
        res.status(200).send(messageToReturn)
        return
      }

    }
    //encrypt pin before sending
    const salt = bcrypt.genSaltSync(10)
    const pinHash = bcrypt.hashSync(pin,salt)
    const newObj = {
      pinHash,
      message: [message]
    }
    chats.push(newObj)
    let messageToReturn = {...newObj}
    delete messageToReturn.pinHash
    console.log(chats)
    res.status(200).send(newObj)
  }
}