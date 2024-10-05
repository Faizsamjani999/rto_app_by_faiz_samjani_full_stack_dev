const express = require('express');

const route = express.Router();

const indexController = require('../controller/indexController');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const multer = require('multer');

const storage = multer.diskStorage({
    destination : ((req,res,cb)=>{
        cb(null,"upload/");
    }),
    filename : ((req,file,cb)=>{
        cb(null,file.originalname);
    })
})

const upload = multer({storage : storage}).single("image");

route.get("/",indexController.homepage);

// Admin Sign Up - Sign In Started

route.get("/adminBlank",indexController.adminBlank);

route.get("/adminRegister",indexController.adminRegister);

route.get("/adminLogin",indexController.adminLogin);

route.post("/adminRegisterForm",indexController.adminRegisterPost);

route.post("/adminLoginForm",passport.authenticate('local'),indexController.adminLoginPost);

route.get("/adminLoginGet",indexController.adminLoginGet);

route.get("/adminProfile",indexController.adminProfile);

route.get("/vehicleRegistration",indexController.vehicleRegistration);

route.post("/registrationVehicle",upload,indexController.vehicleRegistrationPost);

route.get("/vehicleRegistrationDetail",indexController.vehicleRegistrationDetail);

route.get("/delete",indexController.deleted);

route.get("/edit",indexController.editVehicleRegi);

route.post("/updateRegistrationVehicle",upload,indexController.updateVehicleRegi);

route.get("/licenceRegistration",indexController.licenceRegistration);

route.post("/registrationLicence",upload,indexController.licenceRegistrationPost);

route.get("/licenceRegistrationDetail",indexController.licenceRegistrationDetail);

route.get("/insuranceServices",indexController.insuranceServices);

route.post("/registrationInsurance",upload,indexController.insuranceRegistrationPost);

route.get("/insuranceRegistrationDetail",indexController.insuranceRegistrationDetail);

route.get("/sellsAgreement",indexController.sellsAgreement);

route.get("/accept",indexController.accept);

route.get("/cancel",indexController.cancel);

route.get("/appViewer",indexController.appViewer);


// Admin Sign Up - Sign In Over

// User Sign Up - Sign In Started

route.get("/userBlank",indexController.userBlank);

route.get("/userRegister",indexController.userRegister);

route.get("/userLogin",indexController.userLogin);

route.post("/userRegisterForm",indexController.userRegisterPost);

route.post("/userLoginForm",indexController.userLoginPost);

route.get("/index",indexController.index);

route.get("/forgotPasswordForm",indexController.forgotPassword);

route.get("/otpPage",indexController.otpPage);

route.post("/otpSend",indexController.sendMail);

route.post("/otpMatch",indexController.otpMatch);

route.get("/otpAndPassword",indexController.otpAndPassword);

route.post("/otpMatchPassword",indexController.otpMatchAndPassword);

route.get("/searchVehiclePage",indexController.searchVehiclePage);

route.post("/searchVehicle",indexController.searchVehiclePost);

route.get("/rcBook1",indexController.rc1);

route.post("/rc1Post",indexController.rc1Post);

route.get("/rcBook2",indexController.rc2);

route.post("/rc2Post",indexController.rc2Post);

route.get("/rcBook3",indexController.rc3);

route.post("/rc3Post",indexController.rc3Post);

route.get("/rcBook4",indexController.rc4);

route.post("/rc4Post",indexController.rc4Post);

route.get("/application",indexController.application);


// User Sign Up - Sign In Over

module.exports = route;