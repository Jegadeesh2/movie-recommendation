import React from 'react'
import { image_api } from '../config'
import { Link } from 'react-router-dom'
import noPoster from '../assets/noPoster.jpg'
import {AiFillStar} from 'react-icons/ai'

const Movie = ({movies}) => {
  return (
    <div className='movies'>
    {movies.map((movie)=>(
    <div className="card" key={movie.id}>
    <Link to={`/details/${movie.id}`}>
    <img src={movie.poster_path===null ? noPoster : image_api + movie.poster_path} alt='No Poster' className="poster-image" />
    <div className="movie-dsc">
    <span className='movie-title'>{movie.title}</span>
    <p>{movie.release_date}</p>
    </div>
    <div className='movie-rating'>{movie.vote_average.toFixed(1)}<AiFillStar className='rating-icon'/></div>
    </Link>
    </div>
    )) 
  }
    </div>
  )
}

export default Movie;