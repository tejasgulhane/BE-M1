const fs = require('fs');

const reqhandler = (res,req) =>{
    const url = req.url;
    const method = req.method;
  
    if (url === '/') {
      console.log("inside");
  
      fs.readFile('message.txt', (err, data) => {
          if (err) {
              console.log(err)
          }
      
          console.log( data )
          res.write('<html>');
          res.write(`<h1>${data}</h1>`);
          res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
          res.write('</html>');
          return res.end();
      })
    }
    if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
      });
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    }
}

module.exports = reqhandler;