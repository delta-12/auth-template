# TODO

## Frontend

- [ ] `createStore` deprecated. Fix in `store.js`
- [x] replace former `componentWillReceiveProps` to handle errors in `Accounts.js`, `Login.js`, and `Register.js`
- [ ] improve error handling in `Accounts.js`, `Login.js`, and `Register.js` to prevent componentDidUpdate from re-rending twice when checking for changes in errors
- [ ] update `Route`s in `App.js` to match react router dom 6
- [ ] secure Dashboard route

## Backend

- [ ] verify that private backend routes cannot be used without authentication
