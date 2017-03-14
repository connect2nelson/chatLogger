var restify = require('restify');

var fs = require('fs');
var path = ".\\msgLog.txt";

var count = 0

function respondCount( req, res, next) {
  res.send('Total msgs received : ' +  count );
  next();
}
function respond(req, res, next) {
  count++
  res.send('msg received : ' + req.params.info + ' Total msgs received : ' + count );
  next();
}

var server = restify.createServer();
server.use(restify.bodyParser({ mapParams: true }));
server.get('/msg/:info', respond);
server.get('/msg', respondCount);
server.head('/msg/:info', respond);

server.post('/msg/:info', function create(req, res, next) {
   //res.send(201, Math.random().toString(36).substr(3, 8));
   count++
   if ( req ){
       console.log ( ' Request body :' + req.body )
       fs.appendFile(path, req.body, function(error) {
            if (error) {
              console.error("write error:  " + error.message);
            } else {
              console.log("Successful Write to " + path);
            }
       });

  }
   res.send(201, 'Got the message' );
   next();
 });

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
