# Semabit Card Game

Simple Demo Card game (assessment) with Ruby on Rails, Vite, React, TypeScript, Vitest, Playwright.

* Ruby version
  * 3.4.5
* System dependencies
  * PostgreSQL 13+
  * Node lts/jod (v22.16.0)
* Configuration
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
  * WIP

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