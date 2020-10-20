# Node Cookie JWT Tutorial
Written for the Medium article: 
[Passport.js HttpOnly Cookie JWT Authentication](medium.com)

## Install
Clone the repository and install dependencies:
```sh
$ git clone https://github.com/alphonso06/Node-Cookie-JWT.git
$ cd node-cookie-jwt
$ npm install
```

## Environment Variables
At the root of the project, create `dev.env` to store your env vars. Inside 
you'll need to store your `USER` and `PASSWORD` values. You'll also need to add 
the `JWT_SECRET` and `JWT_EXPIRATION` values.

```env
USER=genericGuy
PASSWORD=Ultr@S3cUr3!
JWT_SECRET=wow123
JWT_EXPIRATION_TIME=600000
```

## Running the app
Simply run the command:
```sh
$ npm run dev
```
Everything should work if the env vars were setup correctly.

## API Routes
It's recommended that you use something like Postman to test the routes, 
otherwise you can use whatever you're comfortable with as long as it works fine 
for you.

### License
ISC