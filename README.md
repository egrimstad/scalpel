# Scalpel
>*A clean cut in medical organizing*
## About
This application is made to complement the desktop program that doctors, nurses and coordinators at hospitals in Norway use to plan surgeries. It will mainly be used on a smart phone and is therefore developed with a mobile-first focus. It is developed by a team of students at NTNU for the course TDT4290.
## Dependencies
- React
- d3.js

## Starting the app
- First install dependencies using `npm install`
- Then the development server can be started using `npm start`

## Development guidelines

### Workflow
- When starting on a new issue, create a new branch and call it something descriptive. Also add a link to the branch on the trello issue.
- Commit often, use descriptive commit messages.
- Merge master into your branch often, so there won't be large conflicts.
- If you need to make a small change outside the component you are working on, make the change in the master branch, notify the team, and merge master into your branch.
- When you move the issue to QA on trello, create a pull request and link to it on trello.

### Coding style
- We use ESLint to lint our code. To test your code for linting errors, run `npm run lint`. Please make sure your code passes the linter before creating a pull request or merging. For a list of the rules refer to the file `.eslintrc.js`, the configuration file for ESLint.
- For a template on creating a React component, refer to `src/App.js`.

### Utilities
We use some popular JavaScript utility libraries to simplify development. The most important are
- Moment.js: A library for manipulating and formatting time. Docs: https://momentjs.com/docs/
- Lodash: A library containing many useful functions for manipulating arrays, strings, objects, etc.. Docs: https://lodash.com/docs/4.17.4

## IDE
The recommended IDE is Visual Studio Code. It has good support for JavaScript and React, and plenty of extensions.

### Extensions for VS Code
- ESLint: This plugin shows warnings when the code does not pass the linter, and can even autolint on save.
- Debugger for Chrome: This plugin can connect to a Chrome instance running our app, so you can debug directly in VS Code.
- Path Intellisense: Understands relative paths, so you get code completion when importing components and files.
