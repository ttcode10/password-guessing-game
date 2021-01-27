# Project preview
![Web version](https://i.ibb.co/yXkk2RG/Web.png)
![Mobile version](https://i.ibb.co/R2smD9B/Mobile.png)

# How to run the project

The data already stored in online DB (MongoDB Atlas). To run the project, clone the files into your computer, enter the project directory and input the following script in the console:

1. cd server
2. npm start

then both the client and server should be running concurrently.

# File structure

## Client-side
src/
┣ apis/
┃ ┣ apis.js
┃ ┗ index.js
┣ components/
┃ ┣ BorderBox.jsx
┃ ┣ Button.jsx
┃ ┣ Header.jsx
┃ ┣ Input.jsx
┃ ┣ Typography.jsx
┃ ┗ index.js
┣ pages/
┃ ┣ Home/
┃ ┃ ┣ __test__/
┃ ┃ ┃ ┗ Home.test.jsx
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ AnswerBox.jsx
┃ ┃ ┃ ┗ index.js
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ index.js
┃ ┗ index.js
┣ themes/
┃ ┣ index.js
┃ ┗ themes.js
┣ utils/
┃ ┣ formatter.js
┃ ┗ index.js
┣ App.jsx
┣ index.css
┣ index.jsx
┗ setupTests.js
## Server-side

src/
┣ controllers/
┃ ┗ password.js
┣ models/
┃ ┗ Password.js
┣ routes/
┃ ┗ password.js
┣ utils/
┃ ┗ db.js
┣ routes.js
┗ server.js


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