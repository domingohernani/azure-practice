import express from "express";

const app = express();

const items = [
    { id: 1, name: "Wireless Noise-Canceling Headphones", category: "Electronics", price: 199.99, inStock: true },
    { id: 2, name: "Ergonomic Mechanical Keyboard", category: "Accessories", price: 89.50, inStock: true },
    { id: 3, name: "Ultra-Wide 4K Gaming Monitor", category: "Electronics", price: 449.00, inStock: false },
    { id: 4, name: "Stainless Steel Thermal Water Bottle", category: "Lifestyle", price: 24.99, inStock: true },
    { id: 5, name: "Smart Fitness Watch with Heart Rate Monitor", category: "Wearables", price: 129.95, inStock: true },
    { id: 6, name: "Precision Vertical Ergonomic Mouse", category: "Accessories", price: 49.99, inStock: true },
    { id: 7, name: "Adjustable Aluminum Laptop Stand", category: "Accessories", price: 34.50, inStock: true },
    { id: 8, name: "Portable GaN Fast Charger 65W", category: "Electronics", price: 39.99, inStock: true },
    { id: 9, name: "Water-Resistant Commuter Backpack", category: "Lifestyle", price: 68.00, inStock: false },
    { id: 10, name: "USB-C Condenser Microphone", category: "Electronics", price: 79.95, inStock: true },
    { id: 11, name: "Minimalist Desk Pad Felt Mat", category: "Accessories", price: 19.99, inStock: true },
    { id: 12, name: "Smart LED Desk Lamp with Wireless Charging", category: "Lifestyle", price: 45.00, inStock: true },
    { id: 13, name: "High-Fidelity Bluetooth Speaker", category: "Electronics", price: 119.99, inStock: false },
    { id: 14, name: "MagSafe Magnetic Power Bank 10,000mAh", category: "Wearables", price: 42.50, inStock: true },
    { id: 15, name: "Noise-Isolating Memory Foam Earbuds", category: "Electronics", price: 15.99, inStock: true }
];

app.get("/items", (req, res) => {
    return res.status(200).json(items);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});