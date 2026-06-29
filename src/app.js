import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors ({
    origin : process.env.CORS_ORIGIN ,
    credentials : true
}))


app.use(express.json({ limit : "16kb"}))
// if data comes through JSON then allow by JSON to comes in Backend


app.use(express.urlencoded({extended:true , limit: "16kb"}))
// extended -- when comes nested obj
// allow URLs


app.use(express.static("public"))
// if file,img and kind of data comes then want to store on user own server -- here in public folder data stored

app.use(cookieParser())

export {app}