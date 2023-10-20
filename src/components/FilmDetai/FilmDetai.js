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
    <div className="container">
      <div className="detail">
        <div className="image">
          <img src={film.image} alt={film.title} />
        </div>{" "}
        <br />
        <div className="param">
          <h2>{film.title}</h2>
          <p>Year: {film.year}</p>
          <p>Nation: {film.nation}</p>
        </div>
        <div className="backButton">
          <Link className="back" to="/films">
            <ArrowBackIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
