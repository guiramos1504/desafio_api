import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

function getMovie() {
  const numberMovie = Math.floor(Math.random() * 700000);
  const url = BASE_URL + numberMovie + '?' + API_KEY

  axios.get(url)
    .then(response => {
      const responseTitle = response.data.original_title
      const responseOverview = response.data.overview
      const linkImage = IMG_URL + response.data.poster_path
      console.log(linkImage)
      document.getElementById("showIMGMovie").innerHTML = '<img src=' + linkImage + '>';
      document.getElementById("movieTitle").innerText = responseTitle
      document.getElementById("movieDescription").innerText = responseOverview
    })
    .catch(
      error =>
      console.log("ERRO ENCONTRADO:",error))
      document.getElementById("showIMGMovie").innerHTML = '<img src="./assets/corrupedfile.jpg" alt="">';
      document.getElementById("movieTitle").innerText = "Filme não encontrado"
      document.getElementById("movieDescription").innerText = "Um erro impossibilitou a exibição do filme." + "\n" + "Tente novamente."
} 


const searchButton = document.getElementById('areaButton')
searchButton.addEventListener('mouseup', getMovie)

