const express = require("express");
const items = require ("./Data/items");;
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes");
const itemsRoutes= require("./routes/itemsRoutes")
const { notFound, errorHandler } = require("./middelwares/errorMiddelwares");
const path = require("path");



const app = express()
dotenv.config();


connectDB();
 app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
}))




app.use('/api/items',itemsRoutes)
app.use('/api/users',userRoutes)

// ......deployment......

__dirname =path.resolve();
if(process.env.NODE_ENV === 'production'){

app.use(express.static(path.join(__dirname,'/client/build')))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

}else{
    app.get('/',(req,res)=>{
        res.send('api is runing succsesfully')
    })
}

// ......deployment......


app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server runing on ${PORT}`);
})

 