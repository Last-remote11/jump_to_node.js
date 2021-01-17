// 서버를 만드는 가장 기본적인 방법

const http = require('http');

const server = http.createServer((request, response) => {
    console.log('header', request.headers);
    console.log('method', request.method)
    console.log('url', request.url)

    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);

// 하지만 어차피 express같은 것을 쓸 것임