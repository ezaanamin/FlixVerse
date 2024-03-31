import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import mongoose from "mongoose"
import  bcrypt from "bcrypt"
dotenv.config();
const app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/upload',express.static('upload'))


app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(cors())
app.get("/",(req,res)=>{
  res.json("hiii")
})



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


// transaction.create(data1)
// Orders.create(data1)

const PORT = process.env.PORT || 9000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    
  })
  .then(() => {
    // console.log(currentYear)
    // if( currentYear==2023)
    // {

    //   DataBaseSales(currentYear)

    // }


// Orders.create(data1)
// transaction.create(data2)

   
    
  
   
    
   console.log("Connected")
   app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

})
  .catch((error) => console.log(`${error} did not connect`));


 