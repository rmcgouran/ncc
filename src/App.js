import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => { // API data now loaded when the page loads 
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
        <h1 className="header">Covid FAQ</h1>
      </header>
      <body>
        {data.map(item => (
          <>
            <h2>{item.name ?? 'Name'}</h2>
            <p>{item.acceptedAnswer.text ?? 'Answer'}</p>
            <a href={item.sameAs}>Visit this page on the official NHS site</a>
          </>
        ))}</body>
    </div>
  );
}

export default App;
