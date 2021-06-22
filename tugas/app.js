//use path module
const path = require('path');

//use express module
const express = require('express');

//use hbs view engine
const hbs = require('hbs');

//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();

//set views file
app.set('views',path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file
app.use(express.static('public'));

//route untuk halaman home
app.get('/',(req,res) => {
    //render file index.hbs
        res.render('index',{
            name : "Alisa"
        });
});
//route untuk menampilkan form 
app.get('/post',(req, res) => {
    //render file index.hbs
    res.render('form'); 
});

//route untuk submit form
app.post('/post',(req, res) => {
    //reder file form.hbs
    res.render('index', {
        //ambil value dari textname
        name : req.body.textname,
        textnim : req.body.textnim,
        textpro : req.body.textpro,
        ttl : req.body.ttl,
        minat : req.body.minat,
        alamat : req.body.alamat,
        tl : req.body.tl,
        ipk : req.body.ipk,
        pr : req.body.pr,
        jks : req.body.jks,
        almte : req.body.almte,
        nka : req.body.nka,
        pks : req.body.pks,
        ls : req.body.ls,
        wpd : req.body.wpd
    });
});
app.listen(3000, () => {
    console.log('Server is running at port 3000')
});