const fs = require("fs");

const getAllProducts = (req, res) => {
    const data = fs.readFileSync("./product.json", "utf-8");
    res.send({ message: "Product Data Fetched", data: data });
};

const getProductById = (req, res) => {
    console.log("Get Product By Id api called");
    res.send("Get Product By Id api called");
};

const createProduct = (req, res) => {
    const productData = req.body;
    data.push(productData);
    res.send({ message: "Data inserted", product: productData });
};

const updateProduct = (req, res) => {
    console.log("Update Product api called");
};

const deleteProduct = (req, res) => {
    console.log("Delete Product api called");
};

module.exports = { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
};
