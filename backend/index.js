const express = require('express');

const app = express();
const productRoutes = require("./router/productRoute");

app.use(express.json());

app.use("/product", productRoutes);

app.listen(5000, () => {
    console.log("Server is running on 5000");
});
