import express from "express";
import bodyParser from "body-parser";
import pathRouter from "./api/paths.js";

const app = express();
const PORT = 4000;
const HOST = "127.0.0.1";

app.use(bodyParser.json());

app.use("/api", pathRouter);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});