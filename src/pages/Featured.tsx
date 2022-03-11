import * as React from "react";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";

type FeaturedResponse = {
  _id: string;
  youtubeID: string;
  role: string;
  date: Date;
  title: string;
  order: number;
};

const Featured = () => {
  const { run, data: featuredInfo } = useAsync<FeaturedResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    run(
      sanityClient.fetch(
        `*[_type == "featured"] | order(order asc) {
  				_id,
          title,
          youtubeID,
          role,
          date,
          order
  			}`
      )
    ).catch((errors: string) => {
      throw Error(errors);
    });
  }, [run]);

  if (!featuredInfo) return null;

  return (
    <main id="featured">
      <h2>Videos I Edited</h2>

      {featuredInfo.map((item, index, array) => {
        return (
          <React.Fragment key={item._id}>
            <div className="iframe-video">
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeID}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                className="iframe-caption"
                href={`https://www.youtube.com/watch?v=${item.youtubeID}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
              <p>
                {item.role} • {item.date}
              </p>
            </div>

            {index === array.length - 1 ? null : (
              <hr className="horizontal-line" />
            )}
          </React.Fragment>
        );
      })}
    </main>
  );
};

export { Featured };
