module.exports=(Req,res,next)=>{
if(Req.cookies.userTp && !Req.session.user){
Req.session.user=Req.cookies.userTp
}
next();
//verifica si hay una cookie y el user no esta en la session, para agregarlo a la session
}