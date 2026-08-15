import express from "express";

const app = express();

const items = [
    { id: 1, name: "Wireless Noise-Canceling Headphones", category: "Electronics", price: 199.99, inStock: true },
    { id: 2, name: "Ergonomic Mechanical Keyboard", category: "Accessories", price: 89.50, inStock: true },
    { id: 3, name: "Ultra-Wide 4K Gaming Monitor", category: "Electronics", price: 449.00, inStock: false },
    { id: 4, name: "Stainless Steel Thermal Water Bottle", category: "Lifestyle", price: 24.99, inStock: true },
    { id: 5, name: "Smart Fitness Watch with Heart Rate Monitor", category: "Wearables", price: 129.95, inStock: true }
];

app.get("/items", (req, res) => {
    return res.status(200).json(items);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});