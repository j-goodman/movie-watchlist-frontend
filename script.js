fetch(`http://localhost:3000/movies`)
.then(response => response.json())
.then(data => {
    console.log(data)
    loadDataToPage(data)
})

const movieListContainer = document.getElementById("movie-list-container")

const loadDataToPage = data => {
    data.forEach(movie => {
        const liElement = document.createElement("li")
        const pElement = document.createElement("p")
        const divElement = document.createElement("div")
        pElement.innerHTML = `<b>${movie.title}</b>, ${movie.year}, starring ${movie.starring[0]} and ${movie.starring[1]}.`
        divElement.innerText = movie.watched ? `WATCHED` : `NOT WATCHED YET`
        liElement.appendChild(pElement)
        liElement.appendChild(divElement)
        movieListContainer.appendChild(liElement)
    })
}