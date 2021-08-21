import "../Css/Main.css";
import Cocktail from "../Components/Cocktail";
import { useState, useEffect } from "react";

export default function Main() {
  const [cocktail, setCocktail] = useState(false);

  async function fetchDrink() {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Non_Alcoholic");
    const data = await res.json();
    const drink = {
      id: data.drinks[0].idDrink,
      name: data.drinks[0].strDrink,
      glass: data.drinks[0].strGlass,
      instructions: data.drinks[0].strInstructions,
      img: data.drinks[0].strDrinkThumb,
    };

    let ingredients = "";
    for (let i = 1; i < 15; i++) {
      if (data.drinks[0][`strIngredient${i}`]) ingredients += data.drinks[0][`strIngredient${i}`] + ", ";
    }

    ingredients = ingredients.substring(0, ingredients.length - 2);
    drink.ingredients = ingredients;

    setCocktail(drink);
  }

  useEffect(() => {
    fetchDrink();
  }, []);

  return (
    <div className="Main">
      <div className="heading-container">
        <h1 className="heading">Cocktail Generator</h1>
      </div>
      <p className="sub-heading">Spice up your day with a refreshing summer blend</p>
      <button onClick={fetchDrink} className="shuffle-btn">
        Shuffle
      </button>
      {cocktail ? <Cocktail cocktail={cocktail} /> : <></>}
    </div>
  );
}
