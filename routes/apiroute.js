var router = require("express").Router();
var db = require("../db/db.json")
var fs = require("fs")

router.get("/api/notes", function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
    console.log("get route",db)
    res.json(db)
})

router.post("/api/notes", function(req,res){

    var newData = {
        id: Math.floor(Math.random()*100),
        title: req.body.title,
        text: req.body.text,

    }
    db.push(newData)
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(){
        if (err) throw err;
    })
    console.log("post route",db)
    res.json(db)
})

router.delete("/api/notes/:id", function(req,res){
    var tempData = []
    for(let i=0;i< db.length;i++){
    if(db[i].id != req.params.id){
        tempData.push(db[i])
    }
    }
    console.log("temp",tempData,req.params.id)
    db = tempData
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(){
        if (err) throw err;
    })
    console.log("delete route",db)
    res.json(db)
})


module.exports = router;
