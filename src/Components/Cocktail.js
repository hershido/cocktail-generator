import "../Css/Cocktail.css";
import { useState, useEffect } from "react";

export default function Cocktail(props) {
  console.log(props.cocktail);
  const { name, id, glass, instructions, ingredients, img } = props.cocktail;

  const [collapsed, setCollapsed] = useState(false);
  const [readMore, setReadMore] = useState(false);

  function processInstructions() {
    console.log(instructions.length);
    if (instructions.length > 200) {
      setReadMore(true);
      setCollapsed(true);
    } else {
      setReadMore(false);
      setCollapsed(false);
    }
  }

  useEffect(() => {
    processInstructions();
  }, [props.cocktail]);

  return (
    <div className="cocktail">
      <img className="cocktail-img" src={img} alt="" />
      <div className="cocktail-info">
        <div className="property-and-description">
          <p className="property">Name:</p>
          <p className="description">{name}</p>
        </div>
        <div className="property-and-description">
          <p className="property">Glass:</p>
          <p className="description">{glass}</p>
        </div>
        <div className="property-and-description">
          <p className="property">Ingredernts:</p>
          <p className="description ingredients">{ingredients}</p>
        </div>
        <div className="property-and-description">
          <p className="property">Instructions:</p>
          <p className="description instructions">
            {collapsed
              ? instructions.substring(0, 200) + "... "
              : instructions + " "}
            {readMore && (
              <button
                className="read-more-btn"
                onClick={() => {
                  setCollapsed(!collapsed);
                }}>
                {collapsed ? "Read More" : "Show Less"}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
