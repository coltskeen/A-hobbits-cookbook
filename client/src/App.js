import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/recipe", {
      mode:'cors'
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data[0].name)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"> *Make a header bar here* </header>
      <div className="container">
        {/* <Featured className="featured"/>
        <Showcase className="showcase"/> */}
        <p>
            {!data ? "Loading..." : data}
        </p>
      </div>
      <footer className="footer">* Put footer here *</footer>
    </div>
  );
}

export default App;
