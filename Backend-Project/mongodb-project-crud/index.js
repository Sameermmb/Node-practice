let express = require("express");
const { dbConnection } = require("./dbConnection.js");

let app = express();

app.use(express.json())

app.post("/" , async(req, res) =>
{
    let myDB = await dbConnection();

    let studentCollection = myDB.collection("student");

    let obj = {
        sName : req.body.sName,
        sEmail : req.body.sEmail
    }

    let insertRes = await studentCollection.insertOne(obj);

    res.send(insertRes);

})



app.get("/get-API", async(req, res) =>
{

    let myDB = await dbConnection();

    let studentCollection = myDB.collection("student");

    let data =await studentCollection.find().toArray();

    res.send(data);

})

app.listen("8000")