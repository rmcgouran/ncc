import React from 'react';
import Axios from 'axios'; //helps interface with APIs
import './App.css';

function App() {

  const getFaqs = () => {
    Axios.get("https://api.nhs.uk/conditions/coronavirus-covid-19/faqs",
      {
        "headers": {
          "subscription-key": "30dad3f05e124ca2832649645958f434"
        }
      }).then((response) => {
        console.log("Covid FAQs recieved");
        console.log(response.data.mainEntity);
      })
  };

  return (
    <div className="App">
      <h1>Covid FAQ</h1>
      <button onClick={getFaqs}>Request covid faqs</button>
    </div>
  );
}
export default App;
