const mongoose = require('mongoose');
const products = [

    {
        category: "AirConditioners",
        price: 98310.00, // Converted from "98,310.00"
        description: "",
        brand: "LG",
        name: "S4H18TZCAA",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: [],
        model: "S4H18TZCAA",
        mrp: 126090.00 // Converted from "1,26,090.00"
    },
    {
        category: "AirConditioners",
        price: 127803.00, // Converted from "1,27,803.00"
        description: "",
        brand: "LG",
        name: "S4H24TZCAA",
        image: "URL to Image",
        capacity: "2 Ton",
        keywords: [],
        model: "S4H24TZCAA",
        mrp: 163890.00 // Converted from "1,63,890.00"
    },
    {
        category: "AirConditioners",
        price: 55781.00, // Converted from "55,781.00"
        description: "",
        brand: "LG",
        name: "UT18.NQDRO",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: [],
        model: "UT18.NQDRO",
        mrp: 71590.00 // Converted from "71,590.00"
    },
    {
        category: "AirConditioners",
        price: 99553.00, // Converted from "99,553.00"
        description: "",
        brand: "LG",
        name: "UU18.UEDRO",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: [],
        model: "UU18.UEDRO",
        mrp: 127690.00 // Converted from "1,27,690.00"
    },
    {
        category: "AirConditioners",
        price: 22770.00, // Converted from "22,770.00"
        description: "",
        brand: "LG",
        name: "PTMCHWO",
        image: "URL to Image",
        capacity: "Above 1 Ton",
        keywords: [],
        model: "PTMCHWO",
        mrp: 29190.00 // Converted from "29,190.00"
    },
    {
        category: "AirConditioners",
        price: 178104.00, // Converted from "1,78,104.00"
        description: "",
        brand: "LG",
        name: "GRAND TOTAL",
        image: "URL to Image",
        capacity: "",
        keywords: [],
        model: "GRAND TOTAL",
        mrp: 228470.00 // Converted from "2,28,470.00"
    },
    {
        category: "AirConditioners",
        price: 79439.00, // Converted from "79,439.00"
        description: "",
        brand: "LG",
        name: "ATNW18GPLS1",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: [],
        model: "ATNW18GPLS1",
        mrp: 101890.00 // Converted from "1,01,890.00"
    },
    {
        category: "AirConditioners",
        price: 113226.00, // Converted from "1,13,226.00"
        description: "",
        brand: "LG",
        name: "ATUW18GPLS1",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: [],
        model: "ATUW18GPLS1",
        mrp: 145190.00 // Converted from "1,45,190.00"
    },
    {
        category: "AirConditioners",
        price: 22770.00, // Converted from "22,770.00"
        description: "",
        brand: "LG",
        name: "PTMCHWO",
        image: "URL to Image",
        capacity: "Above 1 Ton",
        keywords: [],
        model: "PTMCHWO",
        mrp: 29190.00 // Converted from "29,190.00"
    },
    {
        category: "AirConditioners",
        price: 215435.00, // Converted from "2,15,435.00"
        description: "",
        brand: "LG",
        name: "GRAND TOTAL",
        image: "URL to Image",
        capacity: "",
        keywords: [],
        model: "GRAND TOTAL",
        mrp: 276270.00 // Converted from "2,76,270.00"
    },
    {
        category: "AirConditioners",
        price: 78705.00, // Converted from "78,705.00"
        description: "",
        brand: "LG",
        name: "ATNW24GPLS1",
        image: "URL to Image",
        capacity: "2 Ton",
        keywords: [],
        model: "ATNW24GPLS1",
        mrp: 100990.00 // Converted from "1,00,990.00"
    },
    {
        category: "AirConditioners",
        price: 139668.00, // Converted from "1,39,668.00"
        description: "",
        brand: "LG",
        name: "ATUW24GPLS1",
        image: "URL to Image",
        capacity: "2 Ton",
        keywords: [],
        model: "ATUW24GPLS1",
        mrp: 179090.00 // Converted from "1,79,090.00"
    },
    {
        category: "AirConditioners",
        price: 22770.00, // Converted from "22,770.00"
        description: "",
        brand: "LG",
        name: "PTMCHWO",
        image: "URL to Image",
        capacity: "Above 1 Ton",
        keywords: [],
        model: "PTMCHWO",
        mrp: 29190.00 // Converted from "29,190.00"
    }

];

module.exports = products;
