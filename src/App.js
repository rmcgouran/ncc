import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
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
      {/* <button onClick={getFaqs}>Request Covid-19 FAQs</button> */}
      <h1>Covid FAQ</h1>
      {data.map(item => (
        <>
          <h2>{item?.name ?? 'Name'}</h2>
          <p>{item?.acceptedAnswer.text ?? 'Answer'}</p>
          {item?.sameAs && (
            <a href={item?.sameAs}>Visit the NHS site</a>
          )}
        </>
      ))}
    </div>
  );
}

export default App;
