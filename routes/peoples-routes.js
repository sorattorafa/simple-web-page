//const peopleController = require('../controllers/people-controller');

module.exports = function(app, connection) {  
    //const PeopleController = new peopleController(connection);  

    app.get("/peoples", function(req, res){
      const q = " SELECT DATE_FORMAT(birthdt, 'Was born on a %W') FROM people;";
      connection.query(q, function(err, results){
          if(err) throw err; 
          //const  count = results[0].count;  
          //console.log(count); 
            res.send({results});
    //      res.render("home"); 
      });
    });     

}