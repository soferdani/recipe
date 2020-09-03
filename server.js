const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')


app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


app.get('/recipes/:ingredient',function(req,res){
    let ingredient = req.params.ingredient //we good
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(err,data,urlibRes){
        res.send(JSON.parse(data))
        
    })

})



app.get('/sanity', function (req,res) {
    res.send("we gooooood..")
})

const port = 8080
app.listen(port,function(){
    console.log(`server is running on port ${port}`);
})