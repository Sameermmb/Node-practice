let express = require("express");
let checkTokens = require("./checkTokens");
let app = express();
app.use (express.json())

app.get("/" , (req, res) =>
{
    let obj = {
        data: [
            {
                name : "Sameer",
                rollno : "1223158"
            }
        ]
    }
    res.send({myData : obj.data[0].rollno})
}
)
app.get("/news" , checkTokens, (req, res)=>
{
    res.send("You are at news page")
}
)

app.post("/dataShow",(req,res)=>
{

    res.send({ bodyData : req.body,
        queryData : req.query
    });
}

)
app.listen(8000)