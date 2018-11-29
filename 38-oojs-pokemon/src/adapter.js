class JSONAPIAdapter {
  constructor(endpoint) {
    this.endpoint = endpoint
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  getAll() {
    return fetch(this.endpoint, { method: 'GET' })
  }

  getSingleItem(id) {
    return fetch(`${this.endpoint}/${id}`)
  }

  createItem(body) {
    // { name: 'bulbasaur', sprites: { front: '', back: ''} }
    return fetch(this.endpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })

  }
}
