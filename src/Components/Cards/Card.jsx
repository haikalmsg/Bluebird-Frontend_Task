import React from "react";
import { Card, Button} from "react-bootstrap";


function CardComponent(props) {
    const {id,vehicle, imageURL, price, description} = props.data;
    return (
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{vehicle}</Card.Title>
        
        <Card.Text>
        Price : {price}
        <br></br>
          Seats : {description[0]}
          <br/>
          Charger : {description[1]}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}
export default CardComponent;