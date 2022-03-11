import * as React from "react";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { SanityImage } from "../types/common";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

type HomeResponse = {
  _id: string;
  mainImage: SanityImage;
  aboutMe: PortableTextBlock;
};

const Home = () => {
  const { run, data: homeInfo, isLoading } = useAsync<HomeResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    run(
      sanityClient.fetch(
        `*[_type == "home"] {
  				_id,
          mainImage{
						asset->{
							_id,
							url
						},
            alt
					},
          aboutMe
  			}`
      )
    ).catch((errors: string) => {
      throw Error(errors);
    });
  }, [run]);

  if (isLoading || !homeInfo) return null;

  const { mainImage, aboutMe } = homeInfo[0];

  return (
    <main id="home">
      <img
        className="home-landing"
        src={mainImage.asset.url}
        alt={mainImage.alt}
      />

      <section className="home-intro">
        <h2 className="home-section__title">About Me</h2>

        <PortableText value={aboutMe} />

        <p className="home-section__body"></p>
      </section>
    </main>
  );
};

export { Home };
