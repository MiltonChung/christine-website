import * as React from "react";

const Featured = () => {
  return (
    <main id="featured">
      <h2>Videos I Edited</h2>

      <div className="iframe-video">
        <div className="iframe-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/f7CB2Q8UCTc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="iframe-caption"
          href="https://www.youtube.com/watch?v=f7CB2Q8UCTc"
          target="_blank"
          rel="noreferrer"
        >
          "Shang-Chi" Kicks Open Doors for the Future of the MCU with Simu Liu,
          Awkwafina and More
        </a>
        <p>Video Editor • Aug 31, 2021</p>
      </div>

      <hr className="horizontal-line" />

      <div className="iframe-video">
        <div className="iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/T7ojwpSBJWQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="iframe-caption"
          href="https://www.youtube.com/watch?v=T7ojwpSBJWQ"
          target="_blank"
          rel="noreferrer"
        >
          Nico Hiraga Is Your New Hollywood Crush | Behind The Scenes Feature
          Shoot
        </a>
        <p>Video Editor • Sep 29, 2021</p>
      </div>

      <hr className="horizontal-line" />

      <div className="iframe-video">
        <div className="iframe-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aPFmc56ysww"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="iframe-caption"
          href="https://www.youtube.com/watch?v=aPFmc56ysww"
          target="_blank"
          rel="noreferrer"
        >
          “Never Have I Ever” Ramona Young & “Atypical” Nik Dodani || Character
          Conversations
        </a>
        <p>Video Editor • Aug 12, 2021</p>
      </div>

      <hr className="horizontal-line" />

      <div className="iframe-video">
        <div className="iframe-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TNS08Iaz8Jc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="iframe-caption"
          href="https://www.youtube.com/watch?v=TNS08Iaz8Jc"
          target="_blank"
          rel="noreferrer"
        >
          Jessie Mei Li Brings the Cast Of "Shadow and Bone" Into the Spotlight
        </a>
        <p>Video Editor • Apr 16, 2021</p>
      </div>

      <hr className="horizontal-line" />

      <div className="iframe-video">
        <div className="iframe-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZZuKr1ZWYnA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="iframe-caption"
          href="https://www.youtube.com/watch?v=ZZuKr1ZWYnA"
          target="_blank"
          rel="noreferrer"
        >
          Heirloom: Osric Chau's Mom's Congee
        </a>
        <p>Video Editor • May 11, 2021</p>
      </div>
    </main>
  );
};

export { Featured };
