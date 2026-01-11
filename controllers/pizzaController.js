import pizzasData from "../data/pizzasData.js";

// INDEX
const index = (req, res) => {
  const ingredient = req.query.ingredient;
  const name = req.query.name;

  let filteredPizza = pizzasData;

  if (ingredient !== undefined && !name) {
    filteredPizza = pizzasData.filter((pizza) =>
      pizza.ingredients.includes(ingredient)
    );
  }

  res.json(filteredPizza);
};

// SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  if (!pizza) {
    res.status(404);
    res.json({
      error: "Not found",
      message: "Pizza non trovata",
    });
  }
  res.json(pizza);
};

// STORE
const store = (req, res) => {
  const data = req.body;
  const newId = pizzasData[pizzasData.length - 1].id + 1;
  const newPizza = {
    id: newId,
    name: data.name,
    image: data.image,
    ingredients: data.ingredients,
  };
  pizzasData.push(newPizza);
  res.json(newPizza);
};

// UPDATE
const update = (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  if (!pizza) {
    res.status(404);
    res.json({
      error: "Not found",
      message: "Pizza non trovata",
    });
  }

  const updatedPizza = {
    id: id,
    name: data.name,
    image: data.image,
    ingredients: data.ingredients,
  };
  pizzasData.splice(pizzasData.indexOf(pizza), 1, pizza);

  res.json(updatedPizza);
};

// MODIFY

// DESTROY
const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  if (!pizza) {
    res.status(404);
    res.json({
      error: "Not found",
      message: "Pizza non trovata",
    });
  }
  
  pizzasData.splice(pizzasData.indexOf(pizza), 1);
  res.sendStatus(204);
};

export default { index, show, destroy, store, update };
