const indexR = require("./index")
const siteR = require("./site")


exports.routerInit = app =>{
    app.use("/",indexR);
    app.use("/sites",siteR);
}