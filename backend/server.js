import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import { configDotenv } from "dotenv";


configDotenv()
connectDB()
app.listen(process.env.PORT || 5000 , ()=>{
    console.log("Server is running on PORT 3000")
})