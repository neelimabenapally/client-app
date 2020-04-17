import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/fontawesome";
import { Link } from "react-router-dom";
import { Col, Card, Button, Badge, CardDeck } from "react-bootstrap";

const Cards = ({item, type, action}) => {
  return (
    <Col className="text-center" style={{ marginBottom: "20px", maxWidth: "330px" }}>
            <CardDeck>
            <Card  style={{ width: '286px' , minHeight: "500px"}}>
            <Link to={`/${type}/view/${item.id}`}>
                <Badge variant="warning" style={{position: 'absolute'}}>
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <span> {item.vote_average}</span>
                </Badge>
                <Card.Img variant="top" style={{ maxHeight: "400px"}} src={
                    item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : "../images/film-poster-placeholder.png"
                } />
            </Link>
            <Card.Body>
                <Card.Title>{item.original_name || item.original_title}</Card.Title>
                <Card.Text>
                    <Button variant="outline-secondary" size="sm">Add to Favourite</Button>
                </Card.Text>
            </Card.Body>
            </Card>
        </CardDeck>
    </Col>
  );
};


export default Cards ;
