class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.story_id = user.story_id
  }



  feeling() {
    return `<form id='feeling'>
    <label>nice to meet you, ${this.name}. how are you feeling?</label><br>
    <input type='text' id='feel-input' spellcheck: 'false'><br>
    <input type='submit' value='' class='submit-button'>
    </form>`
  }

  render() {
    //for rendering each user at the end of each story. will be passed to each iteration
    return `<div data-id='${this.id}'>${this.name}</div>`
  }

}
