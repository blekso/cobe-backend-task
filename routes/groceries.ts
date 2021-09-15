import express from "express";
import { Grocery } from "../models/grocery";

export const router = express.Router();

async function getGroceries() {
  try {
    const groceries = await Grocery.find();
    return groceries;
  } catch (err) {
    console.error(err);
  }
}

async function addGrocery() {
  const grocery = new Grocery({
    name: "Egg",
    quantity: 8,
    price: 9.99,
  });
  try {
    const result = await grocery.save();
    return result;
  } catch (err) {
    return err;
  }
}

//addGrocery();

function calculateNumberOfArticles(groceries) {
  let result = 0;
  groceries.forEach((g) => (result += g.quantity));
  return result;
}

function calculateTotalPrice(groceries) {
  let result = 0;
  groceries.forEach(
    (g) => (result += g.price * calculateNumberOfArticles(groceries))
  );
  return result.toFixed(2);
}

function calculateTotalPriceWithTaxes(groceries) {
  let result =
    Number(calculateTotalPrice(groceries)) - Number(calculateTaxes(groceries));
  return result.toFixed(2);
}

function calculateTaxes(groceries) {
  let result = Number(calculateTotalPrice(groceries)) * 0.18;
  return result.toFixed(2);
}

router.get("/", (req, res) => {
  getGroceries()
    .then((groceries) => {
      res.send({
        numberOfArticles: calculateNumberOfArticles(groceries),
        taxes: calculateTaxes(groceries),
        totalPrice: calculateTotalPriceWithTaxes(groceries),
      });
    })
    .catch((err) => res.send(err));
});
