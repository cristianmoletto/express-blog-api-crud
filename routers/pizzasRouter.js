import express from "express"
const router = express.Router()
import pizzaController from "../controllers/pizzaController.js"

// INDEX
router.get("/", pizzaController.index)

// SHOW
router.get("/:id", pizzaController.show)

// DESTROY
router.delete("/:id", pizzaController.destroy)

// STORE
router.post("/", pizzaController.store)

// UPDATE
router.put("/:id", pizzaController.update)


export default router;


