let express = require("express");
let PORT = 3000;
let app = express()
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(express.static("public"))

var apiroute = require("./routes/apiroute")
var htmlroute = require("./routes/htmlroute")
app.use(apiroute)
app.use(htmlroute)

app.listen(PORT, function(){
    console.log("App running on port",PORT)
})
