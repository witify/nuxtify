# Nuxtify

[![Netlify Status](https://api.netlify.com/api/v1/badges/29125134-de58-48ad-bbb4-a8ed07c337f7/deploy-status)](https://app.netlify.com/sites/wizardly-goldberg-766207/deploys)

> A clean boilerplate to start a static website, batteries included

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Create new Contentful Project

``` bash

npm i -g contentful-cli

contentful login

contentful space export --space-id {SPACE_ID}

contentful space import --space-id {SPACE_ID} --config {filename}

```