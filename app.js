import express from "express"
import router from "./routers/pizzasRouter.js";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/pizzas", router);


app.listen(port, () => {
    console.log("Server is listening on port " + port);
})