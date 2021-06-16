import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  // Attempt to fetch data on page render 
  // function componentDidMount() {
  //   Axios.get("https://api.nhs.uk/conditions/coronavirus-covid-19/faqs", {
  //     headers: {
  //       "subscription-key": "30dad3f05e124ca2832649645958f434"
  //     }
  //   }).then((response) => {
  //     console.log(response.data.mainEntity);
  //     setData(response.data.mainEntity[1]);
  //   });
  // }

  useEffect(() => {
    Axios.get("https://api.nhs.uk/conditions/coronavirus-covid-19/faqs", {
      headers: {
        "subscription-key": "30dad3f05e124ca2832649645958f434"
      }
    }).then((response) => {
      console.log(response.data.mainEntity);
      setData(response.data.mainEntity[0]);
    });
  });

  return (

    <div className="App">
      {/* {componentDidMount()} Caused a fetch loop - removed*/}
      <h1>Covid FAQ</h1>
      <h2>{data?.name}</h2>
      <p>{data?.acceptedAnswer.text}</p>
      <a href={data?.sameAs}>Visit the NHS site</a>
      {/* {data.map((data, i) => (<h2>{data.name}</h2>))} */}
    </div>
  );
}

export default App;
