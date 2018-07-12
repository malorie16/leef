function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll, 20);
}

document.addEventListener('DOMContentLoaded', () => {

  StoryController.welcome()


  const form = document.querySelector('#welcome')
  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const input = document.querySelector('#name-input')
    const id = document.querySelector('#submit')

    console.log(input.value);

    if (input.value) {
      Adapter.createUser({name: input.value})
        .then(user => {
          const newUser = new User(user)
        const div = document.querySelector('#form')
        const h1 = document.createElement('h1')
        const secondH1 = document.createElement('span')
        const thirdH1 = document.createElement('span')
        const fourthH1 = document.createElement('span')
        h1.className = 'choose'
        secondH1.className = 'glum-span'
        thirdH1.className = 'radiant-span'
        fourthH1.className = 'meh-span'
        h1.innerText = 'choose one:'
        secondH1.innerText = 'glum '
        thirdH1.innerText = 'radiant '
        fourthH1.innerText = 'meh '
        document.body.insertBefore(h1, div)
        document.body.insertBefore(secondH1, div)
        document.body.insertBefore(thirdH1, div)
        document.body.insertBefore(fourthH1, div)
        div.innerHTML = newUser.feeling()
        const feelForm = document.querySelector('#feeling')

        feelForm.addEventListener('submit', function(e) {
          e.preventDefault()
          h1.remove()
          secondH1.remove()
          thirdH1.remove()
          fourthH1.remove()
          const feelInput = document.querySelector('#feel-input')
          if (feelInput.value) {
          switch(feelInput.value) {
            case 'glum':
              Adapter.updateUser({id: newUser.id, story_id: 1})
              Story.renderGlum()
              break;
            case 'radiant':
              Adapter.updateUser({id: newUser.id, story_id: 2})
              Story.renderRadiant()
              break;
            case 'meh':
            Adapter.updateUser({id: newUser.id, story_id: 3})
              Story.renderMeh()
              break;
          }
          const delay = setTimeout(pageScroll, 2000)
          delay
        }
        })
      })
    }
  })




})
