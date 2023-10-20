import filmsData from "../../ListOfFilms/ListOfFilms";
import "./Detail.css";
function Detail() {
  return (
    <div>
      {filmsData.map((film) => {
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
      })}
    </div>
  );
}

export default Detail;
