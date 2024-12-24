const mongoose = require('mongoose');
const products = [

    {
        category: "Refrigerators",
        price: 344254.50,
        description: "Inverter Linear Compressor, 10 Year Compressor Warranty, Water & Dispenser, Door-In-Door, Hygiene Fresh+, Bio Shield, Tempered Glass Shelf",
        brand: "LG",
        name: "GSX6354MC",
        image: "URL to Image",
        capacity: "694L",
        keywords: ["Inverter Linear Compressor", "Water Dispenser", "Hygiene Fresh+", "Bio Shield"],
        model: "GSX6354MC",
        mrp: 441390.00
    },
    {
        category: "Refrigerators",
        price: 211423.00,
        description: "Smart Inverter Compressor, Linear Cooling+, Door Cooling+, UltraSleek Door, Multi Air Flow, Smart Diagnosis, Matt Black",
        brand: "LG",
        name: "GSB6473MC",
        image: "URL to Image",
        capacity: "694L",
        keywords: ["Smart Inverter", "Linear Cooling", "UltraSleek Door", "Multi Air Flow"],
        model: "GSB6473MC",
        mrp: 271090.00
    },
    {
        category: "AirConditioners",
        price: 83620.00,
        description: "Digital display, Heat & Cool, Dual Inverter compressor, 10 years warranty, Anti-virus filter, 70% Energy Saving, 40% Faster Cooling/Heating, 4 in 1 convertible cooling, Ocean Black fin",
        brand: "LG",
        name: "S3-W12JA3VA.APWBEXP/ AP6GEXP",
        image: "URL to Image",
        capacity: "1 Ton",
        keywords: ["Digital display", "Dual Inverter", "Anti-virus filter", "Convertible cooling", "Faster Cooling/Heating"],
        model: "S3-W12JA3VA.APWBEXP",
        mrp: 107290.00
    },
    {
        category: "AirConditioners",
        price: 150911.50,
        description: "Digital display, Heat & Cool, Smart Inverter, Dual Inverter compressor 10 years warranty, Anti-bacterial filter, Auto clean, Allergy Care Filter, 70% Energy Saving, 40% Faster Cooling, Low decibel sound, Easy Installation",
        brand: "LG",
        name: "S3W24K23VB",
        image: "URL to Image",
        capacity: "2 Ton",
        keywords: ["Smart Inverter", "Anti-bacterial filter", "Auto clean", "Low decibel sound", "Easy Installation"],
        model: "S3W24K23VB",
        mrp: 193490.00
    },
    {
        category: "AirConditioners",
        price: 92773.00,
        description: "LG ThinQ, Dual Inverter Compressor, 10 Yrs Compressor Warranty, Dual Cool, Faster Cooling, Less Noise, Anti Virus Filter, Monsoon Comfort, Convertible 4 in 1, 4 way swing, + Smart Diagnosis + Jet Mode, +Filter Management, +Advance Schedule",
        brand: "LG",
        name: "S3-W12JA3DA",
        image: "URL to Image",
        capacity: "1 Ton",
        keywords: ["LG ThinQ", "Dual Inverter", "Anti Virus Filter", "Convertible 4 in 1", "Smart Diagnosis"],
        model: "S3-W12JA3DA",
        mrp: 118990.00
    },
    {
        category: "AirConditioners",
        price: 126729.50,
        description: "LG ThinQ, Dual Inverter Compressor, 10 Yrs Compressor Warranty, Dual Cool, Faster Cooling, Less Noise, Anti Virus Filter, Monsoon Comfort, Convertible 4 in 1, 4 way swing, + Smart Diagnosis + Jet Mode, +Filter Management, +Advance Schedule",
        brand: "LG",
        name: "S3-W18KL3DA",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: ["LG ThinQ", "Dual Inverter", "Faster Cooling", "Monsoon Comfort", "Jet Mode"],
        model: "S3-W18KL3DA",
        mrp: 159990.00
    },
    {
        category: "AirConditioners",
        price: 118537.00,
        description: "LG ThinQ, Dual Inverter Compressor, 10 Yrs Compressor Warranty, Dual Cool, Faster Cooling, Less Noise, Anti Virus Filter, Monsoon Comfort, Convertible 4 in 1, 4 way swing, + Smart Diagnosis + Jet Mode, +Filter Management, +Advance Schedule",
        brand: "LG",
        name: "S3-W18KL3VD.AL6G",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: ["LG ThinQ", "Dual Inverter", "Anti Virus Filter", "Monsoon Comfort", "Faster Cooling"],
        model: "S3-W18KL3VD.AL6G",
        mrp: 151990.00
    },
    {
        category: "AirConditioners",
        price: 118537.00,
        description: "LG ThinQ, Dual Inverter Compressor, 10 Yrs Compressor Warranty, Dual Cool, Faster Cooling, Less Noise, Anti Virus Filter, Monsoon Comfort, Convertible 4 in 1, 4 way swing, + Smart Diagnosis + Jet Mode, +Filter Management, +Advance Schedule",
        brand: "LG",
        name: "S3-W18KL3VA",
        image: "URL to Image",
        capacity: "1.5 Ton",
        keywords: ["LG ThinQ", "Dual Inverter", "Monsoon Comfort", "Jet Mode", "Convertible 4 in 1"],
        model: "S3-W18KL3VA",
        mrp: 151990.00
    },
    {
        category: "AirConditioners",
        price: 70850.00,
        description: "",
        brand: "LG",
        name: "S4H12TZCAA",
        image: "URL to Image",
        capacity: "1 Ton",
        keywords: [],
        model: "S4H12TZCAA",
        mrp: 90890.00
    }


];

module.exports = products;
