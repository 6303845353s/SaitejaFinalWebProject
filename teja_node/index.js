const http = require("http");
const fs = require("fs");
const path = require("path");
const {MongoClient} = require("mongodb");

// Port number that server listens to
const PORT = 3716;

const getMusicHitsData = async (client) =>{
    //Fetches records from given database
    const cursor = client.db("MusicHits_DB").collection("MusicHits_collection").find({});
    const results = await cursor.toArray();
    return JSON.stringify(results);
}

http.createServer(async (req,res)=>{
    if(req.url === "/api"){
        const URL = "mongodb+srv://teja:teja@cluster0.yvpg4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        // Creating a new client for connecting to database
        const client = new MongoClient(URL);
        try{
             //Connects to database
            await client.connect();
            console.log("Database is connected sucessfully") ;
            const musicHitsData = await getMusicHitsData(client);
            //Handling CORS issue
            res.setHeader("Access-Control-Allow-Origin","*");
            res.writeHead(200,{"content-type":"application/json"});
            console.log(musicHitsData);
            res.end(musicHitsData);
        }
        catch(err){
            console.log("Error in connecting database",err);
        }
        finally{
            //Closing connection to database
            await client.close();
            console.log("Database connection is closed");
        }
    }
    else if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
          (err, content) => {
            if (err) throw err;
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
          }
        );
      }
    else if (req.url.startsWith('/assets/')) {
        const assetPath = path.join(__dirname, 'public', req.url);
        fs.readFile(assetPath, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
          }
          const contentType = path.extname(assetPath) === '.png' ? 'image/png' : 'image/jpeg';
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        });
      }
      else {
        res.end("<h1> 404 nothing is here</h1>");
      }
}).listen(PORT,()=>console.log(`Server is running on ${PORT}`))