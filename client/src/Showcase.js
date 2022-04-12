import React, {useState} from "react";

const Showcase = (props) => {
    console.log("Showcase:",props.data);
    const [cardRecipe, setCardRecipe] = useState(props.data);

    return(
        <div className="showcase">
            <div className="showcase-search">
                <input className="search" type="text" placeholder="   What are you looking for?"/>
                <button type="submit" className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="showcase-card-container">
                {/* {props.map(() => {
                    <div className="showcase-card">
                        <image />
                        <div></div>
                        <div></div>
                    </div>    
                })} */}
                <div className="showcase-card">
                    <img className="card-image" src={cardRecipe[1].image}/>
                    <div className="card-title">{cardRecipe[1].name}</div>
                    {/* <div className="card-description">{cardRecipe[1].description}</div> */}
                </div>
                <div className="showcase-card">
                    <img className="card-image" src={cardRecipe[2].image}/>
                    <div className="card-title">{cardRecipe[2].name}</div>
                    {/* <div className="card-description">{cardRecipe[2].description}</div> */}
                </div>
                <div className="showcase-card">
                    <img className="card-image" src={cardRecipe[3].image}/>
                    <div className="card-title">{cardRecipe[3].name}</div>
                    {/* <div className="card-description">{cardRecipe[3].description}</div> */}
                </div>
                <div className="showcase-card">
                    <img className="card-image" src={cardRecipe[4].image}/>
                    <div className="card-title">{cardRecipe[4].name}</div>
                    {/* <div className="card-description">{cardRecipe[4].description}</div> */}
                </div>
            </div>
        </div>
    );
}

export default Showcase;