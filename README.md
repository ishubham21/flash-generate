## Flash Generate (NPM package)

Find the package here - [flash-generate NPM package](https://www.npmjs.com/package/flash-generate)

## Introduction

Create-React-App is a great way to get started with React applications without having to worry about webpack, babel, and other build dependencies, but getting started with it takes a lot of time! 

With our lives moving fast, slow installation of dependencies & a relatively slow build time (for both production and development environment) was really a turn-off for me. I wanted to be able to produce React templates quickly. So, I made a beginner-friendly react template generator called **Flash**. Flash covers all the major things required in a React application along with optimized build (production and development) times and efficient debugging using source maps. 

Any beginner can get started with the React templates in a very short time!  


## Disadvantages of CRA (Create-React-App)

Read more about the disadvantages of Create-React-App and the need to create Flash from [here](CRADisadvantages.md)

## Advantages of Flash-Generate

* **It's Fast!** - Don't believe me? Give it a try!

* **No Abstraction** - Everything's in front of you. Want to extend the application? Sure, go ahead! Want to change the `port`? Why not? Want to further optimize production build? Do it! 

* **Yarn over NPM** - Flash makes use of Yarn to install dependencies! YARN is almost twice as fast as NPM because it parallelizes operations to maximize resource utilization so install times are much faster. The great part is that YARN is caching everything. It means highly-optimized build times the second time use **Flash**.  

* **Everything that a basic React application needs** - Worried about having to include support for `favicon`, `manifest.json`, `file-loaders` in Webpack configuration for the production builds? I have got you covered! You get most of the things that a CRA gives you at a relatively faster pace!   

* **Work with the latest version of React!** - I have made use of `plugin-transform-react-jsx` plugin over `@babel/preset-react` to make sure that the user is able to make use of latest feature of React. 

## Requirements 

Check the requirements [here](Requirements.md)

## Installation 

It is a CLI tool and hence needs to be gloablly installed on your computer. To install, use the following commands -

```sh
npm install -g flash-generate
```

or

```sh
yarn global add flash-generate
```

## Usage

Here comes the most important part! Since this is the first version of Flash, the command to generate a basic React application is fairly simple - 

```sh
flash-generate my-app --template=<TEMPLATE_NAME>
```

`TEMPLATE_NAME` is used to specify which template you want to generate. Here is a list of all the valid template names- 

  1. **react-js**: Generates a JavaScript-based React template.
  2. **react-router**: Generates a JavaScript-based React template with a pre-installed react-router.`

The above command will create a directory called `my-app` inside the current folder with [this](DirectoryStructure.md) project directory structure <br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies.

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

Flash is open source software [licensed as MIT](https://github.com/ishubham21/flash-generate/blob/main/LICENSE). 