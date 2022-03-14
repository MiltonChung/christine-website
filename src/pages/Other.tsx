import * as React from "react";
import sanityClient from "../lib/sanity";
import { FComponent } from "../types/common";
import { useAsync } from "../hooks/useAsync";
import { CollaborationResponse } from "../App";
import { PortableText } from "@portabletext/react";
import { ReactComponent as ExternalLinkIcon } from "../assets/icons/externalLink.svg";

type OtherProps = {
  appCollaborationsData: CollaborationResponse[];
  setAppCollaborationsData: React.Dispatch<
    React.SetStateAction<CollaborationResponse[]>
  >;
};

const Other: FComponent<OtherProps> = ({
  appCollaborationsData,
  setAppCollaborationsData,
}) => {
  const { run } = useAsync<CollaborationResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    if (appCollaborationsData?.length > 0) return;

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
    )
      .then((data) => setAppCollaborationsData(data))
      .catch((errors: string) => {
        throw Error(errors);
      });
  }, [appCollaborationsData?.length, run, setAppCollaborationsData]);

  if (!appCollaborationsData) return null;

  return (
    <main id="other">
      <h2>Collaborations</h2>

      <div className="collaborations-container">
        {appCollaborationsData.map((data) => {
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
