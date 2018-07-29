class StoryController {

  static welcome() {
   const form = `<form id='welcome'>
   <label>what's your name?</label><br>
   <input type='text' id='name-input' spellcheck: 'false'><br>
   <input type='submit' id='submit' value='' class='submit-button'>
   </form>`

   const div = document.querySelector('#form')
   div.innerHTML += form
 }
}
