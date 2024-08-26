NPM :-
The npm stands for Node Package Manager and it is the default package manager for Node.js. 
It is written entirely in JavaScript, developed by  Isaac Z. Schlueter,
The npm manages all the packages and modules for node.js and
 consists of command-line client npm.
It gets installed into the system with the installation of node.js.
The required packages and modules in the Node project are installed using npm.
A package contains all the files needed for a module and modules are the JavaScript libraries that can be included in the Node project according to the requirement of the project.

        npm install -g npx


NPX :-
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. The npx is useful during a single time use package. If you have installed npm below 5.2.0 then npx is not installed in your system.
            npx -v


        <:::    NPM vs NPM :::>
```
NPM
1. If you wish to run package through npm then you have to specify that package in your package.json and install it locally.
2. To use `create-react-app` in npm the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required).
3. Npm is a tool that use to install packages.
4. Packages used by npm are installed globally. You have to care about pollution in the long term.

NPX
1. A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
2. In npx you can create a react app without installing the package:
`npx create-react-app myApp`
This command is required in every app’s life cycle only once.
3.  Npx is a tool that use to execute packages.
4. Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.```