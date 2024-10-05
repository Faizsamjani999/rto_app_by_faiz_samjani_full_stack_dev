const adminSchema = require("../model/adminSchema");
const userSchema = require("../model/userSchema");
const nodemailer = require('nodemailer');
const vehicleReg = require("../model/vehicleRegi");
const path = require('path');
const licenceReg = require("../model/licenceRegi");
const insuranceReg = require("../model/insuranceRegi");
const rcTable1 = require("../model/rc1");
const rcTable2 = require("../model/rc2");
const rcTable3 = require('../model/rc3');
const rcTable4 = require("../model/rc4");
const twilio = require('twilio');



const homepage = (req,res)=>{
    res.render("homepage");
}

// Admin Sign Up - Sign In Started

const adminBlank = (req,res)=>{
    res.render("adminBlank");
}
const adminRegister = (req,res)=>{
    res.render("adminRegister");
}
const adminLogin = (req,res)=>{
    res.render("adminLogin",{
        adminMsg : req.flash("adminMsg")
    });
}
const adminRegisterPost = async(req,res)=>{
    await adminSchema.create(req.body);

    req.flash("adminMsg","Admin Register Successfully...");
    res.redirect('/adminLogin');
}
const adminLoginPost = (req,res)=>{
    res.render("adminPanel");
}
const adminLoginGet = (req,res)=>{
    res.render("adminPanel");
}
const adminProfile = (req,res)=>{
    res.render("adminProfile");
}

const vehicleRegistration = (req,res)=>{
    res.render("vehicleRegistration")
}

const vehicleRegistrationPost = async(req,res)=>{

    let image = " ";

    if(req.file)
    {
        image = req.file.path
    }

    await vehicleReg.create({
        ownerName : req.body.ownerName,
        state : req.body.state,
        districtCode : req.body.districtCode,
        seriesCode : req.body.seriesCode,
        numberVehicle : req.body.numberVehicle,
        registerDate : req.body.registerDate,
        typeVehicle : req.body.typeVehicle,
        modelVehicle : req.body.modelVehicle,
        companyVehicle : req.body.companyVehicle,
        image : image,
        mobile : req.body.mobile,
        location : req.body.location,
    }).then(()=>{
        res.redirect("back");
    })

}

const vehicleRegistrationDetail = async(req,res)=>{
    await vehicleReg.find({}).then((alldata)=>{
        res.render("vehicleRegistrationDetail",{
            data : alldata
        })
    })
}

const deleted = async(req,res)=>{
    let id = req.query.id;

    await vehicleReg.findByIdAndDelete(id).then(()=>{
        res.redirect("back");
    })
}

const editVehicleRegi = async(req,res)=>{
    let id = req.query.id;

    await vehicleReg.findById(id).then((editData)=>{
        res.render("editVehicleRegi",{
            edit : editData
        })
    })
}

const updateVehicleRegi = async(req,res)=>{
    let id = req.body.id;

    if(req.file)
        {
            var obj = {
                ownerName : req.body.ownerName,
                state : req.body.state,
                districtCode : req.body.districtCode,
                seriesCode : req.body.seriesCode,
                numberVehicle : req.body.numberVehicle,
                registerDate : req.body.registerDate,
                typeVehicle : req.body.typeVehicle,
                modelVehicle : req.body.modelVehicle,
                companyVehicle : req.body.companyVehicle,
                image : image,
                mobile : req.body.mobile,
                location : req.body.location,
            }
        }
        else{
            var obj = {
                ownerName : req.body.ownerName,
                state : req.body.state,
                districtCode : req.body.districtCode,
                seriesCode : req.body.seriesCode,
                numberVehicle : req.body.numberVehicle,
                registerDate : req.body.registerDate,
                typeVehicle : req.body.typeVehicle,
                modelVehicle : req.body.modelVehicle,
                companyVehicle : req.body.companyVehicle,
                mobile : req.body.mobile,
                location : req.body.location,
            }
        }

    await vehicleReg.findByIdAndUpdate(id,obj).then(()=>{
        res.redirect("back");
    })
}

const licenceRegistration = (req,res)=>{
    res.render("licenceRegistration");
}

const licenceRegistrationPost = async(req,res)=>{

    let image = " ";

    if(req.file)
    {
        image = req.file.path
    }

    await licenceReg.create({
        licenceName : req.body.licenceName,
        state : req.body.state,
        districtCode : req.body.districtCode,
        licencenumber : req.body.licencenumber,
        registerDate : req.body.registerDate,
        permit : req.body.permit,
        image : image,
        mobile : req.body.mobile,
        location : req.body.location,
    }).then(()=>{
        res.redirect("back");
    })
}

