import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from "@storybook/react";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Similar from "../components/Similar";
import Listing from "../components/listing/Listing";
import Cards from "../components/listing/Cards";
import DetailPage from "../components/detail/DetailPage";
import { MemoryRouter } from "react-router";

const typeValue = "movie";
const sample = {
 
    
    adult: false,
    backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
    belongs_to_collection: {
      id: 10,
      name: "Star Wars Collection",
      poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
      backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
    },
    budget: 200000000,
    genres: [
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 28,
        name: "Action"
      }
    ],
    homepage:
      "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
    id: 181808,
    imdb_id: "tt2527336",
    original_language: "en",
    original_title: "Star Wars: The Last Jedi",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    popularity: 44.208,
    poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    production_companies: [
      {
        id: 1,
        logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
        name: "Lucasfilm",
        origin_country: "US"
      },
      {
        id: 11092,
        logo_path: null,
        name: "Ram Bergman Productions",
        origin_country: "US"
      },
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US"
      }
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America"
      }
    ],
    release_date: "2017-12-13",
    revenue: 1332459537,
    runtime: 152,
    spoken_languages: [
      {
        iso_639_1: "en",
        name: "English"
      }
    ],
    status: "Released",
    tagline: "Darkness rises... and light to meet it",
    title: "Star Wars: The Last Jedi",
    video: false,
    vote_average: 7,
    vote_count: 9692
  

  
};

const sampleUser= { "given_name": "neelima", 
                    "family_name": "benapally", 
                    "nickname": "neelima.benapally", 
                    "name": "neelima benapally", 
                    "picture": "https://lh3.googleusercontent.com/-_PuKHYRUJ9Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJP3ohkueJSxDbhKjqnguh5LecGhpA/photo.jpg", 
                    "locale": "en", 
                    "updated_at": "2020-04-25T18:07:17.325Z", 
                    "email": "neelima.benapally@gmail.com", 
                    "email_verified": true, 
                    "sub": "google-oauth2|110881886531068028763" }

const props = {
  location: {pathname: "/listing/movie", search: "", hash: "", state: undefined},
  match: {path: "/listing/movie", url: "/listing/movie", isExact: true, params: {}},
  dummyAuth: { 
    getTokenSilently : () => 'dummy token',
    user: sampleUser
  },
  // sample: sample
  sample: [sample,sample,sample]
  
}

const propsForSimilar = {
  location: {pathname: "/listing/similar/movie/419704", search: "", hash: "", state: undefined},
  match: {path: "/listing/similar/movie/419704", url: "/listing/similar/movie/419704", isExact: true, params: {}},
  dummyAuth: { 
    getTokenSilently : () => 'dummy token',
    user: sampleUser
  },
  sample: [sample, sample, sample]
}


storiesOf( "Home Page", module )
    .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
    <HomePage/>
  ));

storiesOf("Home Page/Listing", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <Listing {...props} />
    );
  });

  storiesOf("Home Page/Listing/Card", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <Cards
      item = {sample}
      type = {typeValue}
      dummyAuth = {props.dummyAuth}
      action={item => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <Cards
        item={sampleNoPoster}
        type = "notype"
        dummyAuth = {props.dummyAuth}
        
      />
    );
  });

  storiesOf("Home Page/Listing/MovieDetails", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <DetailPage {...props} />
    );
  })

  storiesOf("Home Page/Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <Header  {...props} />
    );
  });

  storiesOf("Home Page/Profile", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <Profile  {...props} />
    );
  });

  storiesOf("Home Page/Similar", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <Similar {...propsForSimilar} />
    );
  });