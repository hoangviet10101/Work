import express from "express";
import cors from "cors";
import { sample_user_data } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/user_datas",(req, res) => {
    res.send(sample_user_data);
})

app.get("/api/user_datas/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const user_datas = sample_user_data.filter(userData => userData.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(user_datas);
})

const port = 5000;
app.listen(port, () => {
    console.log("Wesite http://localhost:" +port);
})
