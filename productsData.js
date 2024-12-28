const mongoose = require('mongoose');
const products = [
    {
        name: "Diet 8T Tower Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 8900,
        mrp: 10470,
        brand: "Symphony",
        keywords: ["Tower Cooler", "Blower", "Honeycomb", "95 watt", "8 Ltr"],
        capacity: "8 Ltr",
        description: "A compact and efficient tower cooler with honeycomb cooling and a 95-watt motor.",
        model: "Diet 8T"
    },
    {
        name: "Ice Cube 17XL Tower Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 12580,
        mrp: 14800,
        brand: "Symphony",
        keywords: ["Tower Cooler", "Fan", "Honeycomb", "105 watt", "17 Ltr"],
        capacity: "17 Ltr",
        description: "High-efficiency tower cooler with honeycomb pads and a 105-watt motor.",
        model: "Ice Cube 17XL"
    },
    {
        name: "Ice Cube 27XL Tower Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 14340,
        mrp: 16870,
        brand: "Symphony",
        keywords: ["Tower Cooler", "Fan", "Honeycomb", "105 watt", "27 Ltr"],
        capacity: "27 Ltr",
        description: "Powerful tower cooler with a 105-watt motor and spacious 27 Ltr capacity.",
        model: "Ice Cube 27XL"
    },
    {
        name: "Diet 22 i Tower Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 14493,
        mrp: 17050,
        brand: "Symphony",
        keywords: ["Tower Cooler", "Blower", "Honeycomb", "170 watt", "22 Ltr"],
        capacity: "22 Ltr",
        description: "Efficient and durable tower cooler with honeycomb cooling and a powerful 170-watt motor.",
        model: "Diet 22 i"
    },
    {
        name: "HiCool i Tower Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 16745,
        mrp: 19700,
        brand: "Symphony",
        keywords: ["Tower Cooler", "Blower", "Honeycomb", "185 watt", "31 Ltr"],
        capacity: "31 Ltr",
        description: "Top-tier tower cooler with 185-watt power and a spacious 31 Ltr capacity.",
        model: "HiCool i"
    },
    {
        name: "Sumo 40 XL Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 16703,
        mrp: 19650,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "105 watt", "40 Ltr"],
        capacity: "40 Ltr",
        description: "Efficient desert cooler with honeycomb pads, ideal for larger spaces.",
        model: "Sumo 40 XL"
    },
    {
        name: "Sumo 45 Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 18785,
        mrp: 22100,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Aspen Pad", "150 watt", "45 Ltr"],
        capacity: "45 Ltr",
        description: "A high-performance desert cooler featuring Aspen pads and a 150-watt motor.",
        model: "Sumo 45"
    },
    {
        name: "Siesta 45 XL Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 19635,
        mrp: 23100,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "150 watt", "45 Ltr"],
        capacity: "45 Ltr",
        description: "Powerful desert cooler with honeycomb pads and efficient 150-watt motor.",
        model: "Siesta 45 XL"
    },
    {
        name: "Winter XL Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 20570,
        mrp: 24200,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "190 watt", "56 Ltr"],
        capacity: "56 Ltr",
        description: "Robust desert cooler with a high-capacity 56 Ltr tank and 190-watt power.",
        model: "Winter XL"
    },
    {
        name: "Siesta 70 XL Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 22355,
        mrp: 26300,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "150 watt", "70 Ltr"],
        capacity: "70 Ltr",
        description: "A large capacity desert cooler with honeycomb pads, ideal for vast spaces.",
        model: "Siesta 70 XL"
    },
    {
        name: "Sumo 75 XL Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 26775,
        mrp: 31500,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "185 watt", "75 Ltr"],
        capacity: "75 Ltr",
        description: "High-performance desert cooler with 185-watt motor and a large 75 Ltr tank.",
        model: "Sumo 75 XL"
    },
    {
        name: "Winter 80 i Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 25755,
        mrp: 30300,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "190 watt", "80 Ltr"],
        capacity: "80 Ltr",
        description: "Advanced desert cooler with 190-watt motor and 80 Ltr capacity for large areas.",
        model: "Winter 80 i"
    },
    {
        name: "Sumo 115 XL Desert Cooler",
        image: "image_url_here",
        category: "AirCooler",
        price: 35947,
        mrp: 42290,
        brand: "Symphony",
        keywords: ["Desert Cooler", "Fan", "Honeycomb", "185 watt", "115 Ltr"],
        capacity: "115 Ltr",
        description: "Top-of-the-line desert cooler with immense capacity of 115 Ltr and high power.",
        model: "Sumo 115 XL"
    }
];


module.exports = products;
