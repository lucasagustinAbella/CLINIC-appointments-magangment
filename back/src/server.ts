import express from "express";
import router from "./routes/router";
import cors from "cors";
import morgan from "morgan";


const server = express();

server.use(cors())
server.use(express.json())
server.use(morgan("dev"))


server.use(router);



export default server;