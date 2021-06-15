import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const getFaqs = () => {
    Axios.get("https://api.nhs.uk/conditions/coronavirus-covid-19/faqs", {
      headers: {
        "subscription-key": "30dad3f05e124ca2832649645958f434"
      }
    }).then((response) => {
      console.log(response.data.mainEntity);
      setData(response.data.mainEntity[3]);
    });
  };

  return (
    <div className="App">
      <button onClick={getFaqs}>Request covid faqs</button>
      <h1>Covid FAQ</h1>
      <h2>{data?.name}</h2>
      <p>{data?.acceptedAnswer.text}</p>
      <a href={data?.sameAs}>Visit the NHS site</a>
    </div>
  );
}

export default App;