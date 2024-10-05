const passport = require("passport");
const adminSchema = require("../model/adminSchema");
const localStrategy = require('passport-local').Strategy;

const localauth = (passport)=>{
    passport.use(new localStrategy(async(username,password,done)=>{
        let user = await adminSchema.findOne({username : username});

        if(!user)
            {
                return done(null,false);
            }
        if(user.password != password)
            {
                return done(null,false);
            }
        return done(null,user);
    })
)
passport.serializeUser((user,done)=>{
    return done(null,done);
})

passport.deserializeUser(async(id,done)=>{
    let user = await adminSchema.findById(id);
    return done(null,user);
})
}

module.exports = localauth;