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

### DB migrations

1: To create a new DB migration

```bash
npm run db-migrate create <name>
```

2. Edit the migrations file in `./db/migrations`

3. Run the migrations against the server

```bash
npm run db-migrate up
```