const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod");

const emailSchema = zod.string().email(); 
const passwordScehma = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordScehma.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({username},jwtPassword);
    return signature;
}

function verifyJwt(token) {
    try{
        jwt.verify(token,jwtPassword);
        return true
    }catch(e){

    }
    return false;
}


function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    return false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
