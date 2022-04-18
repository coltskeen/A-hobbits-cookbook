import React, {useState} from "react";
// import Search from "./Search";
import RecipeCard from './RecipeCard';

const Showcase = (props) => {
    
    const [cardRecipe, setCardRecipe] = useState(props.data);
    const [query, setQuery] = useState('');

    const filteredRecipes = props.data.filter(
        recipe => {
            return (
                recipe.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    );

    const handleChange = (e) => setQuery(e.target.value);
    
    function SearchList() {
        // console.log("SearchList:",filteredRecipes)
        // setCardRecipe(filteredRecipes);
        return (
            <RecipeCard className="showcase-card" data={filteredRecipes}/>
        )
    }

    return (
        <div className="showcase">
            <div className="showcase-search">
                <input 
                    className="search" 
                    type="text" 
                    placeholder="   What are you looking for?"             
                    // value={query}
                    onChange={handleChange}
                    />
                <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <>
                {SearchList()}
            </>
        </div>
    )
}

export default Showcase;