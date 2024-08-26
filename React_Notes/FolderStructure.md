Steps to Create Folder Structure:
Step 1: Open the terminal, go to the path where you want to create the project and run the command with the project name to create the project.

```
npx create-react-app folder-structure
```
Step 2: After project folder has been created, go inside the folder using the following command.

```
cd folder-structure
```
Step 3: Install the dependencies required for your project (if any) using the following command.

```
npm i package-name
```
Step 4: Run the command git-init to initialized the git in the project. This will add .gitignore file.

```
git init
```
Step 5: Create a file named Readme.md which will contain all the info of the project.

```
touch Readme.md
```
Step 6: Create a file with extension .env which will contain the sensitive information and credentials of the project.

```
touch process.env
```
Step 7: Create a file named .gitignore so that all the un-necessary files and folders should not uploaded to github.

```
touch .gitignore
```
Step 8: Create folder like components (contains main components) and pages (contains files which combines components to make a page).

```
mkdir components
touch Navbar.jsx
```


----
FOLDER-STRUCTURE
---
```
> node_modules
> public
v src
    App.css
    App.js
    App.test.js
    index.css
    index.js
    reportWebVitals.js
    setupTests.js
.env
.gitignore
{} package-lock.json
{}package.json
@ README.md
```


----
FOLDER-STRUCTURE
---
```
> node_modules
> public
v src
    > assets
    > components
    > config
    > context
    > hooks
    > services
    > styles
    > utils
    App.css
    App.js
    App.test.js
    #index.css
    index.js
    reportWebVitalsjs
    setupTests.js
-.env
.gitignore
{}package-lock.json
{}package.json
@README.md
```

```
assets :
this is the folder where we can store the Images and svgs.
Components Folder :
A Component is one of the core building blocks of React. They have the same purpose as JavaScript functions and return HTML. Components make the task of building UI much easier. A UI is broken down into multiple individual pieces called components. You can work on components independently and then merge them all into a parent component which will be your final UI. 

Contexts Folder :
This directory contains files related to managing global state using the React Context API. Contexts are used to share state across multiple components without having to pass props manually through each level of the component tree.

Hooks Folder :
Hooks provide access to states for functional components while creating a React application. It allows you to use state and other React features without writing a class. Placing them in a dedicated directory allows for easy access and reuse across components throughout your application.

Services Folder :
In this directory, you’ll find files responsible for handling API calls and other services. Services keeps the implementation details of interacting with external resources, provides separation of concerns and code maintainability.

Utils Folder :
Utility functions, such as date formatting or string manipulation, are stored in this directory. These functions are typically used across multiple components or modules and serve to centralize commonly used logic.

Assets Folder :
Static assets like images, icons, fonts, and other media files are stored in the assets folder. Organizing assets in a dedicated directory keeps your project clean and makes it easy to locate and manage these files.

Config Folder :
This folder contains of a configuration file where we store environment variables in config.js. We will use this file to set up multi-environment configurations in your application. Ex- Environment Configuration, WebPack Configuration, Babel Configuration, etc.

Styles Folder :
This directory contains CSS or other styling files used to define the visual appearance of your application. In this folder styles of different components are stored here.

```