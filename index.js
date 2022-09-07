const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const Priceplan = require("./priceplan");
const app = express();
// const initOptions = {};

// const pgp = require('pg-promise')();
// // const pgp =  pgPromise({});
// const db = pgp(connection);

const priceplan = Priceplan();

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
  
  const port = process.env.PORT || 4000;
  app.listen(port);
  console.log(`listen to server: http://localhost:${port}`);
  
  app.get("/", (req, res) => {
    res.render("index", {
      userName: priceplan.getAllocatedPlan(),
      plan: priceplan.getAllocatedPlan()
    });
  });

  app.post("/priceplan", (req, res) => {
  let name = req.body.name;  let plan =  req.body.radioButn;
  if(name  && plan){
 priceplan.allocatePlan(name, plan);
 
  }else{
    req.flash('info', priceplan.setUserValidation(name, plan));
  }
// priceplan.firstName = req.body.name
//  priceplan.plan = req.body.radioButn
//  priceplan.storingNames(priceplan.firstName);

  res.redirect("/");
});