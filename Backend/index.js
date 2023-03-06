const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const books=require("./books")
dotenv.config();

const app=express();

const mongoose= require("mongoose");
mongoose.set('strictQuery',false);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:false
}));

app.get("/books",(req,res)=>{
    res.send(books);
})
//Routes
app.use("/user", require("./controllers/user"));
// app.use("/book", require("./controllers/books"));

const start=async()=>{
    try{
        const DB_CONNECTION=process.env.DB_CONNECTION;
        await mongoose.connect(DB_CONNECTION).then(
            ()=>{
                console.log("Connected to mongodb")
            },err=>{
                console.log(err);
            }
        );
        const PORT=process.env.PORT||5000;
        app.listen(PORT,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log(`Server is running on port ${PORT}`);
        }
    })
    }catch(err){
        console.log(err);
    }
    

}
start();
