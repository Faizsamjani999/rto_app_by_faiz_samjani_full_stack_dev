const express = require('express');
const port = 9999;
const app = express();
const path = require('path');
const database = require('./config/database');
const adminSchema = require('./model/adminSchema');
const userSchema = require('./model/userSchema');
const vehicleReg = require('./model/vehicleRegi');
const licenceReg = require('./model/licenceRegi');
const insuranceReg = require('./model/insuranceRegi');
const rcTable1 = require("./model/rc1");
const rcTable2 = require("./model/rc2");

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"public")));
app.use("/upload",express.static(path.join(__dirname,"upload")));



const session = require('express-session');
app.use(session({secret : "private-key"}));
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
const localauth = require('./middleware/localauth');
localauth(passport);

const flash = require('connect-flash');
const connection = require('./config/database');
app.use(flash());

app.set("view engine","ejs");

app.use(require('./routes/route'));

app.listen(port,()=>{
    console.log("Server Started At -" + port);
    connection();
})