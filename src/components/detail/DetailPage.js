import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/fontawesome";
import { useAuth0 } from "../../react-auth0-spa";
import { generateDetailUrl, getDetail, generateReviewUrl, addReview, getReviews } from "../../lib/utils";
import { Form, Card, Button, Badge, Row, Col, Container,  CardGroup, Jumbotron, CardDeck } from "react-bootstrap";
import { reactLocalStorage } from 'reactjs-localstorage';

const DetailPage = (props) => {
    const defautItem = props.sample ? props.sample : '';
    // const [item, setItem] = useState({});
    const [item, setItem] = useState(defautItem);
    const [cast, setCast] = useState({});
    const [similar, setSimilar] = useState({});
    const [newReview, setNewReview] = useState({})
    const [reviews, setReviews] = useState({});
    const match = props.match;
    const urlSegments = match.url.split("/"); 
    const typeDetailUrl = urlSegments[1];
    const idDetailUrl = urlSegments[3];
    let detailUrl = generateDetailUrl(typeDetailUrl, idDetailUrl);
    let reviewUrl = generateReviewUrl(typeDetailUrl, idDetailUrl);
    const auth = useAuth0() || props.dummyAuth;
    const { getTokenSilently } = auth
    
    
    useEffect(() => {
        const fetch = async () => {
            const token = await getTokenSilently()
            getDetail(detailUrl, token).then(async (res) => {
                const user = reactLocalStorage.getObject('dbUser')
                setItem(res.item);
                setCast(res.cast);
                setSimilar(res.similar);
                setNewReview({
                    ...newReview, 
                    type: typeDetailUrl,
                    id: res.item.id,
                    username: user.username
                })
                const allReviews = await getReviews(typeDetailUrl, idDetailUrl) 
                setReviews(allReviews)
            })
        }
        fetch()
    }, []);

    
  const addReviewHandler = async() => {
    const token = await getTokenSilently()
    addReview(reviewUrl, newReview, token).then( async (res) => {
        const allReviews = await getReviews(typeDetailUrl, idDetailUrl) 

        console.log('allre', allReviews)
        setReviews(allReviews)
    })
  }

  return(
    <Container>
        <Row>
            <Col>
            <CardGroup>
                <Card >
                    <Badge variant="warning" style={{position: 'absolute'}}>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <span> {item && item.vote_average ? item.vote_average: "N/A"}</span>
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
                        {/* <Card.Text><strong>Similar:</strong>
                        <br/>
                        {Object.keys(similar).map((i) => {
                            return (
                                <span key={`similar-${i}`}>
                                    <a href={`/${typeDetailUrl}/view/${similar[i].id}`} target="_blank">{similar[i].original_name ||  similar[i].original_title}<br/></a>
                                </span>
                            )
                        })}
                        </Card.Text> */}
                        {/* <Button variant="primary">Add Review</Button> */}
                    </Card.Body> 
                </Card>
            </CardGroup>
            </Col>
        </Row>  
        

        <Row style = {{minHeight:'30px'}}></Row>

        <Row>   
            <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Add Review</strong></Form.Label>
                    <Form.Control 
                        
                        as="textarea" 
                        placeholder="Write your review here..." 
                        rows="5" 
                        onChange={(e) => {
                            setNewReview({
                                ...newReview,
                                review: e.target.value
                            })
                        }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!newReview.review} onClick={addReviewHandler.bind(this)}>
                    Submit
                </Button>
            </Col> 
        </Row>

        <Row style = {{minHeight:'30px'}}></Row>

        <Row>
            <Col> 
                <h5>Reviews:</h5>                      
                {Object.keys(reviews).map((i) => {
                    return (
                            <Jumbotron>
                                <h6 key={i}>{reviews[i].username}</h6>
                                <p>{reviews[i].review}</p>
                            </Jumbotron>
                            )})}
             </Col> 
        </Row>

    </Container>
  );

}


export default DetailPage ;
