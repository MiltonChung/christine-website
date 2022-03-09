import * as React from "react";
import { Link } from "react-router-dom";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { SanityImage } from "../types/common";
import { PortableTextBlock } from "@portabletext/types";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";

type FilmsResponse = {
  _id: string;
  id: number;
  year: string;
  triggerWarning: string;
  title: string;
  role: string;
  mainImage: SanityImage;
  link: string;
  length: string;
  image1: SanityImage;
  image2: SanityImage;
  genre: string;
  description1: PortableTextBlock;
  description2?: PortableTextBlock;
  credits: PortableTextBlock;
};

const Films = () => {
  const { run, data: filmsInfo } = useAsync<FilmsResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

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
    ).catch((errors: string) => {
      throw Error(errors);
    });
  }, [run]);

  return (
    <main id="films">
      <h2>Films I Produced</h2>

      <div className="films-showcase">
        {filmsInfo
          ? filmsInfo.map((film) => {
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
          : "loading"}
      </div>
    </main>
  );
};

export { Films };
