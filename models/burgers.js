let orm = require("../config/orm");

let burgers = {
    all: function(callback){
        orm.all("burgers", function(res){
            callback(res);
        })
    }
}

module.exports = burgers;