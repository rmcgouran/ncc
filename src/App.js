import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import logo from './logo.png';

function App() {

  // Call the API and set the useState.
  const [data, setData] = useState([]);
  useEffect(() => { // API data loaded on page load.
    Axios.get("https://api.nhs.uk/conditions/coronavirus-covid-19/faqs", {
      headers: {
        "subscription-key": "30dad3f05e124ca2832649645958f434"
      }
    }).then((response) => {
      console.log(response.data.mainEntity);
      setData(response.data.mainEntity);
    });
  });

  return (
    <div className="App">
      {/* <button onClick={getFaqs}>Request Covid-19 FAQs</button> initially used to load data */}
      <header>
        <div className="container">
          <h1 className="logo">Covid-19 FAQs</h1>
        </div>
      </header>
      <body className="info">
        {data.map(item => (
          <>
            <h2 className="text">{item.name ?? 'Name'}</h2>
            <p className="text">{item.acceptedAnswer.text ?? 'Answer'}</p>
            <a className="text" href={item.sameAs} target="_blank">Visit this page on the official NHS site</a>
          </>
        ))}
      </body>
      <img className="nhs" src={logo} alt="NHS Attribution" />
    </div>
  );
}

export default App;
