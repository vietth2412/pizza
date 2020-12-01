const functions = require('firebase-functions');
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();

// static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));
app.use('/images',express.static(__dirname+'public/images'));
app.use('/fonts',express.static(__dirname+'public/fonts'));

// 
app.set('view engine','ejs')

// navigatetion
app.get('',(req,res)=>{
    res.render('index')
})
exports.pizza   = functions.https.onRequest(app);