# React Race Game

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/95fd98f98e0546879e65ba3d1a0b1d7f)](https://www.codacy.com/manual/gabriel_hahn/react-race-game?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gabriel-hahn/react-race-game&amp;utm_campaign=Badge_Grade) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/gabriel-hahn/react-race-game/pulls) [![Bugs](https://img.shields.io/github/issues/gabriel-hahn/react-race-game/bug.svg)](https://github.com/gabriel-hahn/react-race-game/issues?utf8=?&q=is%3Aissue+is%3Aopen+label%3Abug) [![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A Race game developer using React, Styled Components, NodeJS, GraphQL and much fun :blue_car: :grin:

NodeJS |Express|GraphQL|Mongoose|React  |@Apollo|
-------|-------|-------|--------|-------|-------|
10.16.0|4.17.1 |15.0.0 |5.9.13  |16.13.1|3.1.3  |

## Getting Started

> I recommend use [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) as package management and install all dependencies using it, running ```yarn``` or ```npm install``` inside each folder (<b>app</b> and <b>api</b>).

> If you have some issues related to permissions, just add the sudo command before yarn/npm command, as ```sudo yarn```.

### Environment Variables

One important thing before start running this project locally is set up all environments variables. You can set them for back-end creating a ```.env``` file on <strong>api</strong> folder root and following this structure:

```
  APP_DOMAIN=App Domain with port, probably http://locahost:3000 at this moment.
  MONGODB_USER=MongoDB user (connection)
  MONGODB_PASSWORD=MongoDB password (connection)
```

You should do the same on front-end, adding an ```.env``` file to <b>app</b> folder root:

```
  REACT_APP_API_URL=Api domain with port, probably http://localhost:3333 running it locally.
```

### Running the project

To run the project after install all dependecies, you can just run ```yarn dev``` or ```npm run dev``` (Front-end) and ```yarn start:dev``` or ```npm run start:dev``` (Back-end).

## Tests

You can run ```yarn test``` inside <strong>app</strong> folder for Front-end tests. Back-end does not have unit tests yet.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/react-race-game/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

See also the list of [contributors](https://github.com/gabriel-hahn/react-race-game/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
