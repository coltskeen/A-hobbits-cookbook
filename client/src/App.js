import React, {useState} from 'react';
import Featured from "./Featured";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("/recipe", {
      mode:'cors'
    })
      .then((res) => res.json())
      .then((data) => {
        let dataArr = Object.entries(data[0]);
        console.log(dataArr);
        setData(dataArr)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"> <img class="logo" src={"../pictures/A_hobbits_cookbook_logo.jpeg"}/> </header>
      <div className="container">
        <Featured className="featured" data={data}/>
        
        {/* <Showcase className="showcase"/> */}
        {/* <p>
            {!data ? "Loading..." : data}
        </p> */}
      </div>
      <footer className="footer">
        <a className="navigation-bar">About</a>
        <a className="navigation-bar">Contact</a>
      </footer>
    </div>
  );
}

export default App;
