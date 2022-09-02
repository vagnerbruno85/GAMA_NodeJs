const http = require('http');
const url = require('url');
const queryString = require('query-string');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    //pegar a pergunta na url
    const params = queryString.parse(url.parse(req.url,true).search);

    //verificar a pergunta e escolher uma resposta
    let resposta;
    if(params.pergunta == 'melhor-filme'){
        resposta = 'star wars';
    } 
    else if (params.pergunta == 'melhor-tecnologia-backend'){
        resposta = 'nodeJs';
       
    }else{
        resposta = 'não sei! desculpe :(';    
    }

    res.stausCode = 200;
    res.setHeader('Content-Type', 'text/plain');
   // res.end('Hello Word Leia');
    res.end(resposta);
});

server.listen(port, host,() =>{
    console.log(`server running at http://${host}:${port}/`);
});