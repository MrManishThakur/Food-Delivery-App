import React from "react";
import Card from "../Ul/Card";
import MealItem from "../MealItems/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState } from "react";
import { useEffect } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httError, setHttpError] = useState();
  useEffect(() => {
    getMealsData().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message);
    })
  }, []);
  const getMealsData = async() => {
    const response = await fetch("https://meals-data-api.herokuapp.com/meals");
    if(!response.ok){
      throw new Error("Something went wrong!");
    }

    const responseData = await response.json();
    setMeals(responseData);
    setIsLoading(false);
  };

  if(isLoading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading meals...</p>
      </section>
    )
  }
  if(httError){
    return (
      <section className={classes.MealsError}>
        <p>{httError}</p>
      </section>
    )
  }
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
