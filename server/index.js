import "dotenv/config";
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import models,{sequalize} from "./models/init-models"
import routes from "./routes/indexRoute"
import middleware from "./middleware/middleware";

import swagger from 'swagger-ui-express'
import swaggerDoc from './swagger/swagger.json'

const port = process.env.PORT || 3005;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cookieParser())
app.use(helmet())
app.use(compress())
app.use(cors())
app.use(async(req,res,next) => {
    req.context = {models}
    next();
})

app.use(process.env.URL_API+"/products", routes.prodRoute)
app.use(process.env.URL_API+"/orders",routes.order)
app.use(process.env.URL_API+"/auth",routes.AuthRoute)
app.use(process.env.URL_API+"/users",routes.user)
//app.use(middleware.handleError)
app.use(middleware.notFound)

/*const dropDatabaseSync = false;

sequalize.sync({force : dropDatabaseSync}).then(async()=>{
    if(dropDatabaseSync) {
        console.log("Database do note drop");
    }
    
})*/
app.use("api/docs", swagger.serve,swagger.setup(swaggerDoc));

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

export default app