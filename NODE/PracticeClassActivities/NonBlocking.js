const getUserInfo = require('./userInfo');
console.log(getUserInfo);
getUserInfo(1,(user)=>{
    console.log(user);
})
getUserInfo(2,(user)=>{
    
    console.log(user);
})
const sum=1+3;
console.log(sum);