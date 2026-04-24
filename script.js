const fetchData = () => {
    fetch(`http://localhost:3000/movies`)
    .then(response => response.json())
    .then(data => {
        loadDataToPage(data)
    })
}

fetchData()

const movieListContainer = document.getElementById("movie-list-container")

const loadDataToPage = data => {
    movieListContainer.innerHTML = ""
    data.forEach(movie => {
        const liElement = document.createElement("li")
        const pElement = document.createElement("p")
        const divElement = document.createElement("div")
        const deleteButton = document.createElement("div")
        
        pElement.innerHTML = `<b>${movie.title}</b>, ${movie.year}, starring ${movie.starring[0]} and ${movie.starring[1]}.`
        divElement.innerText = movie.watched ? `WATCHED` : `NOT WATCHED YET`
        deleteButton.innerText = "×"
        deleteButton.className = "delete-button"

        deleteButton.addEventListener("click", () => {
            deleteMovie(movie.id)
        })

        liElement.appendChild(pElement)
        liElement.appendChild(divElement)
        liElement.appendChild(deleteButton)
        movieListContainer.appendChild(liElement)
    })
}

const deleteMovie = (movieId) => {
    fetch(`http://localhost:3000/movies/${movieId}`, {method: 'DELETE'})
    .then(response => response.json())
    .then(() => {
        console.log(`Deleted movie ${movieId}.`)
        fetchData()
    })
}