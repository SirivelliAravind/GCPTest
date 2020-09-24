


const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.get("/", (request, response) => {
    response.status(200);
    response.send({
        status: 1,
        message:"Hey,Nice to see you"
    });
});
app.get("/getData", (request, response) => {
    var data = request.query.name;
    response.status(200);
    response.send({
        status: 1,
        message : "Hello" + data + "this is Aravind Sirivelli"
    });
});
var port = process.env.PORT || 4000;
app.listen(port, () => 'Server is running on port' + port);