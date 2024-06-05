import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Welcome to home page");
});

app.post("/posting", (req, res) => {
  res.end("This is posting page");
});

//---------- HANDLE QUERY PARAMS -------------
//local

app.get("/fitness", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);

  const { type } = queryParams;
  //http://localhost:8080/fitness/?type=gym
  if (type === "gym") {
    res.end("Welcome to Gym Page");
  } else {
    res.end(`fitness :::: ${queryParams.type}`);
  }
});

// ----------------- HANDLE PARAMS ----------------

app.get("/sports/:id", (req, res) => {
  const id = req.params["id"];

  res.end("Product ::::: " + id);
});

//-------------- HANDLE THE BODY ------------------

app.post("/register/", (req, res) => {
  const body = req.body;

  const { name } = body;

  res.end("Registered Succesfully ::::: welcome " + name);
});

app.listen(8080, () => {
  console.log("server running at port 8080");
});
