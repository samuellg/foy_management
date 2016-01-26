var connection = require('./connection.js');

function connect(cb) {
    if(!connection) return cb(1);
    if(connection.state == 'authenticated'){
        cb(null);
    }
    else{
        connection.connect(function(err) {
            if(err) handleError(err);
            else cb(null);
        });
    }
}

function makeRequest(query,cb) {
    connect(function(err) {
        if(err) {
            handleError(err);
            cb(1,null,null);
        }
        else{
            connection.query(query, function (err, rows, fields) {
                if (!err) cb(null,rows, fields);
                else handleError(err);
            });
        }
    })
}

function handleError(err){
    console.log(err);
}

module.exports = makeRequest;