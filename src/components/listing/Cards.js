import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/fontawesome";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import { Col, Card, Button, Badge, CardDeck, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { addFavourite, generateFavouriteUrl} from  "../../lib/utils";
import { reactLocalStorage } from 'reactjs-localstorage';


const Cards = ({
    item, 
    type, 
    favourite, 
    addToFavourites,
    removeFromFavourites,
    hideButtonToolbar = false,
    dummyAuth
}) => {

    let favouriteUrl = generateFavouriteUrl(type, item.id);
    const [buttonName, setButtonName] = useState("Add to Favourite");
    const [token, setToken] = useState('');
    const auth = useAuth0() || dummyAuth; // Authentication Token From Auth0 or dummy Authentication Token for Storybook
    const { getTokenSilently } = auth
    const user = reactLocalStorage.getObject('dbUser');

    useEffect(() => {
        const fetch = async () => {
            const token = await getTokenSilently()
            setToken(token)
           
        }
        setButtonName(favourite ? 'Remove from favourites' : 'Add to favourites')
        fetch()
    }, [favourite]);

     
    const addOrRemoveFromFavourites = async () => {
        await addFavourite(favouriteUrl, user.username, item.id, type, !favourite, token)
        if (!favourite) {
            addToFavourites(item.id)
        } else {
            removeFromFavourites(item.id)
        }
    }
    
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
                    
                    {!hideButtonToolbar ? (
                        <ButtonToolbar   aria-label="Toolbar with button groups" >
                        <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="outline-secondary" size="sm" onClick = {addOrRemoveFromFavourites.bind(this)}>{buttonName} </Button>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Second group">
                            <Link to={`/listing/similar/${type}/${item.id}`}>
                                <Button variant="outline-secondary" size="sm">Similar</Button>
                            </Link> 
                            
                        </ButtonGroup>
                    </ButtonToolbar>
                    ) : null}
                    
                        
                </Card.Body>
                </Card>
            </CardDeck>
        </Col>
    );
};


export default Cards ;
