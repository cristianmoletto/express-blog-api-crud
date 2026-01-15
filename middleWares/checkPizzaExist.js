import pizzasData from "../data/pizzasData.js";

export default function pizzaExist(req, res, next) {
  const id = parseInt(req.params.id);
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  if (!pizza) {
    res.status(404);
    res.json({
      error: "Not found",
      message: "Pizza non trovata",
    });
  }

  next();
}
