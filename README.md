# Christine's Portfolio v2

This is an updated version of Christine's portfolio. This website was made with React and Sanity.io. It was created based on her requested design and a theme of minimalism. We went through many iterations and she gave me constant feedback and updates on features/pages that she wants. I decided to use React as the front-end to practice and Sanity.io as the CMS so that she can
edit the contents of the website without the need to touch code (a win-win for the both of us).

Link: https://christinelin.netlify.app/

## Table of contents

- [About](#about)
- [Technologies](#technologies)
- [Features](#features)
- [Challenges](#challenges)
- [Setup](#setup)
- [Legacy](#legacy)

## About

This React project utilizes the basics of react like useEffect, useState, and custom hooks. Since it's a fairly simple
single purpose website, there's no need for advanced concepts. In this project, I rebuilt everything from the ground up,
only taking the older website design as a basis. I structured the project into a more easy-to-follow format (at least for me)
where SCSS and JavaScript files are separated into different folders and within each, I separated them into page layout and
component stuff. I also wanted to see how much I improved since I the first version.

## Technologies

Project is created with:

- React v17.0.2
- TypeScript
- SASS
- Sanity.io CMS

Major libraries used:

- React Router
- Emailjs-com
- React Hook Form
- React Error Boundary

## Features

- Responsive
- Email contact form emails the client directly
- Dynamic content fetched from Sanity.io
- PWA(progressive web app) friendly

## Challenges

- Haven't started a project from scratch for a while, so setting up everything correctly took longer than I anticipated
- Sanity.io query language GROQ was hard to get used to at first
- Caching the Sanity API call data so it doesn't need to call Sanity every time the user refreshes/switch pages
- Not my first time using TypeScript but first time setting up a TypeScript project

## Setup

To run this project, install it locally using npm and go into the root folder:

```
$ npm install
$ npm start
```

## Legacy

Here's the older version GitHub repository: https://github.com/MiltonChung/christine-website
Here's the older version of the website: https://christinelin1282.github.io/
