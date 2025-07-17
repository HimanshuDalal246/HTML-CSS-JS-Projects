let sounds = []
const buttons = document.getElementById("buttons")
const container = document.querySelector(".container")
const container_child = container.childNodes

for (let i = 1; i <= container.childElementCount*2; i+=2) {
    sounds.push(container_child[i].id)
}

const stopSounds = () => {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause()
    document.getElementById(sound).currentTime = 0
  })
}

sounds.forEach((sound) => {
  const btn = document.createElement("button")
  btn.innerText = sound
  btn.classList.add("btn")
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play()
  })
  buttons.appendChild(btn)
})
