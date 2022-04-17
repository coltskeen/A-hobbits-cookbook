import React, {useState} from "react";

const RecipeCard = (props) => {
    const [cardRecipe, setCardRecipe] = useState(props.data);
    console.log(cardRecipe);
    const recipeCards = cardRecipe.map((index) => (
        <div className="showcase-card">
            <img key={index.id} className="card-image" src={index.image}/>
            <div className="card-title">{index.name}</div>
        </div> 
    ));

    return (
        <div className="showcase-card-container">
            {recipeCards}
        </div>
    )
}

export default RecipeCard;