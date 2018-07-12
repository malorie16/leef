const storyDiv = document.querySelector('#story')
const div = document.querySelector('#form')
const section_1 = document.getElementById('section-1')
const section_2 = document.getElementById('section-2')
const section_3 = document.getElementById('section-3')
const section_4 = document.getElementById('section-4')
const section_5 = document.getElementById('section-5')
const allUsers = document.getElementById('allUsers')


class Story {


  static renderGlum() {
    div.innerHTML = ''
    section_1.innerHTML = '<div class=><img src=img/glum1.svg><div class=glum1>today isn’t the best</div></div>'
    section_2.innerHTML = '<div><img src=img/glum2.svg><div class=glum2>it’s like the world is weighing me down</div></div>'
    section_3.innerHTML = '<div><img src=img/glum3.svg><div class=glum3>my friends try to visit<br> but i turn them away</div></div>'
    section_4.innerHTML = "<div><img src=img/glum4.svg><div class=glum4>oh, hello...</div></div>"
    section_5.innerHTML = '<div><img src=img/glum5.svg><div class=glum5>maybe today isn’t so bad after all</div></div>'
    const userList = document.createElement('h1')
    userList.id = 'user-label'
    userList.innerHTML = "you're never alone. here are the people who felt the same way:"
    Adapter.getStory(1)
      .then(function(story) {
        console.log(story);
        story.users.forEach(function(user) {
          $(document).ready(function(){
            var startfrom = 204;
            var endto = 255 - startfrom;
            var limit = 100;
            for(var i = 1; i <= limit; i++)
            {
                $("#allUsers :nth-child("+i+")").css("color", "rgb(255,"+Math.round(startfrom - (startfrom - endto)*(i-1)/(limit-1))+",0)");
            }
        });
        allUsers.innerHTML += `<div class='user-list' style='color:rgb( 0++, 200, 0++)'>${user.name}</div>`
      })
    })
    $('#story').append($(userList))
    //styling for glum
  }

  static renderRadiant() {
    div.innerHTML = ''

    section_1.innerHTML = '<div class=><img src=img/Radiant-1.svg><div class=radiant1>today is incredible</div></div>'
    section_2.innerHTML = '<div><img src=img/Radiant-2.svg><div class=radiant2>i feel like i can take on the world</div></div>'
    section_3.innerHTML = '<div><img src=img/Radiant-3.svg><div class=radiant3>the possibilities are endless</div></div>'
    section_4.innerHTML = "<div><img src=img/Radiant-4.svg><div class=radiant4>i just keep smiling</div></div>"
    section_5.innerHTML = '<div><img src=img/Radiant-5.svg><div class=radiant5>i can’t wait to share my glow with others</div></div>'

    const userList = document.createElement('h1')
    userList.id = 'user-label'
    userList.innerHTML = "you're never alone. here are the people who felt the same way:"
    Adapter.getStory(2)
      .then(function(story) {
        console.log(story);
        story.users.forEach(function(user) {
          $(document).ready(function(){
            var startfrom = 204;
            var endto = 255 - startfrom;
            var limit = 100;
            for(var i = 1; i <= limit; i++)
            {
                $("#allUsers :nth-child("+i+")").css("color", "rgb(255,"+Math.round(startfrom - (startfrom - endto)*(i-1)/(limit-1))+",0)");
            }
        });
        allUsers.innerHTML += `<div class='user-list' style='color:rgb( 0++, 200, 0++)'>${user.name}</div>`
      })
    })

    $('#story').append($(userList))
    //styling for radiant
  }

  static renderMeh() {
    div.innerHTML = ''
    section_1.innerHTML = '<div><img src=img/meh1.svg><div class=meh1>meh</div></div>'
    section_2.innerHTML = '<div><img src=img/meh2.svg><div class=meh2>meh</div></div>'
    section_3.innerHTML = '<div><img src=img/meh33.svg><div class=meh3>meh</div></div>'
    section_4.innerHTML = "<div><img src=img/meh4.svg><div class=meh4>everything is so meh</div></div>"
    section_5.innerHTML = '<div><img src=img/meh5.svg><div class=meh5>except for cake</div></div>'

    const userList = document.createElement('h1')
    userList.id = 'user-label'
    userList.innerHTML = "you're never alone. here are the people who felt the same way:"
    Adapter.getStory(3)
      .then(function(story) {
        console.log(story);
        story.users.forEach(function(user) {
          $(document).ready(function(){
            var startfrom = 204;
            var endto = 255 - startfrom;
            var limit = 100;
            for(var i = 1; i <= limit; i++)
            {
                $("#allUsers :nth-child("+i+")").css("color", "rgb(255,"+Math.round(startfrom - (startfrom - endto)*(i-1)/(limit-1))+",0)");
            }
        });
        allUsers.innerHTML += `<div class='user-list' style='color:rgb( 0++, 200, 0++)'>${user.name}</div>`
      })
    })

    $('#story').append($(userList))

    //styling for meh
  }


}
