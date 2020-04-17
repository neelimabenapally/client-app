import React, { useState, useEffect } from "react";
import { generateListingUrl, getList } from "../../lib/utils";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
import SearchBar from "../SearchBar";
import queryString from "query-string";


const Listing = (props) => {
    
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({});
    const [textFilter, setTextFilter] = useState("");
    const match = props.match;
    const urlSegments = match.url.split("/"); 
    // console.log("urlSegments",urlSegments);
    const urlSegmentForApiCall = urlSegments[2] === 'fav' ? urlSegments[3]: urlSegments[2]
    const urlSegmentForApiCall1 = urlSegments[2];
    // console.log("urlSegmentForApiCall",urlSegmentForApiCall1);
    let apiUrl = generateListingUrl(urlSegmentForApiCall)
    
    useEffect(() => {
        const genre = filters.with_genres || ''
        getList(`${apiUrl}${genre}`).then((list) => setItems(list) )
    }, [filters]);

    const filteredItems = items.filter( (item) => {
        const title = item.original_name || item.original_title
        return title.toLowerCase().search(textFilter.toLowerCase()) !== -1
    })
    const cards = filteredItems.map(item => <Cards item={item} type={urlSegmentForApiCall} />);

    return (
        <div>
            <SearchBar 
                updateFilters={setFilters} 
                updateTextFilter={setTextFilter} 
                match={props.match} 
                location={props.location}
            />
            <Row className="justify-content-md-center">
                {cards.length ? cards : "OOPS!!! No Results Found"}
            </Row>
        </div>
    )

}

export default Listing;