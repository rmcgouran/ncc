import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import logo from './logo.png';
import { Card, CardText, CardBody, CardTitle, Button, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  // Generate cards containing data from the API using a map()
  const NHSCard = (props) => {
    return (

      <div>
        {data.map(item => (
          <>
            <Card className="card">
              <CardBody body>
                <CardTitle tag="h5">{item.name ?? 'Name'}</CardTitle>
                <CardText>{item.acceptedAnswer.text ?? 'Answer'}</CardText>
                <Button openUrl={item.sameAs}>View Source</Button>
              </CardBody>
            </Card>
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <h1 className="header">Covid FAQ</h1>
      </header>

      <NHSCard />

      <img className="nhs" src={logo} alt="NHS Attribution" />
    </div>
  );
}

export default App;
