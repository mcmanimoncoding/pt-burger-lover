let connection = require("./connection");

let orm = {
    all: function (input, callback){
        connection.query("SELECT * FROM "+input+";", function(err, result){
            if(err) throw err;
            callback(result)
        })
    },
    update: function(input, condition, callback){
        connection.query("UPDATE "+ input + " SET eaten=true WHERE id ="+condition+";", function(err, res){
            if(err) throw err;
            callback(res);
        })
    },

    create: function(input, value, callback){
        connection.query("INSERT INTO "+input+" (burger_name) VALUES('"+value+"');", function(err,res){
            if (err) throw err;
            callback(res);
        })
    }
}

module.exports = orm;