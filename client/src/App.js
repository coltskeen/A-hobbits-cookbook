import React, {useState, useEffect} from 'react';
import Featured from "./Featured";
import Showcase from "./Showcase";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/recipe", {
      mode:'cors'
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"> <img className="logo" src={"../pictures/hobbit-cookbook-logo.png"}/> </header>
      <div className="container">
        <Featured className="featured" data={data}/>
        <Showcase className="showcase" data={data}/>
      </div>
      <footer className="footer">
        <a className="navigation-bar" href="#">About</a>
        <a className="navigation-bar" href="#">Contact</a>
      </footer>
    </div>
  );
}

export default App;
