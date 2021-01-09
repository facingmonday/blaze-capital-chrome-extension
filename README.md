<img src="src/assets/img/icon-128.png" width="64"/>

# Chrome Extension To Quickly Add Algo Triggers

## Features

Once the extension is installed, log into your Blaze Capital account. To add an algo trigger,
select a stock ticker by highlighting the text then click on the BC extension icon. Select
which list and timefame you'd like to add an alert for an click Save.\

## Develop

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone the repo

```
npm install
npm start
```

## Load the extension in chrome

1. Access `chrome://extensions/`
2. Check `Developer mode`
3. Click on `Load unpacked extension`
4. Select the `build` folder.

## Tools

### Generator

`npm run generate`

Generate large sections of code with a plop generator.

### Snippets

There are custom snippets configured in .vscode/javascript.code-snippets. The snippets begin with `mc_`. Tab though the available autofill fields

## Folder Structure

#### /actions

Action creator functions that are dispatched from the sagas and containers. Action types are defined as constants, imported
from the domains constants config.

#### /api

All api requests for a domain should exist here. The api function uses the native fetch method. The response should handle a valid response,
all other response should throw an error to be handled by the saga.

#### /components

Presentational components. There are some base components included in the boilerplate which can be modified. App specific
components will also go here.

#### /reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened,
but don't describe how the application's state changes.

[View More](https://redux.js.org/basics/reducers)

#### /sagas

`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

[View More](https://github.com/redux-saga/redux-saga)

#### /selectors

The boilerplate uses Reselect as a memoized selection library.

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.

[View More](https://github.com/reduxjs/reselect)
