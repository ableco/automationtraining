const express = require("express");
const app = express();
const path = require("path");

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname));

app.listen(app.get("port"), function() {
  console.log("The app is running at:" + app.get("port"));
});
