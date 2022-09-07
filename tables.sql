CREATE DATABASE Priceplan;

CREATE TABLE priceplan(
    id  SERIAL not Null  PRIMARY KEY,
    plan_name VARCHAR(100) not Null,
    sms_price INT not Null,
    call_price INT not Null
);


CREATE TABLE user_plan(
     id  SERIAL not Null  PRIMARY KEY,
     name VARCHAR(100) not Null,
     plan_name VARCHAR(100) not Null,
     total_bill INT not Null
);
