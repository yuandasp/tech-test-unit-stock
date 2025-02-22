const express = require("express");
const dotenv = require("dotenv");
const { stockRoute, unitRoute } = require("../routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/stock", stockRoute);
app.use("/unitkerja", unitRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
