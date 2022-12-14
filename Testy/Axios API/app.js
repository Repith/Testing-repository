const buttonClick = document.querySelector("#joke");
const jokeList = document.querySelector("#list");

const getJoke = async () => {
  const resolve = await axios.get("https://icanhazdadjoke.com", {
    headers: { Accept: "application/json" },
  });
  return resolve.data.joke;
};

buttonClick.addEventListener("click", async () => {
  try {
    const jokeInsert = document.createElement("li");
    jokeInsert.innerText = await getJoke();
    jokeList.append(jokeInsert);
  } catch (e) {
    const jokeInsert = document.createElement("li");
    jokeInsert.innerText = `"Jokes not available. Error:" ${e}`;
    jokeList.append(jokeInsert);
  }
});
