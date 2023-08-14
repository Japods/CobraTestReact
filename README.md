# Welcome!

Welcome to Condor's React.js assessment challenge!

Please fork the repo to start. Once finished, issue a pull request to our repo so we can review your solution.

This challenge requires:

- NodeJS (> v14.7.0)
- NPM
- A cup of ☕ or 🍵

The repo is pre-configured, so just running `npm i` you should be able to install these basic packages:

- React Router + Axios: To fetch data and navigate through the site.
- Parcel + React.js: To serve and build a simple front-end.
- Typescript: To build our app.
- Json Server: To serve and expose a basic json db.

You may use any other package of your choice to enrich your development experience, but what's already installed is mandatory to use.

In the main `package.json` you'll have access to the following scripts:

- `npm run app`: To run the react app.
- `npm run server`: To start the local db.

Finally, in the folder `web/src/types` you can find the interfaces needed to type the recieved data from the different APIs. Feel free to edit them as you see fit.

## The challenge

> _Tasks are not ordered or weighted! Before coding, read all the items carefully and prioritize as you see fit._

During the SOW meeting, our customer voiced these requests:

> We need a simple web site for our students.
>
> They should be able to select the university they are interested in and add it to a list to later compare their country's data.
>
> Nobody likes to study on a rainy day.

In response to our client's request, we made a simple Figma mockup that we need you to recreate. The images can be found in the `./graphics` folder with the name of the required screen and width, like `search`. Additionally, you may use the [basic prototype](https://www.figma.com/proto/K54hpF6ajDqzPHCQJ9xK8T/Untitled?page-id=0%3A1&node-id=3%3A694&viewport=241%2C48%2C0.25&scaling=scale-down&starting-point-node-id=3%3A694) for reference.

Since this is the only wireframe, feel free to use any ui lib or style you like.

Do note that responsiveness has to perform correctly. We won't be evaluating design quality, but responsiveness-related-code quality.

Finally, if any design element does not comply with best practices, we expect you to take care of fixing it.

## The task

Using react and the APIs referenced in the resources section, create a simple web app consisting of four screens:

1. Login: A login/register screen
1. Search: A universities search screen, with results
1. University country details

Aside from the screens, the app has to comply with the following specs:

- Search values have to be autocompleted with the correct (or close-to-correct) university name.
- A menu to go to the login page, signin page, search page, user profile, and logout; depending if the user is logged in or not.
- User data must include at least an email, password, and an universities list.
  > Use Json-server for this. Do not worry about hashing or security as this is only a basic local db. We just want to see how you handle the data.
- User session must persist.

Personal user data (like the email) may or may not be shown depending on your preference, but a way for the user to identify that he/she is logged is required.

## What we'll be looking at

- Clean, formatted, readable, KISS, DRY code
- Typescript implementation
- Commits structures and information
- Componentization and reusability
- State management
- API implementation
- UI-Logic detachment
- Error handling
- Design responsiveness
- Coding in accordance with industry best practices
- UX patterns

## Submission Guidelines

You may use any other package of your choice to enrich your development experience, but what's already installed is mandatory to use.

Once finished, issue a pull request to our repo's branch "submissions/your-name-and-lastname" so we can review your solution. If the branch is not already created, please notify us and we'll create one for you.

## Resources

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/docs/en/v6)
- [Axios](https://axios-http.com/docs/intro): Fetch client
- [Parcel](https://parceljs.org/recipes/react/)
- [JSON Server](https://github.com/typicode/json-server#getting-started)
- [Hipolabs Universities API](https://github.com/Hipo/university-domains-list-api): An API and JSON list with domains, names and countries of most of the universities of the world.
- [RestCountries](https://restcountries.com/#api-endpoints-v3-name): Rest api with countries' data like latitude and longitude.
- [7Timer](https://github.com/Yeqzids/7timer-issues/wiki/Wiki): Weather data.
