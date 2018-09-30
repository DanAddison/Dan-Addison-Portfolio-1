# For The Whim

My static site boilerplate.

It uses Nunjucks templating.

Gulp handles the templates as well as compiling and optimising Sass, JS, HTML, and images. Also includes browser sync.

Run 'gulp' as default task for development. Work inside the 'app' directory.

Run 'gulp build' to create the 'dist' folder, for deployment to a live server *

*note: I never have to run gulp build because I am deploying with Netlify, so they run the build process whenever detecting an update to the GitHub repo. Therefore I don't even need a 'dist' folder in my repo.
*note: scripts and stylesheets need to be defined between <!-- build --> comment tags in the HTML files, for the gulp 'useref' task to minify and add them to 'dist'

This Gulp file is based upon this extremely helpful article: https://css-tricks.com/gulp-for-beginners/ 
The repo for their finished gulpfile is here: https://github.com/zellwk/gulp-starter-csstricks

## Improvements to my gulp process which I intend to introduce:
* Sass globbing so I don't have to list out every file in main.scss
* Sourcemaps
* Autoprefixing
