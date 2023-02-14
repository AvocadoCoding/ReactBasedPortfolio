import React from "react";
import Button from 'react-bootstrap/Button';
import "./style.css";

function Card(props) {

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='${props.image}' />
        <Card.Body>
          <Card.Title>'${props.name}'</Card.Title>
          <Card.Text>
            '${props.description}'
          </Card.Text>
          <Button variant="link" href='${props.url}'>Link</Button>
        </Card.Body>
      </Card>
  );
}

export default Card;
