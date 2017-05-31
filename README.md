# fript-api

## Local development

1: Install dependencies

```bash
$ npm install
```

2: Create a `.env` file with the required environment variables

```
- DB_NAME
- DB_HOST
- DB_PORT
- DB_USER
- DB_PASSWORD
```

*Alternatively, create a file `.env.production` if needed*

3: Start the app locallly

```bash
$ npm start
```

4. Inspect the service document at [localhost:4000](http://localhost:4000)

### DB

#### Connecting

1: Download [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) and [PostgreSQL](https://www.postgresql.org/)

2: Log into heroku

```bash
heroku login
```

3: Connect to a database using psql

```bash
# staging db:
npm run psql:st

# production db:
npm run psql:prod
```

#### Migrations

1: Create a new DB migration

1.1: Create a new table migration

```bash
npm run create-table-migration <tableName>
```

1.2: Populate the table if desirable

```bash
npm run create-insert-migration <tableName>
```

2. Edit the migrations file in `./db/migrations`

3. Run the migrations against the server

```bash
npm run migrate-up
```


