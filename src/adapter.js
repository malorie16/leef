class Adapter {

  static getUser(id) {
    const baseUrl = `http://localhost:3000/users/${id}`
    return fetch(baseUrl)
            .then(r => r.json())
  }

  static createUser(data) {
    console.log(data);
    const baseUrl = `http://localhost:3000/users`
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(baseUrl, options)
            .then(r => r.json())
  }

  static updateUser(data) {
    const baseUrl = `http://localhost:3000/users/${data.id}`
    const options = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(baseUrl, options)
            .then(r => r.json())
  }

  static getStory(id) {
    const baseUrl = `http://localhost:3000/stories/${id}`
    return fetch(baseUrl)
            .then(r => r.json())
  }


}
