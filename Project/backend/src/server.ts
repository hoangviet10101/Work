import express, { json } from "express";
import cors from "cors";
import { sample_user_data, sample_users_login } from "./data";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json())
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

app.get("/api/user_datas/:userID", (req, res) => {
    const userID = req.params.userID;
    const user_data = sample_user_data.find(userData => userData.id == userID);
    res.send(user_data);
})

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users_login.find(user => user.email === email && user.password === password)

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("Username or password is not correct")
    }
})

app.post("/api/users/register", (req, res) => {
    const {name, email, password} = req.body;
    const user = sample_users_login.find(user => user.email === email)

    if(user) {
        res.send("User already exist");
    } else {
        const newUser:any ={
            name,
            id:'',
            email,
            password,
            isAdmin:false
        }
        sample_users_login.push(newUser);
        res.send(generateTokenResponse(newUser));
    }

})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn:"10d"
    });

    user.token = token;
    return user
}

const port = 5000;
app.listen(port, () => {
    console.log("Wesite http://localhost:" +port);
})
