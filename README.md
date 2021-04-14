# y.cash website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Requirements

- Install [Node.js](https://nodejs.org/) version 12.13.0 or above.
- Install [Yarn 1](https://yarnpkg.com/en/) version 1.5 or above. (Do not use Yarn 2.)

Unless specified otherwise, the commands below assume that you are running them from the top-level `ydot` directory (the top-level of this
repoistory).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
