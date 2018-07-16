# BoilerMake Frontend Website

[![Greenkeeper badge](https://badges.greenkeeper.io/BoilerMake/frontend.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/BoilerMake/frontend.svg?branch=master)](https://travis-ci.org/BoilerMake/frontend)
[![codecov](https://codecov.io/gh/BoilerMake/frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/BoilerMake/frontend)

## About
This repository contains the day-of website for BM IV, and the main website for BM V.

# Dev setup

## Environment setup

* Install yarn `npm install --global yarn`
* Run `yarn` to install packages
* `yarn run start` to start the webpack dev server
* `yarn run test` to start the test suite watcher


## Helpful Config Settings

To get github auth working locally config.js, set `GITHUB_CLIENT_ID` to `7e590557877b9c9c9723`. Look at `config.example.js` for the sample config to use, when new values are added they are added to the example.

To have your local frontend communicate with the dev server: configure your api base url like so: `export const API_BASE_URL = 'http://api.dev.boilermake.org/v1';`

> Note: this github client id will only work with the api.dev server.

Also, you'll need to enable signups via setting this feature flag to true: `ALLOW_SIGNUPS`

> Make sure you're using `yarn` to add dependencies

# Coding workflow

All commits should be on feature branches, and you can submit a Pull Request into `master`


DM nicky on slack for questions :)
