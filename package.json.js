{
  "name": "waymark_test",
  "version": "0.1.0",
  "description": "Technical Demonstration",
  "engines": {
    "node": "7.8.0"
  },
  "scripts": {
    "preinstall": "node tools/nodeVersionCheck.js",
    "setup": "node tools/setup/setupMessage.js && npm install && node tools/setup/setup.js",
    "start": "npm-run-all --parallel open:src",
    "diststart": "npm-run-all --parallel open:dist",
    "open:src": "nodemon tools/srcServerExpress.js --exec babel-node",
    "open:src": "nodemon tools/srcServerExpress.js --exec babel-node",
    "open:mongo": "node ExpressMongoServer/expressMongo.js",
    "open:dist": "babel-node tools/distServerExpress.js",
    "lint": "esw webpack.config.* src tools --color",
    "lint:watch": "npm run lint -- --watch",
    "clean-dist": "npm run remove-dist && mkdir dist",
    "remove-dist": "rimraf ./dist",
    "prebuild": "npm run clean-dist",
    "build": "babel-node tools/build.js",
    "test": "mocha tools/testing/allTests.js --compilers js:babel-core/register",
    "test:CI": "babel-node tools/testCi.js",
    "test:cover": "npm run test -- --coverage ",
    "test:cover:CI": "npm run test:CI -- --coverage && cat ./coverage/lcov.info | node_modules/coveralls/bin/coveralls.js",
    "test:watch": "npm run test -- --watch",
    "open:cover": "npm run test:cover && open coverage/lcov-report/index.html",
    "analyze-bundle": "babel-node ./tools/analyzeBundle.js"
  },
  "author": "Richard Mands",
  "license": "MIT",
  "dependencies": {
    "autoprefixer": "6.5.4",
    "axios": "^0.16.2",
    "babel-cli": "6.18.0",
    "babel-core": "6.20.0",
    "babel-eslint": "7.1.1",
    "babel-jest": "18.0.0",
    "babel-loader": "6.2.10",
    "babel-plugin-transform-react-constant-elements": "6.9.1",
    "babel-plugin-transform-react-remove-prop-types": "0.2.11",
    "babel-polyfill": "6.20.0",
    "babel-preset-env": "1.3.2",
    "babel-preset-react": "6.16.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-preset-stage-1": "6.16.0",
    "body-parser": "^1.17.2",
    "browser-sync": "2.18.5",
    "chai": "^4.1.0",
    "chai-http": "^3.0.0",
    "chalk": "1.1.3",
    "connect-history-api-fallback": "1.3.0",
    "coveralls": "2.11.15",
    "css-loader": "0.26.1",
    "dotenv": "^4.0.0",
    "enzyme": "2.6.0",
    "eslint": "3.12.2",
    "eslint-plugin-import": "2.2.0",
    "eslint-plugin-react": "6.8.0",
    "eslint-watch": "2.1.14",
    "express": "^4.15.2",
    "extract-text-webpack-plugin": "^2.1.0",
    "file-loader": "0.9.0",
    "html-webpack-plugin": "2.24.1",
    "identity-obj-proxy": "3.0.0",
    "jest": "18.1.0",
    "jquery": "^3.2.1",
    "json-loader": "0.5.4",
    "jsonp": "^0.2.1",
    "mockdate": "2.0.1",
    "mongoose": "^4.11.1",
    "morgan": "^1.8.2",
    "node-sass": "^4.5.2",
    "npm-run-all": "3.1.2",
    "object-assign": "4.1.0",
    "open": "0.0.5",
    "postcss-loader": "1.2.1",
    "prompt": "1.0.0",
    "prop-types": "^15.5.6",
    "react": "15.4.1",
    "react-addons-test-utils": "15.4.1",
    "react-dom": "15.4.1",
    "react-hot-loader": "3.0.0-beta.6",
    "react-redux": "5.0.1",
    "react-router": "3.0.0",
    "react-router-redux": "4.0.7",
    "redux": "3.6.0",
    "redux-immutable-state-invariant": "1.2.4",
    "redux-thunk": "2.1.0",
    "replace": "0.3.0",
    "rimraf": "2.5.4",
    "sass-loader": "6.0.2",
    "style-loader": "0.13.1",
    "url-loader": "0.5.7",
    "webpack": "2.2.1",
    "webpack-bundle-analyzer": "2.1.1",
    "webpack-dev-middleware": "1.9.0",
    "webpack-hot-middleware": "2.17.1",
    "webpack-md5-hash": "0.0.5"
  },
  "devDependencies": {},
  "keywords": [],
  "repository": {
    "type": "git",
    "url": ""
  },
  "jest": {
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy",
      "^.+\\.(gif|ttf|eot|svg|woff|woff2|ico)$": "<rootDir>/tools/fileMock.js"
    }
  },
  "babel": {
    "presets": [
      "react",
      "stage-1"
    ],
    "env": {
      "development": {
        "presets": [
          "env",
          "react-hmre"
        ]
      },
      "production": {
        "presets": [
          [
            "env",
            {
              "es2015": {
                "modules": false
              }
            }
          ]
        ],
        "plugins": [
          "transform-react-constant-elements",
          "transform-react-remove-prop-types"
        ]
      },
      "test": {
        "presets": [
          "env"
        ]
      }
    }
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "plugins": [
      "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "jquery": true,
      "jest": true
    },
    "rules": {
      "quotes": 0,
      "no-console": 1,
      "no-debugger": 1,
      "no-var": 1,
      "semi": [
        1,
        "always"
      ],
      "no-trailing-spaces": 0,
      "eol-last": 0,
      "no-underscore-dangle": 0,
      "no-alert": 0,
      "no-lone-blocks": 0,
      "jsx-quotes": 1,
      "react/display-name": [
        1,
        {
          "ignoreTranspilerName": false
        }
      ],
      "react/forbid-prop-types": [
        1,
        {
          "forbid": [
            "any"
          ]
        }
      ],
      "react/jsx-boolean-value": 0,
      "react/jsx-closing-bracket-location": 0,
      "react/jsx-curly-spacing": 1,
      "react/jsx-indent-props": 0,
      "react/jsx-key": 1,
      "react/jsx-max-props-per-line": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-no-duplicate-props": 1,
      "react/jsx-no-literals": 0,
      "react/jsx-no-undef": 1,
      "react/jsx-pascal-case": 1,
      "react/jsx-sort-prop-types": 0,
      "react/jsx-sort-props": 0,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/jsx-wrap-multilines": 1,
      "react/no-danger": 1,
      "react/no-did-mount-set-state": 1,
      "react/no-did-update-set-state": 1,
      "react/no-direct-mutation-state": 1,
      "react/no-multi-comp": 1,
      "react/no-set-state": 0,
      "react/no-unknown-property": 1,
      "react/prefer-es6-class": 1,
      "react/prop-types": 1,
      "react/react-in-jsx-scope": 1,
      "import/extensions": 1,
      "react/self-closing-comp": 1,
      "react/sort-comp": 1
    },
    "globals": {}
  }
}
