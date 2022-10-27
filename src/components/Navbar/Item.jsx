import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <Card style={{ width: '18rem', margin: "2rem", display: "inline-block" }}>
        <Card.Img variant="top" src= {producto.image} />
        <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text></Card.Text>
        <Button><Link to={`/producto/${producto.id}`}>Ver detalles</Link></Button>
        <ListGroup variant="flush">
        <ListGroup.Item>${producto.price}</ListGroup.Item>
        <ListGroup.Item>Talles S/M/L</ListGroup.Item>
        </ListGroup>
        </Card.Body>
    </Card>
    );
}

export default Item



