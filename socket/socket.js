// 引入需要的模块：http和socket.io
var http = require('http'), io = require('socket.io');
//创建server
var server = http.createServer(function(req, res){
    // Send HTML headers and message
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = true;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
    res.writeHead(200,headers);
    res.end('<h1>Hello Socket Lover!</h1>');
});
//端口8000
server.listen(8080);
//创建socket
var socket = io.listen(server);
//添加连接监听
socket.on('connection', function(client){
    console.log('------------------------连接成功')
    //连接成功则执行下面的监听
    client.on('setRoom',function(event){
        console.log('Received message from client!',event);
    });
    client.send('message')
    //断开连接callback
    client.on('disconnect',function(){
        console.log('------------------1')
        console.log('Server has disconnected');
    });
});
socket.send('这是一个消息')
