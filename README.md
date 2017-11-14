# fript-web

## Local development

1. Install dependencies

   ```bash
   $ npm install
   ```

2. Create a `.env` file with the required environment variables

```
- DB_NAME
- DB_HOST
- DB_PORT
- DB_USER
- DB_PASSWORD
- ENV 
- FACEBOOK_APP_ID
- FACEBOOK_APP_SECRET
```

You may also add either of these optional environment variables:

```
- EARLY_ACCESS_SIGNUP
```

   *Alternatively, create a file `.env.production` if needed*

3: Start the app locally

   ```bash
   $ npm start
   ```

4. Inspect the service document at [localhost:4000][1]

### DB

#### Connecting

1: Download [Heroku CLI][2] and [PostgreSQL][3]

2: Log in to Heroku

   ```bash
   heroku login
   ```

3: Connect to a database using `psql`

   ```bash
   # staging db:
   npm run psql:st

   # production db:
   npm run psql:prod
   ```

#### Migrations

1. Create a new DB migration

   1. Create a new table migration

      ```bash
      npm run create-table-migration <tableName>
      ```

   2. Populate the table if desirable

      ```bash
      npm run create-insert-migration <tableName>
      ```

2. Edit the migrations file in `./db/migrations`

3. Run the migrations against the server

```bash
npm run migrate-up
```

[1]: http://localhost:4000
[2]: https://devcenter.heroku.com/articles/heroku-command-line
[3]: https://www.postgresql.org