const licenceRegistrationDetail = async(req,res)=>{
    await licenceReg.find({}).then((alldata)=>{
        res.render("licenceRegistrationDetail",{
            data : alldata
        })
    })
}

const insuranceServices = (req,res)=>{
    res.render("insuranceServices");
}

const insuranceRegistrationPost = async(req,res)=>{

    let image = " ";

    if(req.file)
    {
        image = req.file.path
    }

    await insuranceReg.create({
        ownerName : req.body.ownerName,
        state : req.body.state,
        districtCode : req.body.districtCode,
        seriesCode : req.body.seriesCode,
        numberVehicle : req.body.numberVehicle,
        registerDate : req.body.registerDate,
        typeVehicle : req.body.typeVehicle,
        modelVehicle : req.body.modelVehicle,
        companyVehicle : req.body.companyVehicle,
        insurancecompany : req.body.insurancecompany,
        typeOfInsurance : req.body.typeOfInsurance,
        image : image,
        mobile : req.body.mobile,
        location : req.body.location,
    }).then(()=>{
        res.redirect("back");
    })
}

const insuranceRegistrationDetail = async(req,res)=>{
    await insuranceReg.find({}).then((alldata)=>{
        res.render("insuranceServicesDetail",{
            data : alldata
        })
    })
}

const sellsAgreement = (req,res)=>{
    rcTable4.find({}).populate({
        path : "vehicleId",
        populate : {
            path : "seriesId",
            populate : {
                path : "districtId"
            }
        }
    }).then((alldata)=>{
        res.render("sellsAgreement",{
            data : alldata
        })
    })
}

const accept = (req,res)=>{
    req.flash("acceptMsg","Your Request Are Accepted By RTO Online Service")
    res.redirect("back");
}

const cancel = (req,res)=>{
    req.flash("acceptMsg","Not Accepted, Canceled By RTO Online Services")
    res.redirect("back");
}

const appViewer = async(req,res)=>{
    await userSchema.find({}).then((alldata)=>{
        res.render("applicationViewer",{
            data : alldata
        })
    })
}



// Admin Sign Up - Sign In Over


// User Sign Up - Sign In Started

const userBlank = (req,res)=>{
    res.render("userBlank");
}
const userRegister = (req,res)=>{
    res.render("userRegister",{
        registerMsg : req.flash("registerMsg")
    });
}
const userRegisterPost = async(req,res)=>{

    const exisUser = await userSchema.findOne({email : req.body.email});

    if(exisUser)
    {
        req.flash("registerMsg","Email Already Registered...");

        res.redirect("back");
    }
    else{

        await userSchema.create(req.body);

        res.redirect("/userLogin");
    }

    
}
const userLogin = (req,res)=>{
    res.render("userLogin");
}
const userLoginPost = async(req,res)=>{
    const existingUser = await userSchema.findOne({email : req.body.email});

    let id = existingUser.id;

    const onUser = await userSchema.findById(id);

    if(existingUser)
    {
        if(existingUser.password == req.body.password)
        {
                res.render("userProfile",{
                    data : onUser
                })
        }
        else
        {
            res.render("wrongPassword");
        }
    }
    else
    {
        res.render("404");
    }
}





const forgotPassword = (req,res)=>{
    res.render("forgotPassword");
}

const otp = Math.floor(Math.random()*1000000);

const otpPage = (req,res)=>{
    res.render("otp",{
        errorMsg : req.flash("errorMsg")
    });
}

const sendMail = async(req,res)=>{
    const user = await userSchema.findOne({email : req.body.email});

    if(!user)
    {
        res.render("404");
    }
    else
    {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : "faizsamjani999@gmail.com",
                pass : "qyhlcmckajfyaosv"
            }
        })

        const info = transporter.sendMail({
            from : "faizsamjani999@gmail.com",
            to : req.body.email,
            subject : "RTO Application Forgot Password OTP",
            html : `${otp}`
        })

        res.redirect("/otpPage");

    }
}



const otpMatch = (req,res)=>{
    const otp1 = req.body.otp1;
    const otp2 = req.body.otp2;
    const otp3 = req.body.otp3;
    const otp4 = req.body.otp4;
    const otp5 = req.body.otp5;
    const otp6 = req.body.otp6;

    const token = otp1+otp2+otp3+otp4+otp5+otp6

    console.log(token);

    if(token == otp)
    {
        res.redirect("/otpAndPassword");
    }
    else{
        req.flash("errorMsg","Wrong OTP....");
        res.redirect("back");
    }
}

const otpAndPassword = (req,res)=>{
    res.render("otpAndPassword",{
        passwordErr : req.flash("passwordErr")
    });
}

