import React, {useState} from "react";

const Featured = (props) => {
    // console.log("Featured: ", props.data);
    const [featuredRecipe, setFeaturedRecipe] = useState(props.data[0]);

    return (
        <div className="featured">
            <img className="featured-image" src={featuredRecipe.image}/>
            <div className="ribbon">
                {featuredRecipe.name}
            </div>
            {/* <p>{props.data[2][1]}</p> */}
        </div>
    )
}

export default Featured;