import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/fontawesome";
import { Link } from "react-router-dom";
import { generateDetailUrl, getDetail } from "../../lib/utils";
import { Col, Card, Button, Badge, CardDeck, Row, ListGroup, ListGroupItem, CardGroup } from "react-bootstrap";

const DetailPage = (props) => {
    const [item, setItem] = useState({});
    const [cast, setCast] = useState({});
    const [similar, setSimilar] = useState({});
    const match = props.match;
    const urlSegments = match.url.split("/"); 
    const typeDetailUrl = urlSegments[1];
    const idDetailUrl = urlSegments[3];
    let detailUrl = generateDetailUrl(typeDetailUrl, idDetailUrl);
    
    
    useEffect(() => {
        console.log("detailUrl",detailUrl);
        getDetail(detailUrl).then(res => {
        setItem(res.item);
        setCast(res.cast);
        setSimilar(res.similar);
        });
  }, []);

  return(
        <Row>
            <CardGroup>
            <Card style={{ width: '30rem' }}>
                <Badge variant="warning" style={{position: 'absolute'}}>
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <span> {item.vote_average}</span>
                </Badge>
                <Card.Img variant="top" src={
                    item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : "../images/film-poster-placeholder.png"
                } />
                </Card>
            
            
            <Card style={{ border: 'none'}}>
                <Card.Body>
                    <Card.Title><strong>{item.original_name || item.original_title}</strong></Card.Title>
                    <Card.Text><strong>Overview:</strong> {item.overview}</Card.Text>
                    <Card.Text><strong>Genres: </strong> 
                                        {item.genres && item.genres.map(g => (
                                            <span key={g.name}>
                                                {g.name}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                            </span>
                                        ))}
                                       </Card.Text>
                    <Card.Text><strong>Rating:</strong> {item.vote_average}</Card.Text>
                    
                    <Card.Text><strong>Runtime:</strong>{item.runtime || item.episode_run_time}</Card.Text>
                    {typeDetailUrl === "tv" ?
                        <React.Fragment>
                            <Card.Text><strong>Seasons:</strong> {item.number_of_seasons}</Card.Text>
                            <Card.Text><strong>First Air Date:</strong> {item.first_air_date}</Card.Text>
                            <Card.Text><strong>Last Air Date:</strong> {item.last_air_date}</Card.Text>
                            <Card.Text><strong>Total Episodes:</strong> {item.number_of_episodes}</Card.Text>
                            <Card.Text><strong>Status:</strong> {item.status}</Card.Text>  
                            <Card.Text><strong>Networks:</strong> {item.networks && item.networks.map(n => (
                                            <span key={n.name}>
                                                {n.name}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                            </span>
                                        ))}</Card.Text>
                        </React.Fragment>
                    : 
                        <React.Fragment>
                            <Card.Text><strong>Release Date:</strong> {item.release_date}</Card.Text>
                            <Card.Text><strong>Spoken Languages:</strong> {item.spoken_languages && item.spoken_languages.map(sl => (
                                            <span key={sl.name}>
                                                {sl.name}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                            </span>
                                        ))}</Card.Text>
                        </React.Fragment>
                    }
                    <Card.Text><strong>Original Language:</strong>{'\u00A0'}{item.original_language}</Card.Text>
                    <Card.Text><strong>Cast:</strong>
                    <br/>
                    {Object.keys(cast).map((i) => {
                        return <a key={`cast-${i}`} href={`https://image.tmdb.org/t/p/w500/${cast[i].profile_path}`} target="_blank">{cast[i].name}<br/></a>
                    })}
                    </Card.Text>
                    <Card.Text><strong>Similar:</strong>
                    <br/>
                    {Object.keys(similar).map((i) => {
                        return (
                            <span key={`similar-${i}`}>
                                <a href={`/${typeDetailUrl}/view/${similar[i].id}`} target="_blank">{similar[i].original_name ||  similar[i].original_title}<br/></a>
                            </span>
                        )
                    })}
                    </Card.Text>
                    <Button variant="primary">Add Review</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </CardGroup>
            {/*<Card style={{ width: '18rem' }}>
                <Badge variant="warning" style={{position: 'absolute'}}>
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <span> {item.vote_average}</span>
                </Badge>
                <Card.Img variant="top" src={
                    item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : "../images/film-poster-placeholder.png"
                } />
                <Card.Body>
                    <Card.Title>{item.original_name || item.original_title}</Card.Title>
                    <Card.Text>{item.overview}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
             </Card>*/}
        </Row>
      
  );

}


export default DetailPage ;
