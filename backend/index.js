const express = require('express');
const  app = express();

const taskRoutes = require('./routes/Task')
const projectRoutes = require("./routes/Project")

const database = require('./configuration/dbConnection');
const  cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();


app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,       
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use("/api/v1/", taskRoutes);
app.use("/api/v1/project",projectRoutes)

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})




























