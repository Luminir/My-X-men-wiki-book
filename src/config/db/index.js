const mongoose = require('mongoose')


async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Xmen'); // auto create a collection called "courses", u just need to create a database
        console.log("Connect succesfully")
    }catch(error){
        console.log("Connect Failed")
    }
}

module.exports = { connect };