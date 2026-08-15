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
    { id: 15, name: "Noise-Isolating Memory Foam Earbuds", category: "Electronics", price: 15.99, inStock: true },
    // { id: 16, name: "Modular Cable Management Sleeve Set", category: "Accessories", price: 14.99, inStock: true },
    // { id: 17, name: "Dual-Driver In-Ear Studio Monitors", category: "Electronics", price: 89.99, inStock: true },
    // { id: 18, name: "Insulated Stainless Steel Travel Mug", category: "Lifestyle", price: 29.50, inStock: true },
    // { id: 19, name: "Active Noise-Canceling Sleep Earbuds", category: "Wearables", price: 149.00, inStock: false },
    // { id: 20, name: "Stream Deck Controller 15-Key", category: "Electronics", price: 139.99, inStock: true },
    // { id: 21, name: "Anti-Blue Light Computer Glasses", category: "Accessories", price: 22.00, inStock: true },
    // { id: 22, name: "Ultra-Fast NVMe M.2 External SSD 1TB", category: "Electronics", price: 109.95, inStock: true },
    // { id: 23, name: "Ergonomic Memory Foam Lumbar Pillow", category: "Lifestyle", price: 32.99, inStock: true },
    // { id: 24, name: "Fitness Tracker Smart Ring", category: "Wearables", price: 199.00, inStock: false },
    // { id: 25, name: "Foldable Wireless Charging Station 3-in-1", category: "Electronics", price: 49.99, inStock: true },
    // { id: 26, name: "4K Ultra HD Web Camera with Privacy Cover", category: "Electronics", price: 99.50, inStock: true },
    // { id: 27, name: "Custom PBT Keycap Set Cherry Profile", category: "Accessories", price: 38.00, inStock: true },
    // { id: 28, name: "Self-Cleaning UV Water Bottle", category: "Lifestyle", price: 59.99, inStock: false },
    // { id: 29, name: "Sensa-Vibe Haptic Gaming Headset", category: "Electronics", price: 129.99, inStock: true },
    // { id: 30, name: "Breathable Mesh Ergonomic Office Chair", category: "Lifestyle", price: 229.00, inStock: true }
];

app.get("/items", (req, res) => {

    return res.status(200).json(items);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});