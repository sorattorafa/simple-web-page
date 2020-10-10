module.exports = function(app, connection) {  
 
    app.get("/joke", function(req, res){
        const joke = "What do you call a dog that does magic tricks? A labracadabrador.";
        res.send(joke);
       });   
       
      
       app.get("/random_num", function(req, res){
        const num = Math.floor((Math.random() * 10) + 1);
        res.send("Your lucky number is " + num);
       });  
       
       /* 
      
      
      var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog2@gmail.com")';
           
      connection.query(q, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
      }); 
      
       app.get("/", function(req, res){
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
          if (error) throw error;
          console.log('The solution is: ', results[0].solution); 
          var msg = "1 + 1 É  " + results[0].solution + " users";
          res.send(msg);
        });
      }); 
      
      var person = {
        email: faker.internet.email(),
        created_at: faker.date.past()
      };
      
      var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
      if (err) throw err;
      console.log(result);
      }); 
      */ 
      
       
      
      app.get("/users", function(req, res){
        // Find count of users in DB
        const q = "SELECT * FROM users";
        connection.query(q, function(err, results){
            if(err) throw err; 
            //const  count = results[0].count;  
            //console.log(count); 
      //      res.send({results}); 
            res.render("home"); 
            console.log(results);
        });
      });   
      
      
      app.get("/", function(req, res){
        const q = 'SELECT COUNT(*) as count FROM users';
        connection.query(q, function (error, results) {
        if (error) throw error;
        const msg = "We have " + results[0].count + " users"; 
        const count = results[0].count; 
        res.render('home');
        });
       }); 
      
      
      app.post('/register', function(req,res){
        const person = {email: req.body.email};
        connection.query('INSERT INTO users SET ?', person, function(err, result) {
        console.log(err);
        console.log(result);
        res.redirect("/");
        });
       }); 
}