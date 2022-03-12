import * as React from "react";
import { HomeResponse } from "../App";
import sanityClient from "../lib/sanity";
import { useAsync } from "../hooks/useAsync";
import { FComponent } from "../types/common";
import { PortableText } from "@portabletext/react";
import { customPortableTextComponent } from "../lib/PortableTextCustom";

type HomeProps = {
  appHomeData: HomeResponse[];
  setAppHomeData: React.Dispatch<React.SetStateAction<HomeResponse[]>>;
};

const Home: FComponent<HomeProps> = ({ appHomeData, setAppHomeData }) => {
  const { run } = useAsync<HomeResponse[]>();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    if (appHomeData?.length > 0) {
      return;
    }

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
    )
      .then((data) => {
        return setAppHomeData(data);
      })
      .catch((errors: string) => {
        throw Error(errors);
      });
  }, [appHomeData, run, setAppHomeData]);

  if (!appHomeData)
    return (
      <main id="home">
        <p>loading...</p>
      </main>
    );

  const { mainImage, aboutMe } = appHomeData[0];

  return (
    <main id="home">
      <img
        className="home-landing"
        src={mainImage.asset.url}
        alt={mainImage.alt}
      />

      <section className="home-intro">
        <h2 className="home-section__title">About Me</h2>

        <PortableText
          value={aboutMe}
          components={customPortableTextComponent}
        />
      </section>
    </main>
  );
};

export { Home };
