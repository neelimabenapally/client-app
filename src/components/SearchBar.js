import React, { useRef, useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Row, Col } from "react-bootstrap";
import { generateGenresUrl, getGenres } from "../lib/utils";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const SearchBar = props => {
  let history = useHistory();
  const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
  const filters = queryString.parse(props.location.search)
  const match = props.match;
  const urlSegments = match.url.split("/");
  const urlSegmentForApiCall = urlSegments[2] === 'fav' ? urlSegments[3] : urlSegments[2]
  let genresUrl = generateGenresUrl(urlSegmentForApiCall)
  const auth = useAuth0() || props.dummyAuth; // Authentication Token From Auth0 or dummy Authentication Token for Storybook
  const { getTokenSilently } = auth
  let sortValue = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      const token = await getTokenSilently()
      getGenres(genresUrl, token).then((genresList) => { //Get list of genres 
        if (genresList) {
          setGenres(genresList)
        }

      })
    }
    if (sortValue.current) {
      sortValue.current.focus();
    }
    fetch()

  }, []);

  const handleSearchChange = (type, e) => {
    const newFilters = { ...filters, [type]: e.target.value };
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
            <Form.Control as="select" onChange={handleSearchChange.bind(this, 'with_genres')}>
              <option defaultValue value="0">All Genres</option>
              {genres.map(genre => {


                return (
                  <option
                    key={genre.id}
                    value={genre.id}
                    selected={parseInt(filters.with_genres) === genre.id}
                  >
                    {genre.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control name="sort" as="select" onChange={handleSearchChange.bind(this, 'sort_by')}>
              <option defaultValue value="">Sort By</option>
              <option selected={filters.sort_by === "popularity.desc"} value="popularity.desc">Popularity</option>
              <option selected={filters.sort_by === "primary_release_date.desc"} value="primary_release_date.desc">Year</option>
              <option selected={filters.sort_by === "vote_average.desc"} value="vote_average.desc">Rating</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
    </Row>


  );
};

export default SearchBar;