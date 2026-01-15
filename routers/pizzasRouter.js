import express from "express"
const router = express.Router()
import pizzaController from "../controllers/pizzaController.js"
import pizzaExist from "../middleWares/checkPizzaExist.js"

// INDEX
router.get("/", pizzaController.index)

// SHOW
router.get("/:id", pizzaExist, pizzaController.show)

// DESTROY
router.delete("/:id", pizzaController.destroy)

// STORE
router.post("/", pizzaController.store)

// UPDATE
router.put("/:id", pizzaExist, pizzaController.update)


export default router;


