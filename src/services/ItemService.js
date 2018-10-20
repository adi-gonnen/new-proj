import axios from 'axios';
import uniqid from 'uniqid'
// import swal from "sweetalert";

var ITEMS = [];
const itemsSynch = [
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMzAwZTA3Y2UtMWVlMi00ZmNiLTkzZjAtYjA2YzBhMGMyYzQ2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Title: "The First Wives Club",
        Type: "movie",
        Year: "1996",
        imdbID: "tt0116313"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BN2NkZjA0OWUtZDgyMy00MjIxLWJhZTEtYjdmYzVjZTQ3YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
        Title: "Pokémon: The First Movie - Mewtwo Strikes Back",
        Type: "movie",
        Year: "1998",
        imdbID: "tt0190641"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMzM1OTI4NDM4Nl5BMl5BanBnXkFtZTgwMDAwODg2NDM@._V1_SX300.jpg",
        Title: "When We First Met",
        Type: "movie",
        Year: "2018",
        imdbID: "tt5783956"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BNjQyZGI3MWUtZGY5Ny00ZDFjLThjNzItYTI3ZTNhODJhNGVkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        Title: "Murder in the First",
        Type: "movie",
        Year: "1995",
        imdbID: "tt0113870"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BYmVjMWJhMTYtMzUxMC00ODdhLTk3YzMtZDFhNGUyOGFhYTY0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
        Title: "The First Purge",
        Type: "movie",
        Year: "2018",
        imdbID: "tt6133466"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMjE1MzM2NzgzNV5BMl5BanBnXkFtZTgwODU3NTI0MTI@._V1_SX300.jpg",
        Title: "Captain Underpants: The First Epic Movie",
        Type: "movie",
        Year: "2017",
        imdbID: "tt2091256"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDM1Njg2Nl5BMl5BanBnXkFtZTgwODE1MjUxNjE@._V1_SX300.jpg",
        Title: "Wet Hot American Summer: First Day of Camp",
        Type: "series",
        Year: "2015",
        imdbID: "tt4341500"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMTk5MDI5NTE4N15BMl5BanBnXkFtZTYwNjQ0NTE3._V1_SX300.jpg",
        Title: "First Daughter",
        Type: "movie",
        Year: "2004",
        imdbID: "tt0361620"
    }, 
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BZTBlYTU0OGYtNzNkNy00ZTliLTkzZTUtOGM0NDBhMDFmYTQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
        Title: "Police Story 4: First Strike",
        Type: "movie",
        Year: "1996",
        imdbID: "tt0116704"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BZDI1MGIyZDMtYjAyMy00ZWE1LTgzYjctYzM5MzczNjFjZWQwXkEyXkFqcGdeQXVyODQyNzE3MDg@._V1_SX300.jpg",
        Title: "First Reformed",
        Type: "movie",
        Year: "2017",
        imdbID: "tt6053438"
    }]

 function loadItems() {
    return axios.get(`http://www.omdbapi.com/?s=first&page=2&apikey=cf5f5d9f`)
    .then(res => {
        // console.log('service:', res.data.Search);
        ITEMS = res.data.Search;
        return ITEMS
    })
}

function getItems() {
    return itemsSynch;
}
export default {
    loadItems,
    getItems
}