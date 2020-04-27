import React, { useState, useEffect } from "react";
import { generateListingUrl, getList, getFavourites } from "../../lib/utils";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
import SearchBar from "../SearchBar";
import { useAuth0 } from "../../react-auth0-spa";
import { reactLocalStorage } from 'reactjs-localstorage';


const Listing = (props) => {
    
    const user = reactLocalStorage.getObject('dbUser');
    const defautItems = props.sample ? [props.sample] : [];
    const [items, setItems] = useState(defautItems);
    const [filters, setFilters] = useState({});
    const [textFilter, setTextFilter] = useState("");
    const [favourites, setFavourites] = useState([]);
    const match = props.match;
    const urlSegments = match.url.split("/"); 
    const urlSegmentForApiCall = urlSegments[2] === 'fav' ? urlSegments[3]: urlSegments[2]
    let apiUrl = generateListingUrl(urlSegmentForApiCall)
    const auth = useAuth0() || props.dummyAuth;
    const { getTokenSilently } = auth
    
    useEffect(() => {

        const genre = filters.with_genres || 0
        const sort_by = filters.sort_by || ''
        const fetch = async () => {
            const token = await getTokenSilently()
            console.log(token)
            getList(`${apiUrl}filter_sort/${genre}/${sort_by}`, token).then((list) => setItems(list) )
            
            const allFavourites = await getFavourites(urlSegmentForApiCall, user.username, token) 

            setFavourites(allFavourites.map(f => f.mediaId));
        }
        fetch()
    }, [filters]);

    const filteredItems = items.filter( (item) => {
        const title = item.original_name || item.original_title
        return title.toLowerCase().search(textFilter.toLowerCase()) !== -1
    })

    const removeFromFavourites = (itemToRemove) => { 
        const index = favourites.indexOf(itemToRemove)
        const favCopy = [...favourites]
        favCopy.splice(index, 1)
        setFavourites(favCopy) 
    }

    const addToFavourites = (item) => {
        setFavourites([...favourites, item])
    }



    const cards = filteredItems.map(item => 
        <Cards 
            key={item.id} 
            item={item} 
            type={urlSegmentForApiCall} 
            favourite={favourites.includes(item.id)} 
            removeFromFavourites={removeFromFavourites}
            addToFavourites={addToFavourites}
            dummyAuth={props.dummyAuth}
        />
    );

    return (
        <div>
            <SearchBar 
                updateFilters={setFilters} 
                updateTextFilter={setTextFilter} 
                match={props.match} 
                location={props.location}
                {...props}
            />
            <Row className="justify-content-md-center">
                {cards.length ? cards : "Loading..."}
            </Row>
        </div>
    )

}

export default Listing;