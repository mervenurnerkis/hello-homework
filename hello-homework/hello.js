require("dotenv/config")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 5454
const app = express()

app.use(cors())
app.use(bodyParser.json())

const middleware = function (req, res, next){
    console.log("Post iseği için istek gönderildi")
    next()
}

const allMiddleware = function (req, res, next){
    console.log("Yeni bir istek geldi.")
    next()
}

app.use(allMiddleware)

app.get("/hello", function(req, res){
    res.json("Merhaba, GET isteği attınız")
})

app.post("/hello", middleware, function(req, res){
    res.json("Merhaba, POST isteği attınız")
})

app.put("/hello", function(req, res){
    res.json("Merhaba, PUT isteği attınız")
})

app.delete("/hello", function(req, res){
    res.json("Merhaba, DELETE isteği attınız")
})

app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT + "/hello");
  });