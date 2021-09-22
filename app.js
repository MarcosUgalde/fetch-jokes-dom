const boton = document.querySelector("button");
const joke = document.querySelector("p");
const img = document.querySelector("img");

boton.addEventListener("click", () => {
  fetch("https://meme-api.herokuapp.com/gimme/1")
    .then((res) => res.json())
    .then((data) => {
      img.src = data.memes[0].url;
    })
    .catch((e) => console.log(e));
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (joke.innerText = data.joke))
    .catch((e) => console.log(e));
});
