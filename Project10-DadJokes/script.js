const joke = document.querySelector(".joke")
const jokeBtn = document.querySelector(".jokeBtn")

const generateJoke = async () => {
    const config = {headers: { Accept: "application/json"},}
    const res = await fetch("https://icanhazdadjoke.com/", config)
    const data = await res.json()
    joke.innerHTML = data.joke
}
setTimeout(generateJoke, "2000")

jokeBtn.addEventListener("click", () => {
  generateJoke()
})