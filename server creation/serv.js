var io = require('http')
var fs = require('fs')

io.createServer(function(req,res){
    fs.readFile("sample.html",function(err,data){
 
   
   res.writeHead(200,{'Content-Type':'text/html'})
   res.write(data)
   res.end() })


}).listen(6800)

