import React from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const commonHealth = () => {
    Axios.get("https://api.nhs.uk/common-health-questions/travel-health?",
      {
        "headers": {
          "subscription-key": "30dad3f05e124ca2832649645958f434"
        }
      }).then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <button onClick={commonHealth}>get travel health advice</button>
    </div>
  );
}
export default App;
