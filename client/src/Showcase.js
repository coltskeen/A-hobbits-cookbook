import React, {useState} from "react";
import RecipeCard from "./RecipeCard";

const Showcase = (props) => {
    // console.log("Showcase:",props.data);
    const [cardRecipe, setCardRecipe] = useState(props.data);
    const [query, setQuery] = useState('');
    // console.log(cardRecipe);
    // console.log(query);

    return(
        <div className="showcase">
            <div className="showcase-search">
                <input 
                    className="search" 
                    type="text" 
                    placeholder="   What are you looking for?"             onInput={(e) => this.recordResponse(e.target.value)}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <RecipeCard className="showcase-card" data={cardRecipe}/>
        </div>
    );
}

export default Showcase;