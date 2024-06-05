import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Welcome to home page");
});

app.post("/posting", (req, res) => {
  res.end("This is posting page");
});

app.listen(8080, () => {
  console.log("server running at port 8080");
});

//---------- HANDLE QUERY PARAMS -------------

app.get("/fitness", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);

  const { type } = queryParams;

  if (type === "gym") {
    res.end("Welcome to Gym Page");
  } else {
    res.end(`fitness :::: ${queryParams.type}`);
  }
});
