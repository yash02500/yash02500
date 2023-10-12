const http=require('http');  //import http module

const server=http.createServer((req,res)=>{   // creating server code with callback function, request and response 
    console.log(req.url, req.method, req.headers);  // printing request= url, method, headers in the console
    const url=req.url;

    if(url==="/home"){     // checking the input url matches to response url which have to send 
        res.write('<html>');  // sending response in HTML format to client
        res.write('<head><title>My 2nd Server</title></head>');
        res.write('<body><center><h1>Welcome home</h1></center></body>');
        res.write('</html>');
        res.end();
    }

    else if(url==="/about"){   // checking the input url matches to response url which have to send 
        res.write('<html>');    // sending response in HTML format to client
        res.write('<head><title>My 2nd Server</title></head>');
        res.write('<body><center><h1>Welcome to About Us page</h1></center></body>');
        res.write('</html>');
        res.end();
    }

    else if(url==="/node"){   // checking the input url matches to response url which have to send 
        res.write('<html>');    // sending response in HTML format to client
        res.write('<head><title>My 2nd Server</title></head>');
        res.write('<body><center><h1>Welcome to my Node Js project</h1></center></body>');
        res.write('</html>');
        res.end();
    }

    else{        // default response send  
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');     // sending response in HTML format to client
    res.write('<head><title>My 2nd Server</title></head>');
    res.write('<body><center><h1>My Name Is Yash Varma</h1></center></body>');
    res.write('</html>');
    res.end();   // end the response sending
    }
});

server.listen(4000);   // Server Listenes for port
