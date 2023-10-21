import React from "react";
import filmsData from "../ListOfFilms/ListOfFilms";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./FilmDetai.css";
const FilmDetail = () => {
  // Lấy ID của phim từ URL sử dụng useParams
  const { id } = useParams();
  // Tìm phim với ID tương ứng trong mảng filmsData
  const film = filmsData.find((film) => film.id.toString() === id);

  // Kiểm tra xem phim có tồn tại hay không
  if (!film) {
    return <div>Film not found</div>;
  }

  // Hiển thị thông tin chi tiết phim
  return (
    <div className="film-detail">
      <img src={film.image} />
      <div className="info">
        <div className="title">{film.title}</div>
        <div className="year">
          <span>Year of Manufacture : </span>
          {film.year}
        </div>
        <div className="nation">
          <span>Nation : </span>
          {film.nation}
        </div>
        <div className="des">{film.Description}</div>
      </div>
    </div>
  );
};

export default FilmDetail;
