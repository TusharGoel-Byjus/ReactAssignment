import React, { useState, useEffect } from "react";
import {Button,Row,Col,Container} from "reactstrap";
import CustomCard from "./CustomCard"

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((jsonData) => {
        setCardData(jsonData);
        console.log("Data fetched");
      })
      .catch((error) => console.log("Error in fetching data", error))
      .finally(() => {setLoading(false);})

  },[isLoading]);

  return (
    <Container>
    <div>
      <h1>Cards</h1>
      <Button color="success" onClick={()=>setLoading(true)}>Refresh for Render</Button>
      {isLoading ? <p>Loading ...</p>
        : <Row>
        {cardData.map((card)=>
        
          <Col key={card.id} xl="3" lg="3" md="4" sm="4" xs="6" >
          <CustomCard 
             
            id = {card.id}
            userId={card.userId}
            title={card.title}
            completed={card.completed}
          />
          </Col>
          
        )}
        </Row>
        }
    </div>
    </Container>
  );
}


