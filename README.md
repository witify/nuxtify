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

## Export/Import SQUIDEX Schema

``` bash

# CONFIGURATION

# Add a configuration
.\sq.exe config add [APP_NAME] [CLIENT_ID] [CLIENT_SECRET]

# Show all configurations
.\sq.exe config list

# Switch to another config
.\sq.exe config use [CONFIG_NAME]

# SCHEMA

# Save schema to a file
.\sq.exe schemas get schema1 > schema.json

# Sync with another app
.\sq.exe config use app2
.\sq.exe schemas sync schema.json

# CONTENT

# Export content
.\sq.exe content export features

# Import content
.\sq.exe content import features File.csv

```