const express = require('express');
const  app = express();

const taskRoutes = require('./routes/Task')

const database = require('./configuration/dbConnection');
const  cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();


app.use(express.json());

app.use(
    cors({
        origin:"http://localhost:5173",
 		credentials:true,
    })
)

app.use("/api/v1/", taskRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})




























