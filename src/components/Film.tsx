import * as React from "react";
import { FComponent } from "../types/common";
import { RouteComponentProps } from "react-router-dom";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { FilmResponse } from "../pages/Films";
import { PortableText } from "@portabletext/react";

type FilmProps = RouteComponentProps<{
  id: string;
}>;

const Film: FComponent<FilmProps> = ({ match }) => {
  const { run, data: filmInfo } = useAsync<FilmResponse>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    run(
      sanityClient.fetch(
        `*[_type == "film" && id == ${match.params.id}][0] {
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
  }, [match.params.id, run]);

  if (!filmInfo) return null;

  console.log(filmInfo);

  return (
    <main id="film">
      <div className="film-info">
        <h3>{filmInfo.title}</h3>
        <p>
          {filmInfo.length} {filmInfo.genre} {filmInfo.year}
        </p>
        <p>{filmInfo.role}</p>
      </div>

      <a
        href={filmInfo.link}
        rel="noopener noreferrer"
        target="_blank"
        className="film-link"
      >
        <div className="mask-button">
          <span className="mask">Watch film</span>
          <button type="button">Watch film</button>
        </div>
      </a>

      <div className="horizontal-line" />

      <div className="vimeo-video-container">
        <iframe
          title="vimeo"
          src="https://player.vimeo.com/video/429805601?color=ffffff&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      <div className="trigger-warning">
        <p>{filmInfo.triggerWarning}</p>
      </div>

      <div className="horizontal-line" />

      <img src={filmInfo?.image1.asset.url} alt={filmInfo.image1.alt} />

      <div className="film-text">
        <PortableText value={filmInfo.description1} />
      </div>

      <div className="horizontal-line" />

      <img src={filmInfo?.image2.asset.url} alt={filmInfo.image2.alt} />

      <div className="film-text">
        <h3>Credits: </h3>
        <PortableText value={filmInfo.credits} />
      </div>
    </main>
  );
};

export { Film };
