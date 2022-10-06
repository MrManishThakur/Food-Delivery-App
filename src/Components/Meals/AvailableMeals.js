import React from "react";
import Card from "../Ul/Card";
import MealItem from "../MealItems/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState } from "react";
import { useEffect } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getMealsData();
  }, []);
  const getMealsData = () => {
    fetch("https://meals-data-api.herokuapp.com/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  };
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal._id}
      id={meal._id}
      name={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