const otpMatchAndPassword = async(req,res)=>{
    const password = req.body.password;
    
    const existingEmail = await userSchema.findOne({email : req.body.email});

    if(existingEmail)
        {
            const id = existingEmail.id;

            await userSchema.findByIdAndUpdate(id,{
                password : password
            })

            res.redirect("/userLogin");
        }
        else{
            req.flash("passwordErr","Email is Not Matched in Our Data...")
            res.redirect("back");
        }
}

const index = (req,res)=>{
    res.render("index");
}

const searchVehiclePage = async(req,res)=>{

    res.render("searchVehicle");
    
}

const searchVehiclePost = async(req,res)=>{
    const searchData = (req.body);
    console.log(searchData);
    const vehicle = await vehicleReg.findOne({numberVehicle : searchData.vehicleNumber});

    console.log("This is vehicle" +  vehicle);
    if(vehicle)
        {
            if(vehicle.districtCode == searchData.districtName)
                {
                    console.log(vehicle.districtCode);
                    console.log(req.body.districtName);

                    if(vehicle.seriesCode == searchData.seriesName)
                        {
                            if(vehicle.numberVehicle == searchData.vehicleNumber)
                                {
                                    let id = vehicle.id;
                                    console.log(id);

                                    const vehicleInfo = await vehicleReg.findById(id);
                                    console.log(vehicleInfo);

                                    res.render("vehicleResult2",{
                                        data : vehicleInfo
                                    })
                                }
                                else{
                                    res.render("vehicleNumberError");
                                }
                        }
                        else{
                            res.render("vehicleNumberError");
                        } 
                }
                else{
                    res.render("vehicleNumberError");
                }
        }
        else{
            res.render("vehicleNumberError");
        }
}

const rc1 = (req,res)=>{
    res.render("rc1");
}
const rc1Post = async(req,res)=>{
    await rcTable1.create(req.body);

    res.redirect("/rcBook2");
}
const rc2 = async(req,res)=>{
    await rcTable1.find({}).then((alldata)=>{
        res.render("rc2",{
            data : alldata
        })
    })
}

const rc2Post = async(req,res)=>{
    await rcTable2.create({
        districtId : req.body.districtId,
        series : req.body.series
    });

    res.redirect("/rcBook3");
}
const rc3 = (req,res)=>{
    rcTable2.find({}).populate('districtId').then((alldata)=>{
        res.render("rc3",{
            data : alldata
        })
    })
}
const rc3Post = async(req,res)=>{
    await rcTable3.create({
        districtId : req.body.districtId,
        seriesId : req.body.seriesId,
        vehicle : req.body.vehicle
    })

    res.redirect("/rcBook4");
}
const rc4 = (req,res)=>{
    rcTable3.find({}).populate({
        path : "seriesId",
        populate : {
            path : "districtId"
        }
    }).then((alldata)=>{
        res.render("rc4",{
            data : alldata
        })
    })
}
const rc4Post = async(req,res)=>{
    await rcTable4.create({
        districtId : req.body.districtId,
        seriesId : req.body.seriesId,
        vehicleId : req.body.vehicleId,
        buyerName : req.body.buyerName,
        buyerNumber : req.body.buyerNumber,
        buyerLocation : req.body.buyerLocation
    })

    res.redirect("/index");
}
const application = async(req,res)=>{
    rcTable4.find({}).populate({
        path : "vehicleId",
        populate : {
            path : "seriesId",
            populate : {
                path : "districtId"
            }
        }
    }).then((alldata)=>{
        res.render("application",{
            data : alldata,
            acceptMsg : req.flash("acceptMsg")
        })
    })
}




// User Sign Up - Sign In Over


module.exports = {
    homepage,
    adminBlank,
    adminRegister,
    adminLogin,
    adminRegisterPost,
    adminLoginPost,
    adminLoginGet,
    adminProfile,
    vehicleRegistration,
    vehicleRegistrationPost,
    vehicleRegistrationDetail,
    deleted,
    editVehicleRegi,
    updateVehicleRegi,
    licenceRegistration,
    licenceRegistrationPost,
    licenceRegistrationDetail,
    insuranceServices,
    insuranceRegistrationPost,
    insuranceRegistrationDetail,
    sellsAgreement,
    accept,
    cancel,
    appViewer,
    userBlank,
    userRegister,
    userRegisterPost,
    userLogin,
    userLoginPost,
    forgotPassword,
    otpPage,
    sendMail,
    otpMatch,
    otpAndPassword,
    otpMatchAndPassword,
    index,
    searchVehiclePage,
    searchVehiclePost,
    rc1,
    rc1Post,
    rc2,
    rc2Post,
    rc3,
    rc3Post,
    rc4,
    rc4Post,
    application
}