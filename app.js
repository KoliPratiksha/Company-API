require('dotenv/config')
const mongoose = require('mongoose')
const express = require('express')
const companyRoute = require('./route/companyRoute')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use('/api/company',companyRoute)


// default route
app.get('/',(req,res)=>{
      res.send("Home");
})

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})
async function main () {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log("error");
    }
}
main()