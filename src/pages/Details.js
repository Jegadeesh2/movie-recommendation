import React, { useState, useEffect } from "react";
import { main_api, api_key, image_api } from "../config";
import { useParams } from "react-router-dom";
import noPoster from "../assets/noPoster.jpg";
import {AiFillStar} from 'react-icons/ai'


const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(main_api + `${id}?` + api_key)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        console.log(data);
      })
      .catch((err) => console.log("Error in getting movies", err));
  }, [id]);

  if (!detail) {
    return (
      <div className="loading">
        <div className="loader"></div>
        <h5>Loading, Please wait..</h5>
      </div>
    );
  }

  return (
    <div className="details">
        <div className="image-container">
          <img
            src={
              detail.poster_path === null
                ? noPoster
                : image_api + detail.poster_path
            }
            className="detail-poster"
          />
        </div>
        <div className="detail-dsc">
          <h1 className="detail-title">{detail.title} <span className="detail-overview"> ({detail.original_language})</span></h1>
          <p>{detail.release_date}</p>
          <p className="detail-rating">{detail.vote_average} <AiFillStar className='rating-icon'/> </p>
          <p className="detail-overview">{detail.overview}</p>
        </div>
    </div>
  );
};

export default Details;
