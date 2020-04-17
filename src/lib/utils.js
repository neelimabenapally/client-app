import { API_BASE_URL } from './constants'

export const generateListingUrl = (type, genre = '') => {
    return `/api/listing/${type}/${genre}`
    // return `${API_BASE_URL}/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

export const getList = (apiUrl) => {
    return fetch(apiUrl,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(json => json.results)
};

export const generateGenresUrl = (type) => {
  return `/api/genres/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const getGenres = (genresUrl) => {
    return fetch(genresUrl,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    })
      .then(res => res.json())
      .then(json => json.genres);
      
};

export const generateDetailUrl = (type,id) => {
  return `/api/listing/${type}/view/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const getDetail = (generateDetailUrl) => {
    return fetch(generateDetailUrl,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    })
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

export const generateSimilarUrl = (type,id) => {
  return `/api/listing/${type}/view/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const getSimilar = (generateSimilarUrl) => {
    return fetch(generateDetailUrl,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    })
      .then(res => res.json())
      .then(json => json.results)
};

  export const getMovieReviews = (type,id) => {
    return fetch(
      `/api/${type}/${id}/reviews`,
      {headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
  )
      .then(res => res.json())
      .then(json => json.results);
  };

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

  export const signup = (username, password) => {
    return fetch('/api/users?action=register',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({username: username, password: password })
    }).then(res => res.json())
  };

  
export default "";