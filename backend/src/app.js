const express = require("express");
const cors = require("cors");

const app = express();
const kitchenRoutes = require('./routes/kitchen.routes');

app.use(cors());
app.use(express.json());

app.use("/api/payment", require("./routes/payment.routes"));
app.use("/api/kitchen", kitchenRoutes);
app.use("/api/orders", require("./routes/order.routes"));


module.exports = app;