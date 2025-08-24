import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config({path: "../../.env"});
const app: Express = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3030;

const MONGO_URL: string = process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017/pc-shop";
connectDB(MONGO_URL)

app.get("/", (req : Request, res : Response) => {
    res.send('HOME PAGE!')
})

app.get("/api/product", (req : Request, res : Response) => {
    res.send({
        ID: "00001",
        name: "GPU ASUS"
    })
})

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`)
})
