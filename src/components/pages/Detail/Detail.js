import filmsData from "../../ListOfFilms/ListOfFilms";

function Detail() {
  return (
    <div>
      {filmsData.map((film) => {
        return (
          <div className="film-detail">
            <img src={film.Image} />
            <div className="info">
              <div className="title">{film.Title}</div>
              <div className="year">
                <span>Year of Manufacture : </span>
                {film.Year}
              </div>
              <div className="nation">
                <span>Nation : </span>
                {film.Nation}
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
