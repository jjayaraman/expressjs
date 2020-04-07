const express = require("express");
const app = express();

var swStats = require("swagger-stats");
var apiSpec = require("./swagger/swagger.json");

//const swaggerStatsOptions = { swaggerSpec: apiSpec, elasticsearch: "http://localhost:9200/" };
const swaggerStatsOptions = { elasticsearch: "http://localhost:9200/" };

app.use(swStats.getMiddleware(swaggerStatsOptions));

// Simple server
app.listen(3000, function() {
  console.log("Server started and listening on 3000 port...");
});

// Routes
app.get("/", function(req, res) {
  res.send("This is my home page..");
});

app.get("/1", function(req, res) {
  res.send("This is page 1 updated");
});

app.get("/2", function(req, res) {
  res.send("This is page 2");
});

app.post("/inventory", (req, res) => {
  const body = {
    id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    name: "Widget Adapter",
    releaseDate: {},
    manufacturer: {
      name: "ACME Corporation",
      homePage: "https://www.acme-corp.com",
      phone: "408-867-5309"
    }
  };
  res.send(body);
});

app.get("/inventory", (req, res) => {
  const result = [
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      name: "Widget Adapter",
      releaseDate: {},
      manufacturer: {
        name: "ACME Corporation",
        homePage: "https://www.acme-corp.com",
        phone: "408-867-5309"
      }
    }
  ];

  res.send(result);
});
