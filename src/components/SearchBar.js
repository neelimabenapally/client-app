import React, { useContext, useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Row, Col } from "react-bootstrap";
import { generateGenresUrl, getGenres } from "../lib/utils";
import queryString from "query-string";
import { useHistory } from "react-router-dom";


const SearchBar = props => {
  let history = useHistory();
  const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
  const filters = queryString.parse(props.location.search)
  const match = props.match;
  const urlSegments = match.url.split("/"); 
  const urlSegmentForApiCall = urlSegments[2] === 'fav' ? urlSegments[3]: urlSegments[2]
  let genresUrl = generateGenresUrl(urlSegmentForApiCall)
  
  useEffect(() => {
    // getGenres(genresUrl).then(allGenres => {
    //     setGenres([genres[0], ...allGenres]);
    //     });
    getGenres(genresUrl).then((genresList) => setGenres(genresList) )
  }, []);

  const handleSearchChange = (type, e) => {
    const newFilters = {...filters, [type]: e.target.value};
    history.push({ search: `?${queryString.stringify(newFilters)}` });
    props.updateFilters(newFilters)
  };

  const handleTextChange = (e) => {
    props.updateTextFilter(e.target.value)
  }

  return (
      <Row>
        <Col> 
          <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter Title"
                aria-label="Enter Title"
                aria-describedby="basic-addon2"
                onChange={handleTextChange.bind(this)}
              />
              
            </InputGroup>
          </Col>
        <Col>
          <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control as="select" custom onChange={handleSearchChange.bind(this, 'with_genres')}>
                  <option selected value="">All Genres</option>
                  {genres.map(genre => {
                  return (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  );
                })}
                </Form.Control>
              </Form.Group>
            </Form>
        </Col>
        
        </Row>
        
      
  );
};

export default SearchBar;