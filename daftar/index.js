//tampilkan semua login
app.get('/api/login',(req, res) => {
    let sql = "SELECT * FROM login";
    let query = conn.query(sql, (err,results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
     });
});

//tampilkan data login berdasarkan id
app.get('/api/login/:id',(req, res) => {
    let sql = "SELECT * FROM login WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//tampilkan data login baru
app.post('/api/login/id',(req, res) => {
    let data = {email: req.body.email, password: req.body.password};
    let sql = "INSERT INTO login SET?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
 });

 //Edit data login berdasarkan id
 app.put('/api/login/:id',(req, res) => {
     let sql = "UPDATE login SET email='"+req.body.email+"', password='"+req.body.password+"' WHERE id="+req.params.id;
     let query = conn.query(sql, (err, results) => {
         if(err) throw err;
         res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
     });
 });

 //DELETE data login berdasarkan id
 app.delete('/api/login/:id',(req, res) => {
    let.sql = "DELETE FROM login WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
 });
});