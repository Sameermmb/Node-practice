let express = require("express")

let app = express();
let EnquiryModel = require('./enquiryModel')

let mongoose = require("mongoose")
app.use(express.json());

require ('dotenv').config();

app.post("/Post-API",async(req, res)=>
{
    let {name, email, phoneNo} = req.body;

    let obj = {
        name : name,
        phoneNo : phoneNo,
        email : email,
        msg : "Data saved"
    }

    let postedData =await new EnquiryModel({
        name : name ,
        email : email,
        phoneNo : phoneNo
    })

    // postedData.save()
    // .then(()=>{
    //     res.send(obj);
    // })
    // .catch((err)=>
    // {
    //     res.send("There is error in your code ");
    // })
    let postedDataa = await postedData.save();
    res.send(obj);
});

app.get("/GET-API", async (req,res) =>{

    let finalData = await EnquiryModel.find();

    res.send(finalData);

})

app.delete("/DELETE-API/:id", async (req, res)=>{

    let {id} = req.params;
    let finalData = await EnquiryModel.deleteOne({_id: id});

    res.send("data deleted");
})


async function start (){
    await mongoose.connect(process.env.DBURL); 
app.listen(process.env.PORT);
}

start();