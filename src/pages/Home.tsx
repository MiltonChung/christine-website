import * as React from "react";
import HomeLanding from "../assets/images/home_landing.png";

const Home = () => {
  return (
    <main id="home">
      <img className="home-landing" src={HomeLanding} alt="Christine Landing" />

      <section className="home-intro">
        <h2 className="home-section__title">About Me</h2>
        <p className="home-section__body">
          Hi! My name is Christine Lin and I am a recent graduate from
          University of California Santa Cruz with a Bachelor's of Science in
          Computer Science and Bachelor's of Arts in Film. I have a very cute
          dog and her name is Ellie. I love her so much she is my everything and
          my world.
        </p>
        <p className="home-section__body">
          I'm passionate about the process of creating and editing films to
          present it to the world. I also love using this media as a form of
          self-expression where I can express my emotions through my works. It
          allows me to communicate my ideas through my works that I would
          otherwise not be able to normally.
        </p>
        <p className="home-section__body">
          Ever since I was a child, I was fascinated by all the different movies
          and the was they portrayed the story. Movies with deep meaning/stories
          are my favorite because it shows how powerful this creative space is.
        </p>
        <p className="home-section__body">
          I have experience as a director, writer, editor, cinematographer, and
          producer. I've helped with many of my friends' films as well. My goal
          is to become a filmmaker that will leave a mark in the world.
        </p>
        <p className="home-section__body">Feel free to reach out to me!</p>
      </section>
    </main>
  );
};

export { Home };
