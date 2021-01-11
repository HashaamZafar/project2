const mongo = require ('./db'); 
// const {insertUser}=require ('./db'); 
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser= require('body-parser');
const app = express()
const port = 5000



// Static Files
app.use(express.static("views"))
// Example for other folders - not required
//app.use('/css', express.static(__dirname + 'public/css'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




// Set Templating Engine
app.use(expressLayouts)
//app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    const checkdate=Date()
    res.render('index', { checkdate: checkdate})
})
app.get('', (req, res) => {
    const dateset=Date()
    res.render('layout', { checkdate: checkdate})
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/home', async(req, res) => {
    var Name = req.body.name;
    var Gender= req.body.gender;
    await mongo.insertUser(Name,Gender);
    console.log(req.body.name,req.body.gender);
    res.render('user', {data: req.body});
})

app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/user', (req, res) => {
    res.render('user', { title: 'Users'})
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))