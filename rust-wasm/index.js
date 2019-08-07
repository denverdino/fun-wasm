const wasm = require("./pkg/rust_wasm");
var getRawBody = require('raw-body')
module.exports.handler = function (request, response, context) {    
    // get request body
    getRawBody(request, function (err, body) {
        var respBody = {
            headers: request.headers,
            url: request.url,
            path: request.path,
            queries: request.queries,
            method: request.method,
            clientIP: request.clientIP,
            body: body.toString()
        };
        response.setStatusCode(200);
        //response.setHeader('content-type', 'application/json');
        //response.send(JSON.stringify(respBody, null, 4));
        response.send(wasm.hello_world());
    });
};