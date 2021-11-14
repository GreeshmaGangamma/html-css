const http = require("http");
const PORT = 8080;
const url = require('url');
const querystring = require('query-string');
const server = http.createServer(requsetHandler);

var employees = [{"name":"greeshma", "age":"26", "empid":"1","email":"greeshma@gmail.com"}];


function requsetHandler(req, res){
    const urlparse = url.parse(req.url, true);
   if(req.method == "GET"){
    if(urlparse.pathname === "/login"){
        var req_body = '';
        req.on('data', function (data) {
            req_body += data;
        });
        req.on('end', function () {
            var post_data = querystring.parse(req_body);
            var user_name = post_data["user_name"];
            var password = post_data["password"];
            if(user_name === 'admin@gmail.com' && password === 'admin123')
            {
                resp.writeHead(200, {'Content-Type':'text/html'});
                resp.end(login_success_page);
            }else{
                res.end("Invalid details")
            }
        });
        }else if(req.url === "/employee"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(employees))
       }
        else{
            res.end("NO GET API FOUND")
        }
   }else if(req.method=="POST"){
    if(urlparse.pathname === "/employee"){
        let completeBuffer = "";
        req.on("data", (bufferData)=>{
            completeBuffer+=bufferData;
        })
        req.on("end", ()=>{
            console.log("data", JSON.parse(completeBuffer.toString()));
            
            console.log("request has ended");
       
            employees.push(JSON.parse(completeBuffer.toString()));
            res.writeHead(200, {'Content-Type': 'application/json'});
                res.end("Added Succesfully");
            })
            
               
    }
            
   }else if(req.method =="PUT"){
    if(urlparse.pathname === "/employee"){
    req.on('data', data => {
        let completeBuffer = "";
        completeBuffer+=data;
        const search = urlparse.search;
        
       
        if (search) {
          const [, query] = urlparse.search.split('?');
          const empid = querystring.parse(query).empid;

          employees.map((i,index)=>{
            if(i.empid==empid){
              const jsondata = JSON.parse(completeBuffer);
              employees[index]=jsondata;
              res.writeHead(200, {'Content-Type': 'application/json'});
                res.end("Updated Succesfully");
            }
          })
        }
    })
        } else {
          const message = { message: 'no pathname!'};
          res.writeHead(400, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(message));
        }
      } 
      else if(req.method=="DELETE"){
    if(urlparse.pathname === "/employee"){
        const search = urlparse.search;
    if (search) {
      const [, query] = urlparse.search.split('?');
      const data = querystring.parse(query);
  
      employees = employees.filter(employees => employees.empid != data.empid);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end("Deleted Succesfully");

    }else {
        const message = { message: 'no query parameter!' };
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(message, null, 2));
      }

   }
}
}
server.listen(PORT);