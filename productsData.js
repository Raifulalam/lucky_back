const mongoose = require('mongoose');
const products = [
    {
        name: "IMPC CLS 1S GREY-NEP",
        image: "image_url_here",
        category: "Refrigerators",
        price: 25710.90, // MRP - 10%
        mrp: 28691,
        brand: "Whirlpool",
        keywords: ["Single Door", "Grey", "IMPC", "1S", "Nep"],
        capacity: "200 L",
        description: "Stylish single door refrigerator in grey color with advanced cooling technology.",
        model: "73067"
    },
    {
        name: "GENIUS CLS PLUS 1S WINE/GREY-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 26526.60, // MRP - 10%
        mrp: 29474,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "Grey", "Genius", "1S"],
        capacity: "200 L",
        description: "Elegant single door fridge in wine and grey color with advanced features.",
        model: "72492/72860"
    },
    {
        name: "GENIUS CLS PLUS 1S WINE HARMONY-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 27495.90, // MRP - 10%
        mrp: 30551,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "Harmony", "Genius", "1S"],
        capacity: "200 L",
        description: "A premium single door refrigerator with a harmonious wine finish.",
        model: "73144"
    },
    {
        name: "GENIUS CLS 2S SAPPHIRE BLUE-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 27941.40, // MRP - 10%
        mrp: 31046,
        brand: "Whirlpool",
        keywords: ["Double Door", "Sapphire Blue", "Genius", "2S"],
        capacity: "200 L",
        description: "A two-door refrigerator with a stunning sapphire blue design.",
        model: "72491"
    },
    {
        name: "IMPC PRM 1S SAPPHIRE/WINE/PURPLE GLORIA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 28833.30, // MRP - 10%
        mrp: 32037,
        brand: "Whirlpool",
        keywords: ["Single Door", "Sapphire", "Wine", "Purple", "IMPC", "1S"],
        capacity: "200 L",
        description: "Premium single door fridge with a mix of sapphire, wine, and purple colors.",
        model: "72476/72477/72494"
    },
    {
        name: "IMPC ROY 1S SAPPHIRE/WINE GLORIA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 31092.30, // MRP - 10%
        mrp: 34547,
        brand: "Whirlpool",
        keywords: ["Single Door", "Sapphire", "Wine", "IMPC", "Roy", "1S"],
        capacity: "200 L",
        description: "A stylish single door fridge with a blend of sapphire and wine hues.",
        model: "73299/73300"
    },
    {
        name: "IMPC PRM 1S WINE/SAPPHIRE GLORIA/ROSELY-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 29973.30, // MRP - 10%
        mrp: 33193,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "Sapphire", "Gloria", "Rosely", "1S"],
        capacity: "205 L",
        description: "Premium fridge with a mix of wine and sapphire colors for a modern look.",
        model: "72864/73198/73199"
    },
    {
        name: "WDE CLS 2S SHERRY WINE/SAPPHIRE BLUE-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 30002.50, // MRP - 10%
        mrp: 33325,
        brand: "Whirlpool",
        keywords: ["Double Door", "Sherry Wine", "Sapphire Blue", "WDE", "CLS", "2S"],
        capacity: "205 L",
        description: "Two-door refrigerator with a blend of sherry wine and sapphire blue.",
        model: "72677/72679"
    },
    {
        name: "IMPC PRM 2S SAPPHIRE BELITA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 31509.00, // MRP - 10%
        mrp: 35010,
        brand: "Whirlpool",
        keywords: ["Double Door", "Sapphire", "IMPC", "2S", "Belita"],
        capacity: "205 L",
        description: "Premium two-door refrigerator with a sapphire finish and advanced features.",
        model: "73212"
    },
    {
        name: "IMPC PRM 2S ARCTIC/TITAN STEEL WINE LINNEA/BELITA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 32093.50, // MRP - 10%
        mrp: 35670,
        brand: "Whirlpool",
        keywords: ["Double Door", "Arctic", "Titan Steel", "Wine", "Linne", "Belita", "2S"],
        capacity: "205 L",
        description: "High-end two-door fridge with a choice of Arctic and Titan steel finishes.",
        model: "72500/72501/73191/73213"
    },
    {
        name: "IMPC ROY 2S ARCTIC/TITAN STEEL / WINE/SAPPHIRE/PURPLE LINNEA/BELITA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 33292.80, // MRP - 10%
        mrp: 36992,
        brand: "Whirlpool",
        keywords: ["Double Door", "Arctic", "Titan Steel", "Wine", "Sapphire", "Purple", "Linnea", "Belita", "2S"],
        capacity: "205 L",
        description: "A stylish two-door fridge with multiple color and finish options.",
        model: "72504/72505/72506/73192/73215"
    },
    {
        name: "IMPC ROY 2S SAPPHIRE BELITA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 33292.80, // MRP - 10%
        mrp: 36992,
        brand: "Whirlpool",
        keywords: ["Single Door", "Sapphire", "IMPC", "Roy", "2S", "Belita"],
        capacity: "205 L",
        description: "Stylish single door refrigerator with sapphire finish and advanced cooling technology.",
        model: "73214"
    },
    {
        name: "IMPC PRM 3S WINE SERENA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 33600.00, // MRP - 10%
        mrp: 37322,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "IMPC", "PRM", "3S", "Serena"],
        capacity: "205 L",
        description: "Premium single door fridge with a wine color finish and a serene feel.",
        model: "73216"
    },
    {
        name: "IMPC ROY 3S WINE BELITA/SERENA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 35819.10, // MRP - 10%
        mrp: 39799,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "IMPC", "Roy", "3S", "Belita", "Serena"],
        capacity: "205 L",
        description: "Premium single door fridge in wine color with a choice of Belita or Serena designs.",
        model: "72474/73252"
    },
    {
        name: "IMPC PRM 2S PURPLE/SAPPHIRE BLOOM-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 33600.00, // MRP - 10%
        mrp: 37322,
        brand: "Whirlpool",
        keywords: ["Single Door", "Purple", "Sapphire", "IMPC", "PRM", "2S"],
        capacity: "215 L",
        description: "Beautiful single door fridge with purple and sapphire bloom colors.",
        model: "72876/72529"
    },
    {
        name: "VMPRO PRM 3S INV/ WINE DAFNE-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 36413.10, // MRP - 10%
        mrp: 40459,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "VMPRO", "PRM", "3S", "Dafne"],
        capacity: "215 L",
        description: "High-end refrigerator with inverter technology and wine-colored finish.",
        model: "72600/73129"
    },
    {
        name: "VMPRO ROY 3S INV/ WINE DAFNE-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 38494.00, // MRP - 10%
        mrp: 42771,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "VMPRO", "ROY", "3S", "Dafne"],
        capacity: "215 L",
        description: "A premium inverter fridge with a wine finish and advanced features.",
        model: "72602/73130"
    },
    {
        name: "IMPRO PRM 5S SAPPHIRE ANTELIA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 43250.40, // MRP - 10%
        mrp: 48056,
        brand: "Whirlpool",
        keywords: ["Single Door", "Sapphire", "IMPRO", "PRM", "5S", "Antelia"],
        capacity: "230 L",
        description: "Premium 5-star fridge with a stunning sapphire finish and energy-efficient features.",
        model: "73335"
    },
    {
        name: "IMPRO ROY 5S SAPPHIRE ANTELIA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 44736.30, // MRP - 10%
        mrp: 49707,
        brand: "Whirlpool",
        keywords: ["Single Door", "Sapphire", "IMPRO", "ROY", "5S", "Antelia"],
        capacity: "230 L",
        description: "Energy-efficient 5-star refrigerator with sapphire finish and modern features.",
        model: "73339"
    },
    {
        name: "IMPRO PLUS PRM 4S WINE MULIA-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 46074.60, // MRP - 10%
        mrp: 51194,
        brand: "Whirlpool",
        keywords: ["Single Door", "Wine", "IMPRO PLUS", "PRM", "4S", "Mulia"],
        capacity: "260 L",
        description: "Premium fridge with wine finish and 4-star efficiency rating.",
        model: "73047"
    },
    {
        name: "IMPRO PLUS PRM 3S ALPHA STEEL-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 52167.60, // MRP - 10%
        mrp: 57964,
        brand: "Whirlpool",
        keywords: ["Single Door", "Alpha Steel", "IMPRO PLUS", "PRM", "3S"],
        capacity: "305 L",
        description: "Sleek single door fridge with advanced features and Alpha Steel finish.",
        model: "72670"
    },
    {
        name: "IMPRO PLUS PRM 3S BLUE PALM/SAPPHIRE FLUME-Z",
        image: "image_url_here",
        category: "Refrigerators",
        price: 52811.00, // MRP - 10%
        mrp: 58790,
        brand: "Whirlpool",
        keywords: ["Single Door", "Blue Palm", "Sapphire", "IMPRO PLUS", "PRM", "3S", "Flume"],
        capacity: "305 L",
        description: "Premium fridge with Blue Palm and Sapphire Flume color options.",
        model: "72845/72669"
    },
    {
        name: "NEO 258LH CLS PLS MIDNIGHT ATHENA/ATHENA STEEL (1S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 48059.10, // MRP - 10%
        mrp: 53399,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "258LH", "CLS", "Midnight Athena", "Athena Steel", "1S"],
        capacity: "258 L",
        description: "Neo double door refrigerator with Midnight Athena and Athena Steel finishes.",
        model: "21705/21662"
    },
    {
        name: "NEO 258LH CLS PLS WINE/SAPPHIRE/PURPLE VIOLA(1S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 50622.30, // MRP - 10%
        mrp: 56247,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "258LH", "CLS", "Wine", "Sapphire", "Purple", "Viola", "1S"],
        capacity: "258 L",
        description: "Elegant double door fridge in Wine, Sapphire, and Purple Viola colors.",
        model: "21663/21706/21707"
    },
    {
        name: "NEO 258LH CLS PLS SAPPHIRE VIOLA(2S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 51514.20, // MRP - 10%
        mrp: 57238,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "258LH", "CLS", "Sapphire", "Viola", "2S"],
        capacity: "258 L",
        description: "Sapphire Viola design with a spacious 2-door configuration for modern living.",
        model: "22075"
    },
    {
        name: "NEO 258LH CLS PLS SAPPHIRE MAGNOLIA(2S)T",
        image: "image_url_here",
        category: "Refrigerators",
        price: 51662.70, // MRP - 10%
        mrp: 57403,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "258LH", "CLS", "Sapphire", "Magnolia", "2S"],
        capacity: "258 L",
        description: "Spacious refrigerator in a beautiful Sapphire Magnolia finish.",
        model: "22085"
    },
    {
        name: "NEO SP278 PRM ATHENA STEEL(2S)",
        image: "image_url_here",
        category: "Refrigerators",
        price: 52406.10, // MRP - 10%
        mrp: 58229,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "SP278", "PRM", "Athena Steel", "2S"],
        capacity: "278 L",
        description: "Premium double door fridge with Athena Steel finish for modern kitchens.",
        model: "22149"
    },
    {
        name: "NEO 278LH PRM WINE ROSE(2S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 52851.60, // MRP - 10%
        mrp: 58724,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "278LH", "PRM", "Wine", "Rose", "2S"],
        capacity: "278 L",
        description: "Stylish double door fridge in Wine Rose with a premium finish.",
        model: "22070"
    },
    {
        name: "NEO 278LH PRM WINE/SAPPHIRE PEONY(2S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 53595.00, // MRP - 10%
        mrp: 59550,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "278LH", "PRM", "Wine", "Sapphire", "Peony", "2S"],
        capacity: "278 L",
        description: "Premium double door fridge with Wine and Sapphire Peony color options.",
        model: "22058/22047"
    },
    {
        name: "NEO DF278 PRM ARCTIC STEEL(1S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 54635.40, // MRP - 10%
        mrp: 60706,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "DF278", "PRM", "Arctic Steel", "1S"],
        capacity: "278 L",
        description: "Modern double door fridge in Arctic Steel with a premium design.",
        model: "21715"
    },
    {
        name: "NEO DF278 PRM ARCTIC/TITAN/RADIANT STEEL(2S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 56121.30, // MRP - 10%
        mrp: 62357,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "DF278", "PRM", "Arctic", "Titan", "Radiant Steel", "2S"],
        capacity: "278 L",
        description: "Advanced double door fridge with Arctic, Titan, and Radiant Steel finishes.",
        model: "22046/22099/22101"
    },
    {
        name: "NEO 278GD PRM CRYSTAL BLACK/SKYDIVE (2S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 63552.60, // MRP - 10%
        mrp: 70614,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "278GD", "PRM", "Crystal Black", "Skydive", "2S"],
        capacity: "278 L",
        description: "Premium double door fridge with Crystal Black and Skydive finishes.",
        model: "22052/22055"
    },
    {
        name: "NEO 278GD PRM CRYSTAL MIRROR(2S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 64741.50, // MRP - 10%
        mrp: 71935,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "278GD", "PRM", "Crystal Mirror", "2S"],
        capacity: "278 L",
        description: "Premium Crystal Mirror finish for a sleek and modern double door fridge.",
        model: "22053"
    },
    {
        name: "NEO 278LH CLS PLS MIDNIGHT ATHENA(1S)-TL",
        image: "image_url_here",
        category: "Refrigerators",
        price: 50949.30, // MRP - 10%
        mrp: 56577,
        brand: "Whirlpool",
        keywords: ["Double Door", "Neo", "278LH", "CLS", "Midnight Athena", "1S"],
        capacity: "278 L",
        description: "Elegant double door fridge with Midnight Athena color in a premium finish.",
        model: "21741"
    }
];



module.exports = products;
