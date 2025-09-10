# Semabit Card Game

Simple Demo Card game (assessment) with Ruby on Rails, Vite, React, TypeScript, Vitest, Playwright.

[LIVE DEMO](https://semabit-cardgame-657968733671.europe-west1.run.app/) (will be up a few days)

* Ruby version
    * 3.4.5
* System dependencies
    * PostgreSQL 13+
    * Node lts/jod (v22.16.0)
* Configuration
    * RBS, Ruby "typescript"
        * You can use rbs for type descriptions
            * For gem rbs's, use `rbs collection install`, this will read rbs_collection.yaml and download all 
              rbs - files for used gems
        * You can place your custom type signatures under sig/*
            * Follow the folder structure of your files in your app
        * RBS is more of a description, which can get picked up by IDEs and such and provide
          better insight into your code (also better refactoring), but doesn't need special
          compilation (different in that regard to TypeScript) and isn't enforced
        * To auto generate starter rbs files for folder / file, note:
      ```
      # From a Ruby file
      $ rbs prototype rb lib/user.rb > sig/user.rbs
    
      # From a directory of Ruby files
      $ rbs prototype rb --out-dir=sig lib/
      ```
        * Note: The sig folder should mirror your app folder structure!
    * You can provide database user and password via env or .env - File:
      ```
      DB_USER=<user>
      DB_PASS=<pass>
      ```
* Database creation
  ```shell
  RAILS_ENV=development rake db:create
  RAILS_ENV=development rake db:migrate
  ```
    * Database initialization
  ```shell
  # For initial data, also run:
  RAILS_ENV=development rake db:seed 
  ```
* How to run the test suite
    * See section [Testing](#Testing)
* Services (job queues, cache servers, search engines, etc.)
* Deployment instructions
    * Google Cloud Runner reads this projects Dockerfile, auto-deployment on changes on main-Branch

## Testing

### Backend / Ruby / Rails Tests

Make sure to migrate the test db first:

```shell
RAILS_ENV=test rake db:create
RAILS_ENV=test rake db:migrate
```

We are using the builtin minitest support for rails, so to run tests, you can:

```shell
rails test
```

If you want to run specific files or folders, just append them to the command:

```shell
rails test test/models test/controllers
```

More info on how to use the command:

```
rails test --help
```

### Frontend Tests

Checkout pacakge.json, scripts sections for available run scripts, f.ex.:

```shell
yarn run test:lib
yarn run test:unit
yarn run test:integration
yarn run test:e2e
```

All scripts are per default single run, headless. You can use following flags
to change the behaviour:

```shell
yarn run test:unit --watch
# to be able to see the tests in the browser, you have to use --ui with --watch, or
# the server closes and no data can be shown
yarn run test:e2e --watch --ui
```

## Annotations

You can automatically update "schema" changes on corresponding model files via the annotate gem, use:

```
annotate --models
```

## TODOs

- [ ] Add React Redux for State Management
- [ ] Make Docker Container definition deployable / runnable
- [ ] Auto-Deploy main to Cloud
- [ ] Implement Multiplayer (with Websockets?)
- [ ] Restructure models / controllers etc. for multiple game support
    - [ ] i.e. use Modules and remove prefixes where possible, like CardGame, could be Card::Game
- [ ] Add i18n support