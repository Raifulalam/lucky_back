const mongoose = require('mongoose');
const products = [

    {
        image: "https://www.samsungplaza.com.np/public/832-832/files/B1320AA0CE9F8C4-4…",
        name: "UA43DU7700RSHE",
        description: "43 inch Full HD TV with a sleek design, offering clear picture and pow…",
        mrp: 74990,
        price: 66700,
        keywords: [],
        category: "LEDTelevisions",
        brand: "Samsung"
    },
    {

        image: "https://www.samsungplaza.com.np/public/832-832/files/E4A59045F2E1AB3-U…",
        name: "UA32T4340BKXXL",
        description: "32 inch HD LED TV offering clear visuals and great audio for a compact…",
        mrp: 41607,
        price: 29990,
        keywords: ["Array", "5"],
        category: "LEDTelevisions",
        brand: "samsung"
    },
    {

        image: "https://www.samsungplaza.com.np/public/files/9E82A901E17B357-UA43T5400…",
        name: "UA43T5400ARSHE",
        description: "43 inch HD LED TV with smart features for a seamless viewing experienc…",
        mrp: 73990,
        price: 51200,
        keywords: ["Array", "6"],
        category: "LEDTelevisions",

    },
    {

        image: "https://www.samsungplaza.com.np/public/832-832/files/1D935B85AFF0FA9-C…",
        name: "UA43CU7700RSHE",
        description: "43 inch Full HD LED TV with vivid colors and excellent picture quality…",
        mrp: 74990,
        price: 61200,
        keywords: ["Array", "6"],
        category: "LEDTelevisions",

    },
    {

        image: "https://www.samsungplaza.com.np/public/832-832/files/B1320AA0CE9F8C4-4…",
        name: "UA43DU7700RSHE",
        description: "43 inch Full HD TV with a sleek design, offering clear picture and pow…",
        mrp: 74990,
        price: 66400,
        keywords: ["Array", "6"],
        category: "LEDTelevisions",

    },
    {

        image: "https://www.samsungplaza.com.np/public/files/D253F77630D689C-in-crysta…",
        name: "UA55DU7700RSHE",
        description: "55 inch Full HD LED TV with immersive sound and vivid colors for an en…",
        mrp: 97990,
        price: 94500,
        keywords: ["Array", "6"],
        category: "LEDTelevisions",

    },
    {

        image: "https://www.samsungplaza.com.np/public/832-832/files/F70664FEEC97239-U…",
        name: "UA65AU7700RXHE",
        description: "65 inch Full HD LED TV with ultra-slim design and high-quality picture…",
        mrp: 143990,
        price: 116700,
        keywords: ["Array", "6"],
        category: "LEDTelevisions",

    },
    {

        image: "https://www.samsungplaza.com.np/public/files/1D935B85AFF0FA9-CU7700.pn…",
        name: "UA65CU7700RSHE",
        description: "65 inch UHD TV offering exceptional clarity, brightness, and sharp det…",
        mrp: 143990,
        price: 127800,
        keywords: ["Array", "6"],
        category: "LEDTelevisions",

    },
    {

        image: "https://www.samsungplaza.com.np/public/832-832/files/544CD29509E7573-i…",
        name: "UA65DU7700RSHE",
        description: "65 inch UHD TV with vivid colors and great contrast for an immersive h…",
        mrp: 143990,
        price: 138900,
        keywords: ["Array", "2"],
        category: "LEDTelevisions",
        capacity: "65 inches",
        brand: "Samsung",

    },
    {
        name: "UA65DU7700RSHE",
        model: "UA65DU7700RSHE",
        mrp: 143990,
        price: 138900,
        keywords: ["UHD", "65 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/UA65DU7700RSHE.jpg",
        description: "65 inch UHD TV with vivid colors and great contrast for an immersive home theater experience.",
        brand: "Samsung",
        capacity: "65 inches"
    },
    {
        name: "UA75DU8000RSHE",
        model: "UA75DU8000RSHE",
        mrp: 286990,
        price: 233400,
        keywords: ["UHD", "75 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/UA75DU8000RSHE.jpg",
        description: "75 inch UHD TV offering breathtaking clarity and vibrant colors for a superior viewing experience.",
        brand: "Samsung",
        capacity: "75 inches"
    },
    {
        name: "UA85BU8000RXHE",
        model: "UA85BU8000RXHE",
        mrp: 393990,
        price: 338900,
        keywords: ["UHD", "85 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/UA85BU8000RXHE.jpg",
        description: "85 inch UHD TV with ultra-clear resolution and enhanced color accuracy for larger spaces.",
        brand: "Samsung",
        capacity: "85 inches"
    },
    {
        name: "UA85CU8000RSHE",
        model: "UA85CU8000RSHE",
        mrp: 393990,
        price: 361200,
        keywords: ["UHD", "85 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/UA85CU8000RSHE.jpg",
        description: "85 inch UHD LED TV offering enhanced viewing with deep contrast and realistic colors.",
        brand: "Samsung",
        capacity: "85 inches"
    },
    {
        name: "UA85DU8000RSHE",
        model: "UA85DU8000RSHE",
        mrp: 393990,
        price: 372300,
        keywords: ["UHD", "85 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/UA85DU8000RSHE.jpg",
        description: "85 inch UHD LED TV with superior picture quality, perfect for movie lovers and sports enthusiasts.",
        brand: "Samsung",
        capacity: "85 inches"
    },
    {
        name: "QA55Q60CARXHE",
        model: "QA55Q60CARXHE",
        mrp: 179990,
        price: 133400,
        keywords: ["QLED", "55 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA55Q60CARXHE.jpg",
        description: "55 inch QLED TV with stunning color accuracy, perfect for vibrant, lifelike visuals.",
        brand: "Samsung",
        capacity: "55 inches"
    },
    {
        name: "QA55Q60CARSHE",
        model: "QA55Q60CARSHE",
        mrp: 179990,
        price: 133400,
        keywords: ["QLED", "55 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA55Q60CARSHE.jpg",
        description: "55 inch QLED TV with Quantum Dot technology, delivering rich colors and crystal-clear clarity.",
        brand: "Samsung",
        capacity: "55 inches"
    },
    {
        name: "QA55Q60DARSHE",
        model: "QA55Q60DARSHE",
        mrp: 179990,
        price: 144400,
        keywords: ["QLED", "55 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA55Q60DARSHE.jpg",
        description: "55 inch QLED TV with Dynamic Crystal Color for enhanced brightness and color details.",
        brand: "Samsung",
        capacity: "55 inches"
    },
    {
        name: "QA65Q60CARSHE",
        model: "QA65Q60CARSHE",
        mrp: 250990,
        price: 200000,
        keywords: ["QLED", "65 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA65Q60CARSHE.jpg",
        description: "65 inch QLED TV with amazing contrast and immersive audio for an exceptional viewing experience.",
        brand: "Samsung",
        capacity: "65 inches"
    },
    {
        name: "QA65Q60DARSHE",
        model: "QA65Q60DARSHE",
        mrp: 250990,
        price: 222300,
        keywords: ["QLED", "65 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA65Q60DARSHE.jpg",
        description: "65 inch QLED TV with Dynamic HDR for stunning picture quality and clear, vibrant details.",
        brand: "Samsung",
        capacity: "65 inches"
    },
    {
        name: "QA75Q60CARSHE",
        model: "QA75Q60CARSHE",
        mrp: 340990,
        price: 266700,
        keywords: ["QLED", "75 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA75Q60CARSHE.jpg",
        description: "75 inch QLED TV offering deep blacks and brighter whites, perfect for large home theaters.",
        brand: "Samsung",
        capacity: "75 inches"
    },
    {
        name: "QA75Q60DARSHE",
        model: "QA75Q60DARSHE",
        mrp: 340990,
        price: 283400,
        keywords: ["QLED", "75 inch"],
        category: "LEDTelevisions",
        image: "http://example.com/images/QA75Q60DARSHE.jpg",
        description: "75 inch QLED TV with Dynamic Crystal Color for brighter whites and deeper blacks, delivering cinematic quality in your living room.",
        brand: "Samsung",
        capacity: "75 inches"
    },
    {
        name: "RR20C20C2GS/IM",
        model: "RR20C20C2GS/IM",
        mrp: 33490,
        price: 28500,
        keywords: ["Single Door", "192 L"],
        category: "Refrigerators",
        image: "http://example.com/images/RR20C20C2GS/IM.jpg",
        description: "192 L Single Door Refrigerator with a sleek design and energy-efficient cooling system, perfect for smaller households.",
        brand: "Samsung",
        capacity: "192 L"
    },
    {
        name: "RR20C20C2RH/IM",
        model: "RR20C20C2RH/IM",
        mrp: 32990,
        price: 27500,
        keywords: ["Single Door", "192 L"],
        category: "Refrigerators",
        image: "http://example.com/images/RR20C20C2RH/IM.jpg",
        description: "192 L Single Door Refrigerator with a reliable cooling system, keeping your food fresh for longer in a compact form.",
        brand: "Samsung",
        capacity: "192 L"
    },
    {
        name: "RR20C241258/IM",
        model: "RR20C241258/IM",
        mrp: 36990,
        price: 31500,
        keywords: ["Single Door", "192 L"],
        category: "Refrigerators",
        image: "http://example.com/images/RR20C241258/IM.jpg",
        description: "192 L Single Door Refrigerator with an efficient compressor and spacious storage, ideal for a small family or single-user.",
        brand: "Samsung",
        capacity: "192 L"
    },
    {
        name: "RR20C2722CR/IM",
        model: "RR20C2722CR/IM",
        mrp: 37990,
        price: 32500,
        keywords: ["Single Door", "192 L"],
        category: "Refrigerators",
        image: "http://example.com/images/RR20C2722CR/IM.jpg",
        description: "192 L Single Door Refrigerator with a modern design and energy-saving features, perfect for modern homes.",
        brand: "Samsung",
        capacity: "192 L"
    },
    {
        name: "RR20C2722CU/IM",
        model: "RR20C2722CU/IM",
        mrp: 37990,
        price: 32500,
        keywords: ["Single Door", "192 L"],
        category: "Refrigerators",
        image: "http://example.com/images/RR20C2722CU/IM.jpg",
        description: "192 L Single Door Refrigerator with advanced cooling technology and minimalistic design for a better kitchen aesthetic.",
        brand: "Samsung",
        capacity: "192 L"
    },

];

module.exports = products;
