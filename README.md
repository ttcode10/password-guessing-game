# Project preview
![Web version](https://i.ibb.co/yXkk2RG/Web.png)
![Mobile version](https://i.ibb.co/R2smD9B/Mobile.png)

# How to run the project

The data already stored in online DB (MongoDB Atlas). To run the project, clone the files into your computer, enter the project directory and input the following script in the console:

1. cd server
2. npm start

then both the client and server should be running concurrently.

# File structure
The following links cannot access to the actual files (because they are not absolute path).

## Client-side
* [apis/](./src/apis)
  * [apis.js](./src/apis/apis.js)
  * [index.js](./src/apis/index.js)
* [components/](./src/components)
  * [BorderBox.jsx](./src/components/BorderBox.jsx)
  * [Button.jsx](./src/components/Button.jsx)
  * [Header.jsx](./src/components/Header.jsx)
  * [Input.jsx](./src/components/Input.jsx)
  * [Typography.jsx](./src/components/Typography.jsx)
  * [index.js](./src/components/index.js)
* [pages/](./src/pages)
  * [Home/](./src/pages/Home)
    * [__test__/](./src/pages/Home/__test__)
      * [Home.test.jsx](./src/pages/Home/__test__/Home.test.jsx)
    * [components/](./src/pages/Home/components)
      * [AnswerBox.jsx](./src/pages/Home/components/AnswerBox.jsx)
      * [index.js](./src/pages/Home/components/index.js)
    * [Home.jsx](./src/pages/Home/Home.jsx)
    * [index.js](./src/pages/Home/index.js)
  * [index.js](./src/pages/index.js)
* [themes/](./src/themes)
  * [index.js](./src/themes/index.js)
  * [themes.js](./src/themes/themes.js)
* [utils/](./src/utils)
  * [formatter.js](./src/utils/formatter.js)
  * [index.js](./src/utils/index.js)
* [App.jsx](./src/App.jsx)
* [index.css](./src/index.css)
* [index.jsx](./src/index.jsx)
* [setupTests.js](./src/setupTests.js)

## Server-side

* [controllers/](./src/controllers)
  * [password.js](./src/controllers/password.js)
* [models/](./src/models)
  * [Password.js](./src/models/Password.js)
* [routes/](./src/routes)
  * [password.js](./src/routes/password.js)
* [utils/](./src/utils)
  * [db.js](./src/utils/db.js)
* [routes.js](./src/routes.js)
* [server.js](./src/server.js)


# Development Iteration

I followed these steps to iterate the app:

1. **Development environment setup.**
Setup the development environment, including:
  [Client-side] create-react-app, add styled-components, eslint, prettier.
  [Server-side] node.js, express, mongoDB atlas

2. **Define global themes and public components.**
2.1 Set basic theme elements for global usage, including colors, font-family to promote consistent styles across the app.
2.2 Build public components, such as button, input, header.
2.3 Combine shared components to build static pages.

3. **Backend infrasture.**
Build backend models, controllers, routes.

4. **User interactions.**
Build user interactive features (input password, clear input, submit password)

5. **Connect frontend and backend.**
Integrate axios to enable FE-BE API communications.

6. **Testing.**
Add testing script to check if all the elements are correctly rendered.