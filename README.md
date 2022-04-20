# Angular POC - Hacker News

This is an Angular POC which uses the [Hacker News API](https://github.com/HackerNews/API) and imitates basic functionalities of the [Hacker News](https://news.ycombinator.com/) website

## Requirements

- Node v14
- Angular v13

## Running the Application

Install the application

```
npm run i
```

Serve the application to http://localhost:4200

```
npm run start
```

Run the unit tests

```
npm run test
```

## Angular Features Demonstrated

Unit-tests, responsive design, lazy-loading routing, resolvers, pipes, services, shared components.

## Skipped features

- Anything related to Users has not been implemented.
- Only Stories have functioning links. The Top Stories endpoint may serve Ask HN entities. These are rendered but not linked to.
- Only Top Stories are displayed, and they are limited to only the top 5.
- Sub-comments, for the sake of brevity, only 3 comments are displayed without their sub-comments.
- Did not implement CSS variables for streamlined styling.
- More thorough unit-tests around the edge cases of not having enough comments or stories.
- More thorough unit-tests around the resolvers failing due to an absent parameter.
- Unit-tests around the formatting of the amount of time ago.
