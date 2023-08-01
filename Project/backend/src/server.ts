import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/user_datas",(req, res) => {
    res.send("hello");
})

const port = 5000;
app.listen(port, () => {
    console.log("Wesite http://localhost:" +port);
})
