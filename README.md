# School home assignement

Write a client against https://api.chucknorris.io/.

Choose dynamically 3 random categories from https://api.chucknorris.io/jokes/categories.

* Make every category into separete routed view (use different design on every view).
* On every view list the 5 random jokes in that specific category.
* Implement app-state and collect the already seen jokes into array. Display all already seen jokes on homepage.


# chk-norris

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app in production mode

    npm run build

It builds all files to dist folder. To deploy to production server, copy all the `dist/*` files to production root folder.

For example
```
dist/index.html
dist/foo.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/foo.12345.js
```


## Analyze webpack bundle

    npm run analyze
