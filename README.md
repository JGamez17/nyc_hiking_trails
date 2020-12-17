# 5 Borough Trail Search

This app allows users to render a list of trails that belong to one of the five boroughs upon clicking a button. As someone who loves to hike and be in nature I decided to put together a small app that list trails all through out NYC.

This app utilizes a Rails API back-end with a SQL database, as well as a Javascript front-end.

## The Back-End

API end-points to fetch data:
"http://localhost:3000/boroughs/:id/trails" - This is a nested route and fetches trails that belong to a particular borough

"http://localhost:3000/boroughs" - makes a GET request and fetches all five boroughs

"http://localhost:3000//trails/:id" - makes a PATCH request for likes

## The Front-End

The front-end uses Javascript to asynchronously make get and patch requests to the API to populate the page with data and update the API. The data and functionality of the front-end was encapsulated in classes and methods.

To get started clone the repository, start rails server (rails s) & finally open index.html in your browser.
