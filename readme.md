##My React Template with TypeScript support 

This is how I get started projects without CRA command

1. Initialize the project `npm init -y` (-y answers yes to all)
2. Install packages
   2.1. for react `npm install ---save-dev react react-dom`
   2.2. for typescript `npm install ---save-dev typescript @types/react @types/react-dom`
   2.3. babel for transpiling js,react,ts `npm install ---save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`
   2.4. webpack for organize everything `npm install ---save-dev webpack webpack-cli webpack-dev-server`
   2.5. plugins and loaders for webpack `npm install ---save-dev html-webpack-plugin babel-loader`
3. Create `tsconfig.json` file.
4. Create `.babelrc` file.
5. Create `webpack.config.js` file
6. Add scripts to package js

7. Style plugins `npm install css-loader sass-loader sass style-loader  webpack --save-dev`

