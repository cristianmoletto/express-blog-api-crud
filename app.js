import express from "express"
import router from "./routers/pizzasRouter.js";
import notFound from "./middleWares/routeNotFound.js";
import handleError from "./middleWares/routeHandleError.js";
const app = express();
const port = 3000;

app.use(express.json());

// app.use("/", (req, res) => {
//     res.send("Benvenuto nelle API della pizzeria")
// })

app.use("/pizzas", router);

app.use(notFound);

app.use(handleError);


app.listen(port, () => {
    console.log("Server is listening on port " + port);
})