var connection = require('./connection.js');


function makeRequest(query,cb) {
    connection.query(query, function(err, rows, fields) {
        if (err){
            handleError(err);
        }
        else{
            cb(null, rows, fields);
        }
    });
}

function handleError(err){
    console.log(err);
}

module.exports = makeRequest;





/*var QuerySender = (function () {
    var instance;
 
    function createInstance() {
        connect(function(err) {
        if(err) {
            handleError(err);
            cb(1,null,null);
        }
        else{
            connection.query(query, function (err, rows, fields) {
                if (!err){
                    cb(null,rows, fields);
                }
                else {
                    handleError(err);
                }
            });
        }
    })
        var object = {


        };
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();*/
