import { API_BASE_URL } from './constants'

export const generateListingUrl = (type, genre = '') => {
    return ` /api/listing/${type}/${genre}`
    // return `${API_BASE_URL}/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
  return `/api/genres/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
  return `/api/listing/${type}/view/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

export const generateReviewUrl = (type,id) => {
  return `/api/reviews/${type}/${id}`
}

export const generateFavouriteUrl = (type,id) => {
  return `/api/favourites/${type}/${id}`
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
    `/api/reviews/${type}/${id}`,
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
    `/api/favourites/${username}/${type}`,
    {headers: {
      'Authorization': `Bearer ${token}`
   }
 }
)
    .then(res => res.json())
};

export const generateCastUrl = (type,id) => {
  return `/api/listing/${type}/view/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const getCast = (generateDetailUrl) => {
    return fetch(generateDetailUrl,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    })
      .then(res => res.json())
};


export const getSimilar = (type, id, token) => {
    return fetch(`/api/listing/similar/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    {headers: {
      'Authorization': `Bearer ${token}`
     }
    })
      .then(res => res.json())
      .then(json => json.results)
};

  export const requestToken = () =>{
    return fetch(`api/users/requestTMDBToken`).
    then(res => res.json())
  }

  export const requestSession = (token) =>{
    return fetch(`api/users/requestTMDBSession/${token}`).
    then(res => res.json())
  }

  export const userPermision = (RequestToken) => {
    window.location.href = `https://www.themoviedb.org/authenticate/${RequestToken}?redirect_to=https://5416f78a.ngrok.io`
  }

  // export const createFavList = {
  //   method : 'POST',
  //   headers: { 'Content-Type': 'application/json;charset=utf-8' },
  //   body: JSON.stringify({
  //                         "name": "Favourites list.",
  //                         "description": "This is Favourites list of a user",
  //                         "language": "en"
  //                       })
  // };

  // export const postcreateFavList = (createFavList,) => {
  //     return fetch(`/api/users/?api_key=${process.env.REACT_APP_API_KEY}&session_id=${window.localStorage.getItem('token')}`,createFavList)
  //     .then(res => res.json())
      
  // };

  // export const addToFavs = (listId, sessionId, mediaId) => {
  //   return fetch(`https://api.themoviedb.org/3/list/${listId}/add_item?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionId}`,{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'post',
  //     body: JSON.stringify({ media_id: mediaId }) 
  //   }).then(res => res.json())
  // };

  export const login = (username, password) => {
   return fetch('/api/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: 'post',
      body:  JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
  };

  export const signup = (username, password = '', sessID = '') => { 
    return fetch('/api/users?action=register',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({username: username, password: password, sessID: sessID }) 
    }).then(res => res.json())
  };

  


  

  
export default "";