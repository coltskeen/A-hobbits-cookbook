import React, {useState} from "react";

const Showcase = (props) => {
    console.log(props);
    
    return(
        <div className="showcase">
            <input className="search" type="text" placeholder="   What are you looking for?"/>
            <button type="submit" className="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="cards"></div>
        </div>
    );
}

export default Showcase;