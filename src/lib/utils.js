export const generateListingUrl = (type, genre = '') => {
    return ` ${process.env.SERVER_URL || ''}/api/listing/${type}/${genre}`
}

export const getList = async (apiUrl, token) => {
    return fetch(apiUrl,{headers: {
         'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(json => json.results)
};

export const generateGenresUrl = (type) => {
  return `${process.env.SERVER_URL || ''}/api/genres/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const getGenres = (genresUrl, token) => {
    return fetch(genresUrl,{headers: {
        'Authorization': `Bearer ${token}`
     }
    })
      .then(res => res.json())
      .then(json => json.genres);
      
};

export const generateDetailUrl = (type,id) => {
  return `${process.env.SERVER_URL || ''}/api/listing/${type}/view/${id}`
}

export const generateReviewUrl = (type,id) => {
  return `${process.env.SERVER_URL || ''}/api/reviews/${type}/${id}`
}

export const generateFavouriteUrl = (type,id) => {
  return `${process.env.SERVER_URL || ''}/api/favourites/${type}/${id}`
}

export const getDetail = (generateDetailUrl, token) => {
    return fetch(generateDetailUrl,{headers: {
        'Authorization': `Bearer ${token}`
     }
    })
      .then(res => res.json())
};

export const addReview = (reviewUrl, review, token) => {
  return fetch(reviewUrl,
    {
      method : 'POST',
      headers: { 
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(review)
    }
    )
    .then(res => res.json())
};

export const getReviews = (type, id, token) => {
  return fetch(
    `${process.env.SERVER_URL || ''}/api/reviews/${type}/${id}`,
    {headers: {
      'Authorization': `Bearer ${token}`
   }
 }
)
    .then(res => res.json())
};

export const addFavourite = (favouriteUrl, username, id, type, favourite = true, token) => {
  console.log(username)
  return fetch(favouriteUrl,
    {
      method : 'POST',
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

export const getFavourites = ( type, username, token) => {
  return fetch(
    `${process.env.SERVER_URL || ''}/api/favourites/${username}/${type}`,
    {headers: {
      'Authorization': `Bearer ${token}`
   }
 }
)
    .then(res => res.json())
};

export const generateCastUrl = (type,id) => {
  return `${process.env.SERVER_URL || ''}/api/listing/${type}/view/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const getCast = (generateDetailUrl) => {
    return fetch(generateDetailUrl,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    })
      .then(res => res.json())
};


export const getSimilar = (type, id, token) => {
    return fetch(`${process.env.SERVER_URL || ''}/api/listing/similar/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    {headers: {
      'Authorization': `Bearer ${token}`
     }
    })
      .then(res => res.json())
      .then(json => json.results)
};

  export const login = (username, password) => {
   return fetch(`${process.env.SERVER_URL || ''}/api/users`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: 'post',
      body:  JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
  };

  export const signup = (username, password = '') => { 
    return fetch(`${process.env.SERVER_URL || ''}/api/users?action=register`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({username: username, password: password }) 
    }).then(res => res.json())
  };
  
export default "";