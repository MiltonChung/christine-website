import * as React from "react";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { FeaturedResponse } from "../App";
import { FComponent } from "../types/common";

type FeaturedProps = {
  appFeaturedData: FeaturedResponse[];
  setAppFeaturedData: React.Dispatch<React.SetStateAction<FeaturedResponse[]>>;
};

const Featured: FComponent<FeaturedProps> = ({
  appFeaturedData,
  setAppFeaturedData,
}) => {
  const { run } = useAsync<FeaturedResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    if (appFeaturedData?.length > 0) return;

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
    )
      .then((data) => setAppFeaturedData(data))
      .catch((errors: string) => {
        throw Error(errors);
      });
  }, [appFeaturedData?.length, run, setAppFeaturedData]);

  if (!appFeaturedData) return null;

  return (
    <main id="featured">
      <h2>Videos I Edited</h2>

      {appFeaturedData.map((item, index, array) => {
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
