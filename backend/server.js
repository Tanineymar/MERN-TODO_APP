import dns from 'dns'
dns.setServers(["1.1.1.1" ,"8.8.8.8"])

import dotenv from 'dotenv'
dotenv.config()


import app from "./src/app.js";
import connectDB from "./src/db/db.js";

connectDB()
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on PORT ${process.env.PORT || 5000}`)
})