import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import logo from "./logo.png"
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // Call the API and set the useState.
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://api.nhs.uk/conditions/coronavirus-covid-19/faqs", {
      headers: {
        "subscription-key": "30dad3f05e124ca2832649645958f434"
      }
    }).then((response) => {
      setData(response.data.mainEntity);
    });
  });

  // Generate cards containing data from the API using a map()
  const NHSCard = (props) => {
    return (

      <div className="cards">
        {data.map(item => (
          <>
            <Card className="card" key={item.name}>
              <CardBody body>
                <CardTitle className="cardTitle" tag="h5" >{item.name ?? 'Name'}</CardTitle>
                <CardText >{item.acceptedAnswer.text ?? 'Answer'}</CardText>
                <a href={item.sameAs} className="btn btn-primary">View Source</a>
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
      <main>
        <NHSCard />
      </main>
      <footer>
        <a href="https://www.nhs.uk"><img src={logo} alt="NHS Attribution" className="nhs" /></a>
      </footer>
    </div>
  );
}

export default App;
