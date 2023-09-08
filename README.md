# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [ solution URL here](https://your-solution-url.com)
- Live Site URL: [live site URL here](https://that-loui.github.io/frontend-mentor-homepage)
- repo link URL:[repo](https://github.com/that-loui/frontend-mentor-homepage)

## My process

I built the html using the design provided i built it with a mobile first approach this time, the i also styled the components using a mobile first approach to it. The i added javascript for the functionality of the navigation on mobile screens.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I practiced developing a main page / home page for a site

```css
.menu {
  display: none;
  position: absolute;
  top: 0;
  right: -30px;
  height: 100vh;
  width: 0;
  padding: 0 25px;
  background-color: $second1;
  flex-direction: column;
  justify-content: start;

  .close {
    width: 25px;
    height: 25px;
    background-image: url(./assets/images/icon-menu-close.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    align-self: end;
    margin: 5px 10px 0 0;
  }
  li {
    padding: 10px 0;
    width: 100%;
  }
  .first {
    margin-top: 4rem;
  }
  a {
    color: $second4;
    &:hover {
      color: $primary2;
    }
  }
}
.active {
  display: flex;
  width: 200px;
  transition: all 1s ease-in-out;
}
```

## Author

- Frontend Mentor - [@that_loui](https://www.frontendmentor.io/profile/that_loui)
- Twitter - [@LMacjob](https://www.twitter.com/LMacjob)
