# Assignment 1 - ReactJS app.

Name: Neelima Benapally

## Overview.

Media-Fanpage app lists movies or series based on the user selection.

+ User can select a list of either Movies or Series.
+ Users are required to be authenticated to access the media-fanpage and get list of movies or series.
+ Users can sort the list based on popularity, rating or release year.
+ All the filtering and sorting of the lists are done through the URL.
+ Users can get a list of similar movies or series based on their selection.
+ Users get the details of cast also when getting the details about a movie or series
+ Profile Page of the User


## Setup requirements.

PreRequisites
..* npm
..* storybook 

Create a .env file in the root folder of the app
Contents of .env file:
REACT_APP_API_KEY=<TMDB API key>
REACT_APP_SERVER_URL=http://localhost:8080

To start the app:

npm start

To start Storybook:

npm run storybook

Server app: https://github.com/neelimabenapally/server-app.git


## Data Model Design.

+ Get Series List : https://api.themoviedb.org/3/discover/tv?api_key=<<TMDB API key>>&language=en-US&include_adult=false&page=1
+ ![Series List Sample Response][SeriesList]


+ Get Movie Cast : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<TMDB API key>>
+ ![Movie Cast Sample Response][MovieCast]


+ Get Series Cast : https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<TMDB API key>>
+ [Series Cast Sample Response][SeriesCast] 

+ Get Similar Movies : https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<TMDB API key>>&language=en-US&page=1
+ [Similar Movies Response][SimilarMovies]

+ Get Similar Series : https://api.themoviedb.org/3/tv/{tv_id}/similar?api_key=<<api_key>>&language=en-US&page=1
+ [Similar Series Response][SimilarSeries]

## App Design.

### Component catalogue.

![Storybook Components][storybookComponents]: 
> Component stories from the Storybook UI 

![Card Component][card]

![Detail Page][detailPage]

![Header][Header]

![Home Page][homepage]

![Listing Page][listingPage]

![Profile Page][profilePage]

![Similars Page][similarsPage]


### Design patterns.

+ PrivateRoute.js, a HOC is used in App.js to make routes protected and only authenticated users can access them or they will be redirected to login page.

+ SearchBar.js is used to for filtering and sorting the lists and is used in Listing.js 

+ Cards.js is used to display the movies or series in Listing.js page and in Similar.js page

+ React Fragment is used for conditional rendering Similar.js, DetailPage.js and Profile.js.

+ useHistory() hook is used SearchBar.js to navigate using the provided filters

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) . . . . . . . 

![HomePage View][HomePageView]
> This is the Landing Page. Clicking on Movie/Tv Image takes you to movies/Series list page. 

![Movie List Page View][MovieListPageView]
> Displays list of movies. User can add a movie to favourites list by clicking on the Add to Favourite button or delete a movie from favourites list clicking on the Remove from Favourite button and get a list of similar movies by clicking on the similar button.

![Series List Page View][SeriesListPageView]
> Displays list of series. User can add a series to favourites list by clicking on the Add to Favourite button or delete a series from favourites list clicking on the Remove from Favourite button and get a list of similar series by clicking on the similar button.

![Detail Page View][DetailPageView]
> Displays details and reviews of the movie/series and users can add reviews their here.

![Similar Movies Page View][SimilarMoviesPageView]
> Displays list of movies similar to the selected movie.

![Similar Series Page View][SimilarSeriesPageView]
> Displays list of series similar to the selected series.

![Profile Page View][ProfilePageView]
> Displays the profile of the user i.e. user name and email id along with user image.


## Routing.

+ https://media-fanpage-client.herokuapp.com - Displays Home Page with header and Movie and Tv Image. Clicking on movie or Tv image will get list movies or series respectively. No Authentication required
+ /profile - Displays User Profile. Authentication required.
+ /listing/movie - Displays list of movies. Authentication required. Nested Route.
+ /listing/tv - Displays list of series. Authentication required. Nested Route.
+ /listing/similar/movie/{movie_id} - Displays list of similar movies. Authentication required. Nested Route.
+ /listing/similar/tv/{tv_id} - Displays list of similar series. Authentication required. Nested Route.
+ /movie/view/{movie_id} - Displays movie details along with any reviews if present and user can add his/her reviews here in the add review textbox. Authentication required.
+ /tv/view/{tv_id} - Displays series details along with any reviews if present and user can add his/her reviews here in the add review textbox.Authentication required.
+ 

## Independent learning.
 
Use of Auth0 for Authentication 
Reference: https://auth0.com/docs/quickstart/spa/react

Heroku used for Deployment of the App.
Reference: https://www.freecodecamp.org/news/deploy-a-react-node-app-to/
https://blog.heroku.com/deploying-react-with-zero-configuration

[storybookComponents]: ./public/storybookImages/storybookComponents.png
[card]: ./public/storybookImages/card.png
[detailPage]: ./public/storybookImages/detailPage.png
[Header]: ./public/storybookImages/Header.png
[homepage]: ./public/storybookImages/homepage.png
[listingPage]: ./public/storybookImages/listingPage.png
[profilePage]: ./public/storybookImages/profilePage.png
[similarsPage]: ./public/storybookImages/similarsPage.png
[HomePageView]: ./public/UI-Views/HomePageView.png
[MovieListPageView]: ./public/UI-Views/MovieListPageView.png
[SeriesListPageView]: ./public/UI-Views/SeriesListPageView.png
[DetailPageView]: ./public/UI-Views/DetailPageView.png
[SimilarMoviesPageView]: ./public/UI-Views/SimilarMoviesPageView.png
[SimilarSeriesPageView]: ./public/UI-Views/SimilarSeriesPageView.png
[ProfilePageView]: ./public/UI-Views/ProfilePageView.png
[SeriesList]: ./public/sampleResponses/SeriesList
[MovieCast]: ./public/sampleResponses/MovieCast
[SeriesCast]: ./public/sampleResponses/SeriesCast 
[SimilarMovies]: ./public/sampleResponses/SimilarMovies
[SimilarSeries]: ./public/sampleResponses/SimilarSeries
