const express = require('express');
const router = express.Router();

// Get all products
const getAllProducts = async (req, res) => {
    try {
        res.status(200).json({ message: "Get all products" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single product
const getProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Get single product" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create product
const createProduct = async (req, res) => {
    try {
        res.status(201).json({ message: "Create product" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Update product" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Delete product" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}; 