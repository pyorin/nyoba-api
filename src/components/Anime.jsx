import { useState } from "react";

const Anime = () => {
  const [animeInput, setAnimeInput] = useState("");
  const [animeData, setAnimeData] = useState();

  const api = `https://api.jikan.moe/v4/anime?q=${animeInput}&limit=5`;

  const searchAnime = async () => {
    const response = await fetch(api);
    const json = await response.json();
    setAnimeData(json.data);
  };

  return (
    <div className="container">
      <h1 className="text-center">Anime</h1>
      <div className="search d-flex justify-content-center">
        <input
          type="search"
          placeholder="Search anime"
          onChange={(e) => setAnimeInput(e.target.value)}
        />
        <button onClick={searchAnime} className="btn btn-primary ms-2">
          Search
        </button>
      </div>
      <div className="row">
        {animeData && animeData.length > 0
          ? animeData.map((animeData) => (
              <div className="col-md-4 mt-2 mb-2" key={animeData.mal_id}>
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={animeData.images.jpg.large_image_url}
                      alt="animebanner"
                      width="300px"
                      height="300px"
                    />
                    <h5 className="card-title">{animeData.title}</h5>
                    <p className="card-text">
                      Type: {animeData.type}
                      <br />
                      Source: {animeData.source}
                      <br />
                      Episode: {animeData.episodes}
                      <br />
                      Rating: {animeData.rating}
                      <br />
                      Score: {animeData.score}
                      <br />
                      Popularity: {animeData.popularity}
                      <br />
                      Members: {animeData.members}
                      <br />
                    </p>
                    <a
                      href={animeData.url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See details
                    </a>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Anime;
