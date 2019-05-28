let connection = require("./connection");

let orm = {
    all: function (tableInput, callback){
        connection.query("SELECT * FROM "+tableInput+";", function(err, result){
            if(err) throw err;
            callback(result)
        })
    },
    update: function(tableInput, condition, callback){
        connection.query("UPDATE "+ tableInput + " SET eaten=true WHERE id ="+condition)
    }
}

module.exports = orm;