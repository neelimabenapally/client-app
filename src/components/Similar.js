import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Row, Col } from "react-bootstrap";
import { getSimilar} from  "../lib/utils";
import Cards from "./listing/Cards";

const Similar = (props) =>{
    const auth = useAuth0() || props.dummyAuth;
    const { getTokenSilently } = auth;
    const [error, setError] = useState(false);
    const defaultSimilar = props.sample ? props.sample : []
    const [similar, setSimilar] = useState(defaultSimilar);
    
    const match = props.match;
    const urlSegments = match.url.split("/");
    const typeValue = urlSegments[3];
    const idValue = urlSegments[4];
    let cards = [];

    useEffect(() => {      
        const fetch = async () => {
            const token = await getTokenSilently()
            await getSimilar(typeValue, idValue, token).then((res) => 
            {
                if (res === undefined || (res.item && res.item.status_code)) {
                    setError(true)
                }
                setSimilar(res)
            }) 
            
        }
        if(!props.sample) {
            fetch()
        }
    }, []);

    if(similar !== undefined){
         cards = similar.map(item =>
            <Cards 
                key={item.id} 
                item={item} 
                type={typeValue}
                hideButtonToolbar={true}
                dummyAuth={props.dummyAuth}
            />);
    }


    return(
        <div>
            <h3>{`Similar ${typeValue}s`}</h3>
            <br/><br/>
            <Row>
            {error ? (
                <Col><strong>No similar movies found</strong></Col>
            ) : cards }
            </Row>  
            {error ? null: (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    {cards.length ? cards : "Loading..."}
                </Row>
            </React.Fragment>
            )}
        </div>
        
        
    )
}


export default Similar ;
