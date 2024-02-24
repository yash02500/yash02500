const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Server</title></head>');
    res.write('<body><center><h1>My Name Is Yash Varma</h1></center></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);