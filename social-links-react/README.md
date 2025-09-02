# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page
- Responsive for mobile devices

### Screenshot

![](./public/assets/images/preview-desktop.png)
![](./public/assets/images/preview-mobile.png)

### Links

- Solution URL: [Github repository](https://github.com/damayor/fm-blog-preview-card)
- Live Site URL: [Guthub Pages](https://damayor.github.io/fm-blog-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and Grid
- React
- Data component to save social media links

### What I learned

I went through the main principles of React to create a component that will be reused in this case, into a grid of buttons.

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

```css
.blog-card-content {
  padding: var(--sp-300) 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  color: var(--cl-gray-950);
}
```

### Continued development

- Enhance
- Responsive development not based on screen size.

The .blog-card-content element needs a gap: 12px; to add space between the text items.

The main card container needs a border to match the design.

## Author

- Website - [David Mayo](https://davidmayorgah.wixsite.com/visualcv?lang=en)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/damayor)
- Twitter - [@yourusername](https://www.twitter.com/damayor11)

