const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;


app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allowed-Origin','*');
    res.header('Access-Control-Allowed-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allowed-Headers','Content-Type');
    next();
});

//THE ACTUAL  ENDPIONT

//GET
app.get('/date', function(request, response){
    let dateproof = new Date().toString()
    //const options = {mont: '2-digit', day: '2-digit', year: 'numeric' };
    //dateproof.toLocaleDateString('es-MX', options)
    response.send(dateproof)
});

app.get('/Full-name',function(req,res){
     res.send('Jose Andres Morales Reyes')
});

app.get('/City-live',function(req,res){
    res.send('San Pedro Garza Garcia ')
});

app.get('/School',function(req,res){
    res.send('Universidad Tecnológica de Santa Catarina')
});

//POST

app.post('/sum',function(req, res){
    let nom = req.body
    let sum = nom.num1 + nom.num2 + nom.num3
    
    sum = sum.toString()
    console.log(sum)
    res.send('' + sum)
});

app.post('/mult',function(req, res){
    let nom = req.body
    let mult = nom.num1 * nom.num2 * nom.num3
    
    mult = mult.toString()
    console.log(mult)
    res.send('' + mult)
});

app.post ('/square',function(req, res){
    let nom = req.body
    let area = nom.num1 * nom.num2

    console.log(area)
    res.send('The Area of ​​a square is:'+area)

});

app.post ('/triangle',function(req, res){
    let nom = req.body
    let area = nom.num1 * nom.num2 / 2

    console.log(area)
    res.send('The area of ​​a triangle is::'+area)

});

app.listen(port,function(){
    console.log('MY APP IS RUNNUNG AT THE PORT' + port);
})