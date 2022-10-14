class MainApi {
constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._token = null;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  registrateUser(name, email, password){
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, email, password})
    })
    .then(this._checkResponse)

  }

  loginUser( email, password ){
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password})
    })
    .then(this._checkResponse)
  }

  getUser(){
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  setUserInformation({ name, email}){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    })

    .then(this._checkResponse);
  }

  setToken(token) {
    this._token = token;
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${this._token}`,
    };
  }

  getContent (token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      } 
   })
   .then(this._checkResponse);
  }

  getSavedMovie() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)

    })
    .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-explorer.amir.nomoredomains.sbs',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;