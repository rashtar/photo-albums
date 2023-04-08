# Rami Ashtar

## Photo Albums

Hello and welcome to my project! This application is a simple react web application that displays albums to the user, allowing them to list the photos in each album and search for their titles in real time.

## Demo

You may find a deployed version of the application here:
https://rashtar.github.io/photo-albums/

## Setup

To set up this application locally, you can run
### `npm install`
### `npm start`

Then visit the application on `http://localhost:3000/` to get started!

In the project directory, you can run:

You may also run the automated unit & component test suites using
### `npm test`. 

Finally, you may run end-to-end testing with cypress by running. Please note that the application has to be running for the end to end tests to run:
### `npm run test:e2e`

## Tradeoffs & Assumptions made

- Used Chakra UI as the UI framework of choice
- Using a redux store to maintain the state of albums, this allows the application to make only one API call to retrieve the albums per application load
- Another benefit of the store is it provides a single source of truth for album and photo data
- I have organized the application as follows:
  - `src/app`: contains all the redux store related code
  - `src/components`: contains all the individual components that are used across the application, I designed the components to be as simple as possible and to serve a single function at a time
  - `src/pages`: contains the react components that represent the pages of the application
  - `src/utils`: contains all the exported shared functions that are requried across the application, including API calls to retrieve the project data
- I have used enzyme for component testing, with a focus on integration style testing on the page components, and unit testing on the individual components
- I am also using cypress to run end-to-end tests. I believe end-to-end tests should be as minimal as possible while smoke-testing the necessary interactions with the application
- The following end-to-end tests are available:
  - the main page shows a list of albums, and the title
  - clicking an album takes me to a page loaded with photos
  - clicking the main title on the top returns me back to the main page
  - searching for photos while in the photos page filters the page down appropriately
  
 
