# Full-Stack Developer Coding Challenge

## Overview
This coding challenge is designed to assess your skills in building a frontend applications using Angular. You will create a web application that displays data about Star Wars films, fetched from an external API.

## Task Description
Your task is to build a Single Page Application (SPA) that displays a list of Star Wars films. The frontend should make a call to the Star Wars API. 

Based on your preference and comfort level with either REST or GraphQL, select the appropriate API to integrate with.

1. **REST API Implementation:** Use the [SWAPI - The Star Wars API](https://swapi.dev/).
2. **GraphQL Implementation:** Use the [Star Wars API on Apollo Studio](https://studio.apollographql.com/public/star-wars-swapi/variant/current/home).

### Frontend (Angular)
- Create an interface with a button to fetch Star Wars `films` (e.g. https://swapi.dev/api/films if using REST).
- Display the fetched film data in a table format.
- Fetch film data from the chosen Star Wars API (REST or GraphQL).
- Manipulate and return the data to the frontend.
  - Left to the discretion of the developer.  But this can be done by:
    - Sorting the data by a given field
    - Mapping data (e.g. first sentence of `opening_crawl`)
    - Filtering data

## Requirements
- **Functionality:** The application should work as expected, fetching and displaying Star Wars films.
- **Code Quality:** Your code should be clean, well-organized, and commented where necessary.
- **Error Handling:** Implement appropriate error handling in frontend.

## Bonus (Optional)
- Enhance the UI/UX with a UI framework or custom styles.
- Write tests for key parts of your application.

## Setup and Running the Application
- Instructions on setting up and running the Angular and NestJS applications.
  - Make sure you have Node v18 
  - Using CLI
    - Make sure you have Nest CLI
      - `npm install -g @nestjs/cli`
    - To start frontend, call `ng serve`
  - Using IDE
    - frontend/package.json
      - Run `start` script

## Submission
- Fork this repo to start building your implementation
- Push your code to a GitHub repository and provide the link for review.
- Ensure your repository includes a README with any other necessary documentation.

## Evaluation
Your submission will be evaluated based on functionality, code quality, adherence to best practices, and documentation. The use of either the REST or GraphQL API will not impact the evaluation, as long as the chosen API is implemented effectively.
