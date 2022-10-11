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

  getUserInformation(){
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  setUserInformation(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
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

}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3002',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;