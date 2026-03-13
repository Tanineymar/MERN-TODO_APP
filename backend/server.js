import 'dotenv/config' 

import app from "./src/app.js";
import connectDB from "./src/db/db.js";

connectDB()
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on PORT ${process.env.PORT || 5000}`)
})