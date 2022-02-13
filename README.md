## Flash Generate (NPM package)
[![npm version](https://badge.fury.io/js/flash-generate@2x.png)](https://badge.fury.io/js/flash-generate)
![NPM Downloads](https://img.shields.io/npm/dw/:flash-generate)
![NPM License](https://img.shields.io/npm/l/:flash-generate)
[![HitCount](http://hits.dwyl.com/ishubham21/flash-generate.svg)](http://hits.dwyl.com/ishubham21/flash-generate)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

## Introduction

Create-React-App is a great way to get started with React applications without having to worry about webpack, babel, and other build dependencies, but getting started with it takes a lot of time! 

With our lives moving fast, slow installation of dependencies & a relatively slow build time (for both production and development environment) was really a turn-off for me. I wanted to be able to produce React templates quickly. So, I made a beginner-friendly react template generator called **Flash**. Flash covers all the major things required in a React application along with optimized build (production and development) times and efficient debugging using source maps. 

Any beginner can get started with the React templates in a very short time!  

---

## Disadvantages of CRA (Create-React-App)

 * It is SLOW! CRA packs a lot of unwanted dependencies that it takes an eternity to download all of them. With CRA, getting started is a pain! 

 * It is difficult to add custom build configs - it can be achieved by ejecting CRA but it is not recommended for beginners. The other way is you can use packages like customize-cra or react-app-rewired but then they have limited capabilities.
 
 * Most of the complexity of the application is in the background components which are simply plain JavaScript (or maybe TypeScript). Therefore, it is imperative not to rely on the CRA template, or more specifically `react-scripts`. It is a good starter, however, it packs too many things than what we require, and abstracts the configurations entirely.

---

## Advantages of Flash-Generate

* **It's Fast!** - Don't believe me? Give it a try!

* **No Abstraction** - Everything's in front of you. Want to extend the application? Sure, go ahead! Want to change the `port`? Why not? Want to further optimize production build? Do it! 

* **Yarn over NPM** - Flash makes use of Yarn to install dependencies! YARN is almost twice as fast as NPM because it parallelizes operations to maximize resource utilization so install times are much faster. The great part is that YARN is caching everything. It means highly-optimized build times the second time use **Flash**.  

* **Everything that a basic React application needs** - Worried about having to include support for `favicon`, `manifest.json`, `file-loaders` in Webpack configuration for the production builds? I have got you covered! You get most of the things that a CRA gives you at a relatively faster pace!   

* **Work with the latest version of React!** - I have made use of `plugin-transform-react-jsx` plugin over `@babel/preset-react` to make sure that the user is able to make use of latest feature of React. 

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Yarn installation - Important
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Installation 

It is a CLI tool and hence needs to be gloablly installed on your computer. To install, use the following commands -

```sh
npm i -g flash-generate
```

or

```sh
yarn global add flash-generate
```

---

## Usage

Here comes the most important part! Since this is the first version of Flash, the command to generate a basic React application is fairly simple - 

```sh
flash-generate my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── node_modules
├── package.json
├── .gitignore
├── .babelrc
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── yarn.lock
├── public
|   ├── favicon_512.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
        ├── App.css
        ├── App.js
    ├── index.css
    ├── index.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## License

Create React App is open source software [licensed as MIT](https://github.com/ishubham21/flash-generate/blob/main/LICENSE). 