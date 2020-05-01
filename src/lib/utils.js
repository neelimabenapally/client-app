// Listing Url based on media type
export const generateListingUrl = (type, genre = '') => {
  return `${process.env.REACT_APP_SERVER_URL}/api/listing/${type}/${genre}`
}

// Get List of items
export const getList = async (apiUrl, token) => {
  return fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => json.results)
};

// Genres Url based on media type
export const generateGenresUrl = (type) => {
  return `${process.env.REACT_APP_SERVER_URL}/api/genres/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

//Get List of Genres
export const getGenres = (genresUrl, token) => {
  return fetch(genresUrl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => json.genres);
};

// Detail Url based on media type
export const generateDetailUrl = (type, id) => {
  return `${process.env.REACT_APP_SERVER_URL}/api/listing/${type}/view/${id}`
}

// Review Url based on media type
export const generateReviewUrl = (type, id) => {
  return `${process.env.REACT_APP_SERVER_URL}/api/reviews/${type}/${id}`
}

// Favourite Url based on media type
export const generateFavouriteUrl = (type, id) => {
  return `${process.env.REACT_APP_SERVER_URL}/api/favourites/${type}/${id}`
}

//Get Details of the item
export const getDetail = (generateDetailUrl, token) => {
  return fetch(generateDetailUrl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
};

//Add Review
export const addReview = (reviewUrl, review, token) => {
  return fetch(reviewUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(review)
    }
  )
    .then(res => res.json())
};

//Get List of Reviews
export const getReviews = (type, id, token) => {
  return fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/reviews/${type}/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  )
    .then(res => res.json())
};

// Add to Favourites
export const addFavourite = (favouriteUrl, username, id, type, favourite = true, token) => {
  return fetch(favouriteUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        "username": username,
        "mediaId": id,
        "media_type": type,
        "isFavourite": favourite
      })
    }
  )
    .then(res => res.json())
};

//Get List of Favourites
export const getFavourites = (type, username, token) => {
  return fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/favourites/${username}/${type}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  )
    .then(res => res.json())
};

// Cast Url based on media type and id
export const generateCastUrl = (type, id) => {
  return `${process.env.REACT_APP_SERVER_URL}/api/listing/${type}/view/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
//Get list of cast
export const getCast = (generateDetailUrl) => {
  return fetch(generateDetailUrl, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  })
    .then(res => res.json())
};

// Get List of Similar items based on media type and id
export const getSimilar = (type, id, token) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/api/listing/similar/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => json.results)
};

//Login of user
export const login = (username, password) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/api/users`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

// Signup of user
export const signup = (username, password = '') => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/api/users?action=register`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export default "";