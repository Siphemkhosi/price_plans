const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

const app = express();
// const initOptions = {};

const pgp = require('pg-promise')();
// const pgp =  pgPromise({});
const db = pgp(connection);
const bigData = await db.manyOrNone('select * from users');
console.log(bigData);


app.use(session({

    secret : "somevalue",
    resave: false,
    saveUninitialized: true
  }));
  
  // initialise the flash middleware
  app.use(flash());
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  //handlebars
  app.set("view engine", "hbs");
  app.engine(
    "hbs",
    exphbs.engine({
      layoutsDir: __dirname + "/views/layouts",
      extname: "hbs",
    })
  );
  
  const port = process.env.PORT || 3009;
  app.listen(port);
  console.log(`listen to server: http://localhost:${port}`);
  