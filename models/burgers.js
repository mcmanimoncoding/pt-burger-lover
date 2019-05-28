let orm = require("../config/orm");

let burgers = {
    all: function(callback){
        orm.all("burgers", function(res){
            callback(res);
        })
    },

    update: function(id, callback){
        orm.update("burgers", id, callback);
    },

    create: function(name, callback){
        orm.create("burgers", name, callback);
    }
}

module.exports = burgers;