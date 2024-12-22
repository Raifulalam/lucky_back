const mongoose = require('mongoose');
const products = [
    // Refrigerators
    {
        image: "image/doubledoor/9D5A8F698D4550F-RT28A32216U.png",
        name: "RT28A32216R Samsung Double Door Refrigerator with Digital Inverter Technology, 253L",
        link: "details.html",
        details: "Refrigerator of 100l Samsung 22452",
        rating: {
            stars: 4.5,
            count: 87
        },
        mrp: 60990,
        price: 51000,
        keywords: [
            "doubledoor", "rt28a32216r", "253", "refrigerator", "samsung",
        ],
        category: "Refrigerators"
    },
    {
        image: "image/doubledoor/11DEAB55E1C3117-RT37C4521S8.png",
        name: "RT37C4521S8 Samsung Double Door Refrigerator, 345L",
        rating: {
            stars: 5,
            count: 219
        },
        mrp: 84990,
        price: 71000,
        keywords: [
            "doubledoor", "rt37c4521s8", "345", "refrigerator", "samsung",
        ],
        category: "Refrigerators"
    },
    {
        image: "image/doubledoor/LG-GLT255.png",
        name: "LG GLT255 Double Door Refrigerator, 255L",
        rating: {
            stars: 4.6,
            count: 300
        },
        mrp: 59990,
        price: 51000,
        keywords: [
            "doubledoor", "lg", "255", "refrigerator",
        ],
        category: "Refrigerators"
    },
    {
        image: "image/doubledoor/CG-DoubleDoor-265L.png",
        name: "CG 265L Double Door Refrigerator",
        rating: {
            stars: 4.4,
            count: 155
        },
        mrp: 50990,
        price: 43000,
        keywords: [
            "doubledoor", "cg", "265", "refrigerator",
        ],
        category: "Refrigerators"
    },
    {
        image: "image/doubledoor/Whirlpool-WD255.png",
        name: "Whirlpool 255L Double Door Refrigerator",
        rating: {
            stars: 4.7,
            count: 250
        },
        mrp: 63990,
        price: 53000,
        keywords: [
            "doubledoor", "whirlpool", "255", "refrigerator",
        ],
        category: "Refrigerators"
    },
    {
        image: "image/doubledoor/Haier-HR265.png",
        name: "Haier 265L Double Door Refrigerator",
        rating: {
            stars: 4.6,
            count: 210
        },
        mrp: 57990,
        price: 49000,
        keywords: [
            "doubledoor", "haier", "265", "refrigerator",
        ],
        category: "Refrigerators"
    },

    // Washing Machines
    {
        id: "89bf2e77-02d4-4be3-8484-b897ad0bcf9a",
        image: "image/washingmachine/LG-T8.png",
        name: "LG T8 Top Load Washing Machine, 8KG",
        rating: {
            stars: 4.5,
            count: 200
        },
        mrp: 45000,
        price: 38000,
        keywords: [
            "topload", "lg", "8kg", "washingmachine", "digitalinverter",
        ],
        category: "WashingMachines"
    },
    {
        id: "bd59c562-4a69-4f7f-bfdd-b28bb957e7cc",
        image: "image/washingmachine/Whirlpool-Fuzzy.png",
        name: "Whirlpool 7.5KG Fuzzy Logic Washing Machine",
        rating: {
            stars: 4.3,
            count: 170
        },
        mrp: 38000,
        price: 31000,
        keywords: [
            "topload", "whirlpool", "7.5kg", "washingmachine", "fuzzylogic",
        ],
        category: "WashingMachines"
    },
    {
        id: "89c34e27-f41f-4696-8fbd-9c03e2746d2f",
        image: "image/washingmachine/Haier-HW105.png",
        name: "Haier 10KG Top Load Washing Machine",
        rating: {
            stars: 4.6,
            count: 250
        },
        mrp: 55000,
        price: 45000,
        keywords: [
            "topload", "haier", "10kg", "washingmachine",
        ],
        category: "WashingMachines"
    },
    {
        id: "36c7084d-3b60-4700-a5b0-8fd5a1d35e9a",
        image: "image/washingmachine/Samsung-WM10.png",
        name: "Samsung 10KG Front Load Washing Machine",
        rating: {
            stars: 4.7,
            count: 180
        },
        mrp: 65000,
        price: 53000,
        keywords: [
            "frontload", "samsung", "10kg", "washingmachine",
        ],
        category: "WashingMachines"
    },

    // Air Conditioners
    {
        id: "1a44b2c4-ff4f-492e-b7fc-63f0d91467fc",
        image: "image/airconditioner/Samsung-AR18.png",
        name: "Samsung AR18 Air Conditioner, 1.5 Ton",
        rating: {
            stars: 4.7,
            count: 120
        },
        mrp: 55000,
        price: 46000,
        keywords: [
            "airconditioner", "samsung", "1.5ton", "ac", "digitalinverter",
        ],
        category: "AirConditioners"
    },
    {
        id: "4c7fd3c6-93ff-4b77-bf98-2f47c8c3f2b7",
        image: "image/airconditioner/LG-LS-Q18CNZA.png",
        name: "LG LS-Q18CNZA Air Conditioner, 1.5 Ton",
        rating: {
            stars: 4.6,
            count: 98
        },
        mrp: 53000,
        price: 45000,
        keywords: [
            "airconditioner", "lg", "1.5ton", "ac",
        ],
        category: "AirConditioners"
    },
    {
        id: "6f998f7a-fc5b-4722-94c1-7ed4b02f66da",
        image: "image/airconditioner/Whirlpool-AC18.png",
        name: "Whirlpool 1.5 Ton Air Conditioner",
        rating: {
            stars: 4.6,
            count: 150
        },
        mrp: 54000,
        price: 46000,
        keywords: [
            "airconditioner", "whirlpool", "1.5ton", "ac",
        ],
        category: "AirConditioners"
    },

    // Home Appliances
    {
        id: "c5e3b810-f7e5-4748-a990-f8f31c5e91ed",
        image: "image/homeappliance/Whirlpool-Microwave.png",
        name: "Whirlpool 20L Microwave Oven",
        rating: {
            stars: 4.4,
            count: 75
        },
        mrp: 15000,
        price: 12000,
        keywords: [
            "microwave", "whirlpool", "oven", "homeappliance",
        ],
        category: "HomeAppliances"
    },
    {
        id: "3b0a249d-8965-45b9-bb51-ff9dfffbf9d4",
        image: "image/homeappliance/LG-Blender.png",
        name: "LG 600W Blender",
        rating: {
            stars: 4.2,
            count: 60
        },
        mrp: 8000,
        price: 6500,
        keywords: [
            "blender", "lg", "homeappliance",
        ],
        category: "HomeAppliances"
    },

    // Kitchen Appliances
    {
        id: "3498bf76-d55e-4378-b8d1-fdd35a6f7c0e",
        image: "image/kitchenappliance/LG-Refrigerator.png",
        name: "LG 270L Double Door Refrigerator",
        rating: {
            stars: 4.8,
            count: 230
        },
        mrp: 51000,
        price: 43000,
        keywords: [
            "doubledoor", "lg", "kitchenappliance", "refrigerator",
        ],
        category: "KitchenAppliances"
    },
    {
        id: "b77c6ed5-1fd6-4207-b238-1b8b6993a732",
        image: "image/kitchenappliance/Whirlpool-Dishwasher.png",
        name: "Whirlpool Dishwasher 12 Place Settings",
        rating: {
            stars: 4.5,
            count: 45
        },
        mrp: 25000,
        price: 21000,
        keywords: [
            "dishwasher", "whirlpool", "kitchenappliance",
        ],
        category: "KitchenAppliances"
    },

    // Music & Home Theater
    {
        id: "ada7db24-cf3f-4de5-bf87-1cf2e520568a",
        image: "image/musicht/sony-home-theater.png",
        name: "Sony 5.1 Channel Home Theater System",
        rating: {
            stars: 4.5,
            count: 200
        },
        mrp: 25000,
        price: 22000,
        keywords: [
            "hometheater", "sony", "sound", "music",
        ],
        category: "MusicHomeTheater"
    },
    {
        id: "6d9c04fa-d07f-4c87-b3ad-bc1a87bc2cd6",
        image: "image/musicht/Samsung-Soundbar.png",
        name: "Samsung 2.1 Channel Soundbar with Subwoofer",
        rating: {
            stars: 4.6,
            count: 180
        },
        mrp: 18000,
        price: 15000,
        keywords: [
            "soundbar", "samsung", "hometheater", "music",
        ],
        category: "MusicHomeTheater"
    },
    {
        id: "acf7f7d3-b8c5-43ac-88b4-540106b12b6f",
        image: "image/musicht/LG-Soundbar.png",
        name: "LG 3.1 Channel Soundbar with Wireless Subwoofer",
        rating: {
            stars: 4.3,
            count: 120
        },
        mrp: 22000,
        price: 19000,
        keywords: [
            "soundbar", "lg", "hometheater", "music",
        ],
        category: "MusicHomeTheater"
    },
];

module.exports = products;
