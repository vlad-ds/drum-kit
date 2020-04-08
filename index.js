let buttons = document.querySelectorAll('.set button')
var keys = ['w', 'a', 's', 'd', 'j', 'k', 'l']
let sounds = ['tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3',
              'crash.mp3', 'kick-bass.mp3', 'snare.mp3']

for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    this.classList.add('pressed')
    setTimeout(() => {buttons[i].classList.remove('pressed')}, 100)


    let audio = new Audio('sounds/' + sounds[i])
    audio.play()
  })
}

document.addEventListener('keydown', function(event){
    index = keys.indexOf(event.key)
    if(index > -1){
      buttons[index].click()
    }
})
