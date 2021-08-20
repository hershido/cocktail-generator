import "../Css/Cocktail.css";

export default function Cocktail(props) {
  console.log(props.cocktail);
  const { name, id, glass, instructions, ingredients, img } = props.cocktail;

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
          <p className="description">{ingredients}</p>
        </div>
        <div className="property-and-description">
          <p className="property">Instructions:</p>
          <p className="description">{instructions}</p>
        </div>
      </div>
    </div>
  );
}
