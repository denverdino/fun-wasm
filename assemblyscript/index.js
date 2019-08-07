const { fib } = require('./wasm');
var getRawBody = require('raw-body')
module.exports.handler = function (request, response, context) {    
    // get request body
    getRawBody(request, function (err, body) {
        response.setStatusCode(200);
        let strValue = request.queries.n
        let n = 10 // Default value
        if (strValue) {
		    n = parseInt(strValue)
		}
        result = fib(n)
        response.send(result.toString());
    });
};
