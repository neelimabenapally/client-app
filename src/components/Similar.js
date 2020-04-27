import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import { Row, Card, Button, Badge, CardDeck, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { getSimilar} from  "../lib/utils";
import { reactLocalStorage } from 'reactjs-localstorage';
import Cards from "./listing/Cards";

const Similar = (props) =>{
    console.log(props.dummyAuth)
    const auth = useAuth0() || props.dummyAuth;
    const { getTokenSilently } = auth;
    const defaultSimilar = props.sample ? [props.sample] : []
    const [similar, setSimilar] = useState(defaultSimilar);
    
    const match = props.match;
    const urlSegments = match.url.split("/");
    const typeValue = urlSegments[3];
    const idValue = urlSegments[4];
    console.log("urlSeg", urlSegments); 
    const buttonToolbar = useRef();
    console.log("buttonToolbar", buttonToolbar.current)

    useEffect(() => {
        
        const fetch = async () => {
            const token = await getTokenSilently()
            
                 await getSimilar(typeValue, idValue, token).then((SimilarMovies) => setSimilar(SimilarMovies)) 
                
                // console.log("SimilarMovies",SimilarMovies );
                console.log("similar Movies",similar );
            
        }
        fetch()
    }, []);

    console.log("similar_ Movies",similar );


    const cards = similar.map(item =>
        <Cards 
            key={item.id} 
            item={item} 
            type={typeValue}
            hideButtonToolbar={true}
            dummyAuth={props.dummyAuth}
        />);

        

    return(
        <div>
            <h3>{`Similar ${typeValue}s`}</h3>
            <br/><br/>
        <Row className="justify-content-md-center">
                {cards.length ? cards : "Loading..."}
            </Row>
        </div>
        
        
    )
}


export default Similar ;
