let express = require("express")

const {makeConnnection} = require('./dbConnection.js');
const { ObjectId } = require("mongodb");
let app = express();
app.use(express.json());

app.post("/student-data", async (req, res)=>
{
    let myDtb = await makeConnnection();
    let studentCollection = await myDtb.collection("SecondStudentCollection");


    let {sName, sAddress} = req.body;
    let obj ={
        sName: sName,
        sAddress : sAddress
    }

    let checkName = await studentCollection.findOne({sName:sName});

    if(checkName) {
        return res.send({sName, msg: "Already Exist"});
    }

    let insertRes = await studentCollection.insertOne(obj);
    res.send(insertRes)

})

app.get ("/get-data", async(req, res)=>
{
    let myDtb = await makeConnnection();
    let studentCollection = await myDtb.collection("SecondStudentCollection");

    let resData = await studentCollection.find().toArray();

    res.send(resData);

})

app.put ("/update-data/:id", async(req, res) =>
{
    let myDatab = await makeConnnection();

    let studentCollection = await myDatab.collection("SecondStudentCollection");

    let {id} = req.params;

    let {sName, sAddress} = req.body;

    let obj = {
        sName : sName,
        sAddress : sAddress
    }

    let updateRes = await studentCollection.updateOne({_id: new ObjectId(id)},
{$set: obj }
)

res.send(updateRes);
})





app.listen("8000");