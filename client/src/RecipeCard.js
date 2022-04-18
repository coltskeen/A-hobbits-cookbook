import React, {useState} from "react";

const RecipeCard = (props) => {
    // const [cardRecipe, setCardRecipe] = useState(props.data);
    // console.log("Recipe",cardRecipe);
    const recipeCards = props.data.map((index) => (
        <div key={index.id} className="showcase-card">
            <img className="card-image" src={index.image}/>
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