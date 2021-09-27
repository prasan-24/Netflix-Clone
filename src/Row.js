import React, { useState , useEffect } from "react";
import YouTube from "react-youtube";
// import axios from "axios";
import instance from "./axios";
import './Row.css';
import movieTrailer from 'movie-trailer';

const baseUrl = "http://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl , isLargeRow}) {

    const [movie, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height:"390",
        width : "100%",
        playerVars: {
            autoplay:1
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url)=>{
                console.log(movie);
                const urlParams = new URL(url).search;
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
                {movie.map(movie => {
                  return  <img key={movie.id} onClick={() =>handleClick(movie)} className="row_poster" src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
            {trailerUrl &&
            <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;