let http = require("http")

    let server = http.createServer((req, res) =>
        {

            if(req.url == ("/"))
            {
                 console.log("Welcome")
            }
           

            if(req.url == ("/about"))
            {
                let obj = {
                data : [
                    {
                        name : "sameer",
                        classRollNo : "1223158"
                    },
                    {
                        Address : "YNR",
                        msg : "Hello Everyone"
                    }
                ]
                }
                 res.end(JSON.stringify(obj))
        
            }
            
            if(req.url == ("/news"))
            {
                let obj = {
                    data : [
                        {
                            title : "Node ",
                            res : "Api call successful"
                        }
                    ]
                }
                res.end(JSON.stringify(obj))
        
            }

        }
    )
    server.listen("8000")