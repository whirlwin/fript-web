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

3: Start the app locallly

```bash
$ npm run start:local
```

4. Inspect the service document at [localhost:4000](http://localhost:4000)

### DB

#### Connecting

1: Download [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) and [PostgreSQL](https://www.postgresql.org/)

2: Log into heroku

```bash
heroku login
```

3: Connect to the database using psql

```bash
npm run psql
```

#### Migrations

1: To create a new DB migration

```bash
npm run db-migrate create <name>
```

2. Edit the migrations file in `./db/migrations`

3. Run the migrations against the server

```bash
npm run db-migrate up
```
