class Api {
    constructor({ domain }) {
      this._domain = domain;
      this._headers = {
        "Content-Type": "application/json",
      };
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`${res.status} - ${res.statusText}`);
    }
  
    makeRequest(url, method = "GET", body) {
      const requestUrl = this._domain + url;
      return fetch(requestUrl, {
        method: method,
        headers: this._headers,
        body: JSON.stringify(body),
      }).then(this._checkResponse);
    }
  
    getPlanetsFromServer() {
      const planetsFromServer = "/planets";
      return this.makeRequest(planetsFromServer)
    }

    getResidentsFromServer(number) {
      const peopleFromServer = `/people/${number}`;
      return this.makeRequest(peopleFromServer)
    }
  
  }
  
  export const api = new Api({
    domain: "https://swapi.dev/api/",
  });
  