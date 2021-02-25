# Get start

This project was developed by React. To view the project, in the root directory, you can run:

1. ### `npm install` 
2. ### `npm start`
Then you can view the project on http://localhost:3000


# Explanation
1. The project was only tested on Google Chrome, please view it through Chrome. In case any env issues when running the project, you can also view it on https://dribbble-challenge.herokuapp.com/ 
2. Due to the time limitation, I did not implement responsive images.
3. As everything is a component in React, I prefer to use Styled-component rather than SCSS. To some degree, they are both better alternative solutions of CSS.
4. A nice codebase should not have any unnecessary comments and documentation if it has proper namings and well organized.

# Solutions
## Divide the page into components
The page is just simplely to show a bunch of shots. Each ShotComponent is composed by MediaComponent(image or video), TitleComponent, AuthorComponent and CommentsAndLiksComponents. 
## Make the page responsive
With the help of flex and media query in CSS, the page has different organizations depending on the page resolution.

# Questions from Stretch goals
## What could you do to optimize performance on this page? 
 As there are a lot of images on this page, it may slow down the website. To reduce the image size is to use the HTML responsive images, which can adjust image size based on user display properties.
 
 Besides, when loading images, if showing a spinner, users can get better experience.

## What components could be extracted to be reused elsewhere on the site? 
ShotCommentsAndLikesComponent can be extracted to be a pure SocialStatisticComponent if the page has more other social statsitic information.

If I have time working on responsive images, the responsive image components will also be extracted.

