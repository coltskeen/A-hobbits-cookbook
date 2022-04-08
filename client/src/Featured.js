import React, {useState} from "react";

const Featured = (props) => {
    console.log(props.data[1][1]);
    const [featuredRecipe, setFeaturedRecipe] = useState(null);

    return (
        <div className="featured">
            <img className="featured-image" src={props.data[1][1]}/>
            <div className="ribbon">
                {props.data[2][1]}
            </div>
            {/* <p>{props.data[2][1]}</p> */}
        </div>
    )
}

export default Featured;