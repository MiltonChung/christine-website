import * as React from "react";
import { FilmResponse } from "../App";
import { Link } from "react-router-dom";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { FComponent } from "../types/common";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";

type FilmsProps = {
  appFilmsData: FilmResponse[];
  setAppFilmsData: React.Dispatch<React.SetStateAction<FilmResponse[]>>;
};

const Films: FComponent<FilmsProps> = ({ appFilmsData, setAppFilmsData }) => {
  const { run } = useAsync<FilmResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    if (appFilmsData?.length > 0) return;

    run(
      sanityClient.fetch(
        `*[_type == "film"] | order(id asc) {
  				_id,
          id,
  			  title,
          mainImage{
						asset->{
							_id,
							url
						},
            alt
					},
          year,
          length,
          genre,
          role,
          link,
          triggerWarning,
          image1 {
						asset->{
							_id,
							url
						},
            alt
					},
          description1,
          image2 {
						asset->{
							_id,
							url
						},
            alt
					},
          description2,
          credits
  			}`
      )
    )
      .then((data) => setAppFilmsData(data))
      .catch((errors: string) => {
        throw Error(errors);
      });
  }, [appFilmsData?.length, run, setAppFilmsData]);

  return (
    <main id="films">
      <h2>Films I Produced</h2>

      <div className="films-showcase">
        {appFilmsData
          ? appFilmsData.map((film) => {
              return (
                <div className="film" key={film._id}>
                  <Link className="film-img" to={`/films/${film.id}`}>
                    <img
                      src={film.mainImage.asset.url}
                      alt={film.mainImage.alt}
                    />
                  </Link>
                  <div className="film-info">
                    <Link className="film-caption" to={`/films/${film.id}`}>
                      {film.title} <span>({film.year})</span>
                    </Link>
                    <Link to={`/films/${film.id}`}>
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              );
            })
          : "loading..."}
      </div>
    </main>
  );
};

export { Films };
