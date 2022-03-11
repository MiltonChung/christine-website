import * as React from "react";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { SanityImage } from "../types/common";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { ReactComponent as ExternalLinkIcon } from "../assets/icons/externalLink.svg";

export type CollaborationResponse = {
  _id: string;
  id: number;
  title: string;
  mainImage: SanityImage;
  link: string;
  description: PortableTextBlock;
};

const Other = () => {
  const { run, data: collaborationInfo } = useAsync<CollaborationResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    run(
      sanityClient.fetch(
        `*[_type == "collaboration"] | order(order asc) {
  				_id,
          order,
  			  title,
          mainImage{
						asset->{
							_id,
							url
						},
            alt
					},
          link,
          description,
  			}`
      )
    ).catch((errors: string) => {
      throw Error(errors);
    });
  }, [run]);

  if (!collaborationInfo) return null;

  return (
    <main id="other">
      <h2>Collaborations</h2>

      <div className="collaborations-container">
        {collaborationInfo.map((data) => {
          return (
            <div className="collaboration" key={data._id}>
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="left-pane"
              >
                <img src={data.mainImage.asset.url} alt={data.mainImage.alt} />
              </a>
              <div className="right-pane">
                <div className="collaboration-info">
                  <h4>{data.title}</h4>
                  <PortableText value={data.description} />
                </div>

                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-button collab-btn"
                >
                  Check it out! <ExternalLinkIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export { Other };
