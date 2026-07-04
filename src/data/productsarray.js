import React from 'react'

const products = [
    {
        id: 1,
        name: "Solomon Hair Sahara",
        type: "indian",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/4_63f9652a-b56e-4444-9360-fa038668ee6d.jpg?v=1766395433&width=600",
        price: "₹999.00",
        hairaccessories: true,
        gifting: true,
        pearl: true
    },

    {
        id: 2,
        name: "The Dark Reflection- Golden Layered Necklace With Anti-Tarnish Coating",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1103889-2-2.jpg",
        price: "₹1999.00",
        necklace: true,
        traditional: true,

    },

    {
        id: 3,
        name: " Don't Leaf Me - Golden Ear-Jackets",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1103210-m2.jpg",
        price: "₹899.00",
        earring: true,
        gifting: true,
    },
    {
        id: 4,
        name: "gallery Golden Heart Rhinestone Bracelet",
        type: "western",
        hoverimg: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108927-m2-2.jpg",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew97551062-1-1_1.jpg",
        price: "₹999.00",
        bestseller: true,
        handaccessories: true,
    },
    {
        id: 5,
        name: "The Snow Globe- Gold Pearl Bracelet",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1103680-mt.jpg",
        price: "₹959.00",
        bestseller: true,
        handaccessories: true,
        pearl: true
    },
    {
        id: 6,
        name: "Skip to the beginning of the images gallery MINT RIPPLE - TRENDY BRAIDLET WITH SOFT BLUE DROP CHARM",
        type: "western",
        latest: true,
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110676-m1.jpg",
        price: "₹989.00",
        gifting: true,
        hairaccessories: true
    },
    {
        id: 7,
        name: "WEAR ME KNOT! pearl and bow detailed necklace",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1103213-m2.jpg",
        price: "₹599.00",
        necklace: true,
        traditional: true,
        pearl: true
    }, {
        id: 8,
        name: "SCARLET CHARM - DAINTY HOOPS WITH A DEEP RED HEART",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108825-3-3.jpg",
        price: "₹499.00",
        festival: true,
        earring: true
    },
    {
        id: 9,
        name: "SUNSET TWIST - SPIRAL BRAIDLET WITH ORANGE ACCENT AND PEARL DROP",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110691-m1.jpg",
        price: "₹979.00",
        gifting: true,
        hairaccessories: true
    },
    {
        id: 10,
        name: "The Jungle King- Golden Layered Bracelet",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1103986-m2.jpg",
        price: "₹969.00",
        bestseller: true,
        handaccessories: true
    },
    {
        id: 11,
        name: "THE VANILLA SWIRL - DELICATE HANDMADE BRACELET",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1105319-m2-2.jpg",
        price: "₹1499.00",
        bestseller: true,
        latest: true,
        handaccessories: true
    },
    {
        id: 12,
        name: "The Dainty Links - Golden Casual Neckpiece",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1102772-m2.jpg",
        price: "₹799.00",
        traditional: true,
        necklace: true
    },
    {
        id: 13,
        name: "Spring fling - White floral studs",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107935_model_close_up.jpg",
        price: "₹699.00",
        festival: true,
        earring: true
    },
    {
        id: 14,
        name: "The Elegant Casual Heartbeat Bracelet- Golden",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew221237-m2-2.jpg",
        price: "₹899.00",
        handaccessories: true,
        bestseller: true,
    },
    {
        id: 15,
        name: "MINT RIPPLE - TRENDY BRAIDLET WITH SOFT BLUE DROP CHARM",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110676-m1.jpg",
        price: "₹1799.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 16,
        name: "PINEAPPLE POP - SPIRAL BRAIDLET WITH TROPICAL FRUIT CHARM",
        type: "western",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110685-m1.jpg",
        price: "₹4199.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 17,
        name: "KANCHANI - OXIDISED STATEMENT NECKLACE WITH COLOR STONES AND ORNATE DROP FRINGE vishal",
        type: "indian",
        img: " https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110377-m2.jpg",
        price: "₹7699.00",
        traditional: true,
        necklace: true,


    },
    {
        id: 18,
        name: "CHANDRA RAAG - OXIDISED DROP EARRINGS",
        type: "indian",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110619-m2.jpg",
        price: "₹3199.00",
        festival: true,
        earring: true,
        springsummer: true
    },
    {
        id: 19,
        name: "GULRATNA - JEWEL OF ROSES - HANDCRAFTED ROSE HAATHPHOOL WITH BEADED FRINGES, PEARLS AND GEM DETAILS",
        type: "indian",
        img: " https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108556-m2-2-2.jpg",
        price: "₹2199.00",
        handaccessories: true,
        springsummer: true

    },
    {
        id: "20",
        name: "KESHASHRINGA - PARANDI HAIR CREST - ORNAMENTAL HAIR ACCESSORY WITH CONNECTED MOTIFS AND DANGLING ACCENTS",
        type: "indian",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108927-m2-2.jpg",
        price: "₹4133.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true,

    },
    {
        id: 21,
        name: "Aarakta- The Pink Beauty- Pearls and Stones Embroidered Hair Clips",
        type: "indian",
        img: " https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1104702-m_1.jpg",
        price: "34989.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 22,
        name: "Grand Palais Princess Choker",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/manifest.ind_1766125845_3790849822031617786_62267106087.jpg?v=1766396782&width=600",
        price: "₹3699.00",
        traditional: true,
        necklace: true
    },
    {
        id: 23,
        name: "A CLASSY DAME - WHITE ENAMELLED GOLDEN STUDS",
        type: "indian",
        img: " https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105552-2-2.jpg",
        price: "₹3199.00",
        festival: true,
        earring: true
    },
    {
        id: 24,
        name: "GULRATNA - JEWEL OF ROSES - HANDCRAFTED KALEERAS WITH PURPLE PETALS, PEARLS AND BEADS",
        type: "indian",
        img: " https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1108560-m1-1.jpg",
        price: "₹799.00",
        bestseller: true,
        handaccessories: true
    },
    {
        id: 25,
        name: "Maayin - The Magical Inflorescence - Shells, Mirrors And Beads Hand Embroidered Hair Accessory",
        type: "indian",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107366-m2-2-2.jpg",
        price: "₹499.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 26,
        name: "MADHUVRATA - SPRING BLOOM - DELICATE EMBROIDERED HAIR ACCESSORY WITH FLORAL MOTIFS AND BEADS",
        type: "indian",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1108574-m1-1.jpg",
        price: "₹499.00",
        latest: true,
        gifting: true,
        hairaccessories: true,

    },
    {
        id: 27,
        name: "Vakratund Pendant",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/IMG_7542_JPG_jpg.jpg?v=1774341389&width=600",
        price: "₹419.00",
        traditional: true,
        necklace: true
    },
    {
        id: 28,
        name: "GUL TARIKA - LONG DANGLE EARRINGS",
        type: "indian",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110666-3-3.jpg",
        price: "₹719.00",
        festival: true,
        earring: true,

    },
    {
        id: 29,
        name: "THE VANILLA SWIRL - DELICATE HANDMADE BRACELET",
        type: "maryada",
        hoverimg: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1105319-m2-2.jpg",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110621-m2.jpg",
        price: "₹1719.00",
        bestseller: true,
        handaccessories: true
    },
    {
        id: 30,
        name: "Ucchvasit - The Cowrie Bloom - Mirrors, Shells And Beads Hand Embroidered Hair Accessory",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105319-m2-2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true,
        pearl: true
    },

    {
        id: 31,
        name: "Grathan - The Delicate Intricacy - Mirrors, Shells, Beads And Pearls Hand Embroidered Hair Accessory",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107358-m2_1.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },

    {
        id: 32,
        name: "DIVYANJANI - DIVINE OFFERING- KUNDAN, PEARLS, AND RED STONES HANDMADE NECKLACE",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1108632.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },

    {
        id: 33,
        name: "MAYUKHIKA - RAYS OF LIGHT - ORNATE EARRINGS WITH STRUCTURED DESIGN AND MULTI-DROP DETAILS",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110625-2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 34,
        name: "TARANGINI MAHARAANI - THE ROYAL CASCADE - TRIPLE-LAYERED KUNDAN BEADED HAIR ACCESSORY WITH PEARLS AND BEADS",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1109133-m1.jpg",
        price: "₹1719.00",
        gifting: true,
        hairaccessories: true
    },
    {
        id: 35,
        name: "RANGVATI - FULL OF COLORS - EMBROIDERED MIRROR WORK HAIR ACCESSORY WITH MULTI-COLORED BEADS AND GOLDEN CHAINS",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108541-m2-2-2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 36,
        name: "THE VANILLA SWIRL - DELICATE HANDMADE BRACELET",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105319-m2-2.jpg",
        price: "₹1719.00",
        latest: true,
        handaccessories: true
    },
    {
        id: 37,
        name: "THE BUTTERFLY BALLERINA - BEADED OXIDISED ENAMELLED NECKLACE",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1106009-mzoom_2.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },

    {
        id: 38,
        name: "TWIRL TOKENS - PLAYFUL GOLDEN MINI HOOPS",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109544-2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },

    {
        id: 39,
        name: "ROSE LINE - MINIMAL GOLDEN HAND CUFF",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109738-m2.jpg",
        price: "₹1719.00",
        bestseller: true,
        handaccessories: true
    },

    {
        id: 40,
        name: "ANURAAGINI - CRIMSON CHARM - HANDCRAFTED HAIR BUN ACCESSORY WITH PINK EMBROIDERED PETALS AND PEARL ACCENTS",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110153-m1.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },

    {
        id: 41,
        name: "Prabhanjanam - The Stormy Reflectors - Shell, Mirrors And Glass Drops Hand Embroidered Hair Accessory",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107356-m1-1.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 42,
        name: "MEHFIL VANMALA - BOHO STATEMENT NECKLACE",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110644_m2-2.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 43,
        name: "ROSELLA PEARL - PEARL HEART HOOP EARRINGS",
        type: "shringaar",
        img: " https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109703-2_1.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 44,
        name: "Sudarpana - Colorful Reflection - Resham, Shells And Beads Hand Embroidered Haathphool",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105876-m1-1_1.jpg",
        price: "₹1719.00",
        bestseller: true,
        handaccessories: true
    },
    {
        id: 45,
        name: "The Merry Chimes - Oxidised Hair Accessory",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107544-m2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 46,
        name: "HIRAK - THE RADIANT SPLENDOR -CRYSTAL STONES, SEQUINS AND PEARLS MULTICOLOR EMBROIDERED HAIRBAND",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1105490-m1.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 47,
        name: "EARTH TRAIL - LONG STONE NECKLACE",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110344-m2.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 48,
        name: "The Cute Little Dome Jhumkis- Tiny Trinket Earrings",
        type: "maryada",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew701131-1-1.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 49,
        name: "Sakosa - Ivory Coast -Beads And Shells Hand Embroidered Haathphool",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107077-m2_1.jpg",
        price: "₹1719.00",
        handaccessories: true
    },
    {
        id: 50,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "shringaar",
        img: " https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110234-m2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 51,
        name: "IPSIT - ONE'S DESIRE - PEARL AND FABRIC EMBROIDERED HAIRBAND",
        type: "shringaar",
        img: " https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1105674-m.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 52,
        name: "CHANDRANG LEHAR - MULTI LAYER STATEMENT NECKLACE",
        type: "shringaar",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110643-m2.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 53,
        name: "The modern girl's intriguing artistic ear-jackets",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew221129-m2-2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 54,
        name: "VASUKUSUMA - TREASURED BLOOM - BRIDAL HAND HARNESS WITH ORNAMENTAL FLOWER PANELS",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1108844-m2-2-2.jpg",
        price: "₹1719.00",
        handaccessories: true
    },
    {
        id: 55,
        name: "Vivikta - The Refined Splendor - Beaded Hand Embroidered Hairband",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105491-m1-1.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 56,
        name: "Kanichi - A Floral Blossom - Pearl Drops, Beads And Stone Hand Embroidered Maathapatti",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105867-m_2.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 57,
        name: "NOMAD SPIRIT - COLORFUL TRIBAL STATEMENT NECKLACE",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1108049-t.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 58,
        name: "SHIMRA BAND - FACETED HOOP EARRINGS",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110284-2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 59,
        name: "Abhyupayan - Gift From The Heavens - Beads, Pearls Glass Drops Hand Embroidered Haathphool",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107365-m2-2-2.jpg",
        price: "₹1719.00",
        handaccessories: true

    },
    {
        id: 60,
        name: "Alamkaarya - To Be Adorned - Pearls, Cutdana And Sequins Hand Embroidered Maangtika",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105802-m_3.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 61,
        name: "JWLALA - FLAME-LIKE BEAUTY - MAJESTIC HANDCRAFTED KUNDAN MAANGTIKA WITH ORNATE RED AND GOLDEN DETAILS",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108755-3-3_1.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 62,
        name: "HARITIKA - GRACE OF GREEN - KUNDAN MAANGTIKA WITH GREEN STONE ACCENTS AND PEARL DROPS",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1106891-m4.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 63,
        name: "Abhram - The Shimmering Sky - Statement Golden Embellished Crystal Chandelier Earrings",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105456-m2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 64,
        name: "The String of Luck- Golden Pearl Hand Harness Bracele",
        type: "apsara",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1103990-m1-1.jpg",
        price: "₹1719.00",
        handaccessories: true
    },
    {
        id: 65,
        name: "HARITIKA - GRACE OF GREEN - KUNDAN MAANGTIKA WITH GREEN STONE ACCENTS AND PEARL DROPS",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109647-m2-2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 66,
        name: "SHRAVIKA - GRACEFUL HEARING - DECORATIVE MAANGTIKA WITH GEMMED MOTIF AND DROP DETAILS",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107781-m2-2.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 67,
        name: "VARNA UTSAV - MULTI COLOR STATEMENT NECKLACE",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110642-m2.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 68,
        name: "The Drizzly Loops- Golden Pearl Earrings",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1103903-2-2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 69,
        name: "RANGOLIKA - A CANVAS OF COLORS - PEARLS, COLORFUL BEADS AND GOLDEN HAND EMBROIDERD HATHPHOOL",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1108386-m1-1-1.jpg",
        price: "₹1719.00",
        handaccessories: true
    },
    {
        id: 70,
        name: "SAIKAVALI - DECORATED WITH PEARLS - STONE, BEADS AND PEARLS EMBROIDERED MAANGTIKA",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108843-m2-2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 71,
        name: "suandruya",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1108843-m2-2.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 72,
        name: "NAZAAKAT - DETAILED BEADED OXIDISED NECKLACE",
        type: "rangoli",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109168-m1.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 73,
        name: "MRIDULJHARI - GENTLE CASCADE - STATEMENT EARRINGS WITH PEARL CLUSTERS AND FLOWING CHAIN DROPS",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110593-m2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 74,
        name: "Satapattri - The Rosy Ferns - Stone Hand Embroidered Cuff Bracelet",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107058-m1-1-1.jpg",
        price: "₹1719.00",
        traditional: true,
        handaccessories: true
    },
    {
        id: 75,
        name: "Asyama - The Violet Veil - Beads, Pearl And Stone Hand Embroidered Maangtika",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107052-m2_1.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true,
        earring: true,
    },
    {
        id: 76,
        name: "NARTAKILATA-DANCER'S VINE- MAANGTIKA WITH STONES, PEARLS, BEADS AND THREADWORK",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107788-m2.jpg",
        price: "₹1719.00",
        latest: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 77,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1106860-t.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 78,
        name: "Sukshmaman - The Pure Precision - Shells, Beads And Glass Drops Hand Embroidered Haathphool",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107357-m4.jpg",
        price: "₹1719.00",
        handaccessories: true,
        traditional: true,
    },
    {
        id: 79,
        name: "THE PERFECT TRIO - TWO EARCUFF & ONE STUD (ONE EAR) (GOLD)",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1105533-m1.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true,
        traditional: true,
    },
    {
        id: 80,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1106860-t.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 81,
        name: "Vidhatrayus - The Sunflower Meadows - Beaded Hand Embroidered Oxidised Cuff Bracelet",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107606-t.jpg",
        price: "₹1719.00",
        latest: true,
        handaccessories: true,
        traditional: true,
    },
    {
        id: 82,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "saumya",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1106860-t.jpg",
        price: "₹1719.00",
        necklace: true,
        traditional: true,
    },
    {
        id: 83,
        name: "PEARL MOSAIC - STRUCTURED BEADED SQUARE EARRINGS",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109520-2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 84,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110434-1.jpg",
        price: "₹1719.00",
        gifting: true,
        hairaccessories: true
    },
    {
        id: 85,
        name: "CRYSTAL BYTE - LILAC SHINE STUDS WITH CRYSTAL-CANDY STONES",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1109470-2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true,
        earring: true,

    },
    {
        id: 86,
        name: "Savitra - The Spring Flowers - Stones And Beads Hand Embroidered Bangle",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107043-m1.jpg",
        price: "₹1719.00",
        latest: true,
        handaccessories: true
    },
    {
        id: 87,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110434-1.jpg",
        price: "₹1719.00",
        necklace: true,
        traditional: true,
    },
    {
        id: 88,
        name: "VAIBHAVI - REGAL SPLENDOUR - STATEMENT KUNDAN CHAIN EARRINGS WITH PINK ACCENTS AND PEARL DROP CHAINS",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110151-m2.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 89,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "rangrez",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110434-1.jpg",
        price: "₹1719.00",
        gifting: true,
        hairaccessories: true
    },
    {
        id: 90,
        name: "PACHHI TARANG - BOHO DANGLE EARRINGS",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110669-m2.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        earring: true,
        hairaccessories: true
    },
    {
        id: 91,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107911-m4.jpg",
        price: "₹1719.00",
        latest: true,
    },
    {
        id: 92,
        name: "Tejovat - Glimmering White Brilliance - Stone, Beads And Glass Drops Hand Embroidered Ring (Adjustable)",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1106076-m_1.jpg",
        price: "₹1719.00",
        necklace: true,
        traditional: true,
    },
    {
        id: 93,
        name: "LOTUS CASCADE - OXIDISED BEADED STATEMENT JODHPURI JHUMKAS",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110352-1.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 94,
        name: "Madhya - In Between Night - Beads And Resham Hand Embroidered Bangle",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107064-m1_1.jpg",
        price: "₹1719.00",
        handaccessories: true
    },
    {
        id: 95,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107911-m4.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        hairaccessories: true
    },
    {
        id: 96,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107911-m4.jpg",
        price: "₹1719.00",
        latest: true,
    },
    {
        id: 97,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "swatantra",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1107911-m4.jpg",
        price: "₹1719.00",
        traditional: true,
        necklace: true
    },
    {
        id: 98,
        name: "The Motif Circles - The Oxidised Dangler Collection",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew701079-m.jpg",
        price: "₹1719.00",
        festival: true,
        earring: true
    },
    {
        id: 99,
        name: "The Bewitching Butterflies - Statement Enamelled Studs",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1102979-5.jpg",
        price: "₹1719.00",
        handaccessories: true
    },
    {
        id: 100,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110628-1.jpg",
        price: "₹1719.00",
        bestseller: true,
        gifting: true,
        earring: true,
        hairaccessories: true
    },
    {
        id: 101,
        name: "The Dainty Dazzle- Enamelled Oxidised Anklets (Set of 2)",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107308-m1_1.jpg",
        price: "₹1719.00",
        latest: true,
        anklets: true

    },
    {
        id: 102,
        name: "JHANAKRITI – RHYTHMIC CREATION – DELICATE PAIR OF ANKLETS WITH ENAMELLED MOTIFS AND DANGLING BEAD ACCENTS",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110776-m1.jpg",
        price: "₹1719.00",
        anklets: true

    },
    {
        id: 103,
        name: "Kadkani - The Pastel Bells - Enamelled Oxidised Anklets (Set Of 2)",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1107377-m5_2_1.jpg",
        price: "₹1719.00",
        anklets: true
    },
    {
        id: 104,
        name: "The Royal Parade- Golden Anklet",
        type: "collectibles",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1103769-5.jpg",
        price: "₹1719.00",
        anklets: true,
        latest: true
    },
    {
        id: 105,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110619-m2.jpg",
        price: "₹1719.00",
        bestseller: true,
        earring: true,
    },
    {
        id: 106,
        name: "DHRUVISHA – CONSTANT GRACE – STATEMENT ANKLET WITH STRUCTURED DESIGN A",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110718-m2.jpg",
        price: "₹1719.00",
        latest: true,
        anklets: true

    },
    {
        id: 107,
        name: "PEET GHUNGROO - OXIDISED ANKLET WITH YELLOW ENAMEL LINKS AND BELL CHARMS",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110722-m2.jpg",
        price: "₹1719.00",
        anklets: true,
        latest: true
    },
    {
        id: 108,
        name: "CHANDRAVEE – MOON GRACE – FESTIVE ANKLET WITH CRESCENT MOTIFS AND DANGLING ACCENTS",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110721-m2.jpg",
        price: "₹1719.00",
        anklets: true,
        bestseller: true
    },
    {
        id: 109,
        name: "KANAK NUPUR - OXIDISED ANKLET WITH ENAMEL TRIANGLE MOTIFS AND BELL DROPS",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/j/e/jew1110397-m2.jpg",
        price: "₹1719.00",
        anklets: true,
        bestseller: true
    },
    {
        id: 110,
        name: "RATRIRATNA – ALIA BHATT INSPIRED NECKPIECE WITH  PEARLS, SYMBOLIZING PURITY AND ELEGANCE",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/df4d0e7d22d458d838fcbe84d5b1f267/s/a/sanb1100008-m1.jpg",
        price: "₹1719.00",
        bestseller: true,
        necklace: true
    },
    {
        id: 111,
        name: "VRINLEENA – SACRED FLOW – DECORATIVE ANKLET WITH CURVED MOTIFS AND MULTI-COLOUR ACCENTS",
        type: "handclutches",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1104424-z.jpg",
        price: "₹1719.00",
        latest: true,
        anklets: true

    },
    {
        id: 112,
        name: "Heeraman Chandbali",
        type: "BASRAA WEDDING",
        img: "https://everstylish.com/media/catalog/product/cache/df4d0e7d22d458d838fcbe84d5b1f267/s/a/sanb1100008-m1.jpg",
        hoverimg: "image8.jpg",
        price: "₹4719.00",
    },
    {
        id: 113,
        type: "BASRAA WEDDING",
        name: "Chand Saaj Ear Crawler (Set of 2)",
        img: "image9.jpg",
        hoverimg: "image19.jpg",
        price: "₹5179.00",

    },
    {
        id: 114,
        name: "Pyaar Beshumar Pendant)",
        type: "SPRING SUMMER",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1106891-m4.jpg",
        hoverimg: "image7.jpg",
        price: "₹5219.00",
        bestseller: true,
        necklace: true
    },
    {
        id: 115,
        name: "Machli Fall Choker",
        type: "BASRAA WEDDING",
        img: "https://www.amama.in/cdn/shop/files/BadhaiHo1.jpg?v=1772449088&width=600",
        hoverimg: "image12.jpg",
        price: "₹3719.00",
        necklace: true

    },
    {
        id: 116,
        img: "https://www.amama.in/cdn/shop/files/preview_images/1858a10982fe48ffb7f6b3d6c330b5d7.thumbnail.0000000000.jpg?v=1777439608&width=600",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        latest: true,
        bags: true
    },
    {
        id: 117,
        name: "Heeraman Chandbali",
        img: "https://www.amama.in/cdn/shop/files/Rakul_preet-1.jpg?v=1776766963&width=1200",
        hoverimg: "image12.jpg",
        price: "₹4019.00",
        type: "SPRING SUMMER",
        latestCategory: "summer",
    },
    {
        id: 118,
        img: "/image9.jpg",
        hoverimg: "image12.jpg",
        name: "Not Your Rose Earcrawler",
        price: "₹ 2850",
        latestCategory: "summer",
        type: "SPRING SUMMER"
    },
    {
        id: 119,
        img: "/image14.jpg",
        hoverimg: "image9.jpg",
        name: "Colosseum Earstack",
        price: "₹ 3,500",
        latestCategory: "summer",
        type: "SPRING SUMMER"
    },
    {
        id: 120,
        img: "/image16.webp",
        hoverimg: "image15.webp",
        name: "Colosseum Rings (Set of 2)",
        price: "₹ 2,000",
        latestCategory: "shaadi",
        type: "SPRING SUMMER",
        bestseller: true,
        necklace: true
    },

    {
        id: 121,
        img: "/image31.webp",
        hoverimg: "image17.jpg",
        name: "The Holiday Infinity Nano Bag",
        price: "₹12,500",
        latestCategory: "summerbags",

    },
    {
        id: 122,
        img: "/image32.webp",
        hoverimg: "image18.jpg",
        name: "The Holiday Cowrie Bag",
        price: "₹ 10,500",
        latestCategory: "summerbags",

    },
    {
        id: 123,
        img: "/image33.webp",
        hoverimg: "image19.jpg",
        name: "Not Your Rose Nano Bag",
        price: "₹ 9,500",
        latestCategory: "summerbags",
        // type: "SPRING SUMMER"
    },
    {
        id: 124,
        img: "/image34.webp",
        hoverimg: "image20.jpg",
        name: "Twiddle Charms Nano Bag",
        price: "₹ 8,500",
        latestCategory: "summerbags",
        // type: "SPRING SUMMER"
    },
    {
        id: 125,
        img: "/image38.webp",
        hoverimg: "image22.jpg",
        name: "Darpan Bindi (set of 5)",
        price: "₹ 1,100",
        latestCategory: "shaadi",
        type: "SHADI EDIT",
        bestseller: true,
        necklace: true
    },
    {
        id: 126,
        img: "/image39.webp",
        hoverimg: "image21.jpg",
        name: "Darpan Bindi (set of 5)",
        price: "₹ 1,200",
        latestCategory: "shaadi",
        type: "SHADI EDIT",
        bestseller: true,
        necklace: true
    },
    {
        id: 127,
        img: "/image36.webp",
        hoverimg: "image23.jpg",
        name: "Darpan Meen Earstack (set of 4)",
        price: "₹ 3,000",
        latestCategory: "shaadi",
        type: "SHADI EDIT"
    },
    {
        id: 128,
        img: "/image38.webp",
        hoverimg: "image24.jpg",
        name: "Darpan Meen Maangtika",
        price: "₹ 2,250",
        latestCategory: "shaadi",
        type: "SHADI EDIT"
    },
    {
        id: 129,
        img: "/image39.webp",
        hoverimg: "image25.jpg",
        name: "Maharaja Of Patiala Choker",
        price: "₹ 6,000",
        latestCategory: "badhai",
        type: "BADHAI HO!"
    },
    {
        id: 130,
        img: "/image40.webp",
        hoverimg: "image26.jpg",
        name: "Grand Palais Earcrawler",
        price: "₹ 4,250",
        latestCategory: "badhai",
        type: "BADHAI HO!",
        bestseller: true,
        necklace: true
    },
    {
        id: 131,
        img: "/image41.webp",
        hoverimg: "image27.jpg",
        name: "Solomon Mismatched Earrings",
        price: "₹ 3,550",
        latestCategory: "badhai",
        type: "BADHAI HO!",
        festival: true,
    },
    {
        id: 132,
        img: "/image42.webp",
        hoverimg: "image28.jpg",
        name: "Solomon Akshar Clutch",
        price: "₹ 13,250",
        latestCategory: "badhai",
        type: "BADHAI HO!"
    },
    {
        id: 133,
        img: "/image35.webp",
        hoverimg: "image21.jpg",
        name: "Darpan Bindi (set of 5)",
        price: "₹ 5,000",
        latestCategory: "darpana",
        type: "DARPANA"
    },
    {
        id: 134,
        img: "/image45.webp",
        hoverimg: "image5.jpg",
        name: "Sheeshmahal Choker",
        price: "₹ 4,250",
        latestCategory: "darpana",
        type: "DARPANA"
    },
    {
        id: 135,
        img: "/image44.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 2,050",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        festival: true,
        necklace: true
    },
    {
        id: 136,
        img: "/image37.webp",
        hoverimg: "image21.jpg",
        name: "Darpan Bindi (set of 5)",
        price: "₹ 1,400",
        latestCategory: "shaadi",
        type: "SHADI EDIT",
        bestseller: true,
        necklace: true
    },
    {
        id: 137,
        img: "/image59.webp",
        smallimg: "image60.webp",
        hoverimg: "image63.webp",
        type: "BADHAI HO !",
        price: "₹ 6780",
        latestCategory: "darpana",
        shopLook: true,
        name: "Grand Palais Fountain Choker",
        latest: true
    },
    {
        id: 138,
        img: "/image61.webp",
        smallimg: "/image71.webp",
        hoverimg: "image72.webp",
        type: "Darpana",
        price: "₹ 5,250",
        latestCategory: "darpana",
        shopLook: true,
        name: "Modern festive wear",

    },
    {
        id: 139,
        img: "/image64.webp",
        smallimg: "/image5.jpg",
        hoverimg: "image67.webp",
        name: "Darpan Meen Handstack",
        price: "₹ 5,250",
        latestCategory: "darpana",
        shopLook: true,
        type: "DARPANA"
    },
    {
        id: 140,
        img: "/image68.webp",
        smallimg: "/image70.jpg",
        hoverimg: "image69.webp",
        name: "Darpan Meen Handstack",
        price: "₹ 5,250",
        latestCategory: "darpana",
        shopLook: true,
        type: "DARPANA"
    },
    {
        id: 141,
        img: "/image66.webp",
        smallimg: "/image8.jpg",
        hoverimg: "image67.webp",
        type: "Darpana",
        price: "₹ 5,250",
        latestCategory: "darpana",
        name: "Modern festive wear",
        shopLook: true,
        latest: true
    },

    {
        id: 142,
        name: "Mini Eleanor Studs In Rainbow",
        type: "western",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/332555693_504904185153777_2080447132029753374_n.jpg?v=1756988366&width=600",
        price: "₹999.00",
        party: true,
    },
    {
        id: 143,
        name: "Solstice Shoulder Dusters In Gold",
        type: "western",

        img: "https://www.amama.in/cdn/shop/files/AMA-ELY3-020.jpg?v=1756987709&width=1200",
        price: "₹999.00",
        party: true,
    },
    {
        id: 144,
        name: "Vine Crest Shoulder Grazers In Silver",
        type: "indian",
        silver: true,
        img: "https://www.amama.in/cdn/shop/files/DSC03473-Edit.jpg?v=1765189240&width=800",
        price: "₹999.00",
        party: true,
    },
    {
        id: 145,
        name: "Nova Studs In Silver",
        type: "indian",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/AMA-ELY3-004.jpg?v=1756887440&width=1200",
        price: "₹999.00",
        party: true,
    },
    {
        id: 146,
        name: "Nano Kaju Earrings In Rose Pink",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/AMA-ELY3-041.jpg?v=1756887428&width=1200",
        price: "₹1999.00",
        party: true,
        lastchance: true
    },
    {
        id: 147,
        name: "Auryn Handheld In Gold Finish",
        type: "indian",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/DSC04272_7e750b01-2468-4fe0-918c-7902be3ff89b.jpg?v=1756987608&width=700",
        price: "₹999.00",
        party: true,
    },
    {
        id: 148,
        name: "Maxima Huggies",
        type: "indian",

        img: "https://www.amama.in/cdn/shop/files/GOLD9612copy.jpg?v=1756887540&width=1200",
        price: "₹999.00",
        party: true,
    },
    {
        id: 149,
        name: "Infinity Fall Danglers In Champagne Ombre",
        type: "western",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/UntitledCapture5183.jpg?v=1756988353&width=700",
        price: "₹999.00",
        party: true,
    },
    {
        id: 150,
        name: "Eleanor Danglers In Champagne Gold",
        type: "indian",

        img: "https://www.amama.in/cdn/shop/files/Eleanor-Danglers-In-Champagne-Gold-Amama-1735_bc0dc096-0293-4695-aa38-242526c1a30e.jpg?v=1756988422&width=700",
        price: "₹999.00",
        party: true,
    },
    {
        id: 151,
        name: "Nova Earcrawlers (Set Of 2)",
        type: "western",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/5_00f3ec86-faa3-4113-9d2e-9cb7efe4c347.jpg?v=1756987703&width=1200",
        price: "₹569.00",
        party: true,
        lastchance: true

    },
    {
        id: 152,
        name: "Mini Maxima Studs",
        type: "western",
        img: "https://www.amama.in/cdn/shop/files/421793541_18408150967024459_6920263485312122690_n.jpg?v=1756987974&width=700",
        price: "₹999.00",
        party: true,
        lastchance: true

    },
    {
        id: 153,
        name: "Maxima Handheld In Medallion Gold",
        type: "indian",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/fdc9eb86-ae33-4d70-a2a9-ed6ea032ab7c.jpg?v=1756987893&width=800",
        price: "₹999.00",
        party: true,
    },
    {
        id: 154,
        name: "Vine Crest Earclimbers",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/KKamra.jpg?v=1776678819&width=1200",
        price: "₹999.00",
        party: true,
        lastchance: true

    },
    {
        id: 155,
        name: "Mini Pretzel Studs",
        type: "indian",
        latest: true,
        img: "https://www.amama.in/cdn/shop/files/413907544_904264447917946_383896198509935182_n_80d1eb03-5da9-492c-ac97-100770a6a253.jpg?v=1756987856&width=800",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 156,
        name: "SubRosa Ear-crawler (Single Piece)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/430423444_794001262580248_215930731946830124_n.jpg?v=1756987857&width=800",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 157,
        name: "Nova Earcrawlers (Set Of 2)",
        img: "https://www.amama.in/cdn/shop/files/NovaEarcrawlers_SetOf2.webp?v=1762422525&width=600",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 158,
        name: "Pome Necklace",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/FOODSERIESSHOOT0357_646487f7-1dc7-4831-942f-dc400f5a6d1b.jpg?v=1756987847&width=800",
        price: "₹599.00",
        vacation: true,
        lastchance: true

    },
    {
        id: 159,
        name: "Vine Crest Choker",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/AMA-ELY3-058.jpg?v=1756987659&width=1200",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 160,
        name: "Vine Crest Earclimbers",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/KKamra.jpg?v=1776678819&width=1200",
        price: "₹499.00",
        vacation: true,
        lastchance: true

    },
    {
        id: 161,
        name: "Nova Shell Studs in Gold",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/20-04-24_Amama_.21090.jpg?v=1765191810&width=1200",
        price: "₹999.00",
        vacation: true,
        lastchance: true

    }, {
        id: 162,
        name: "Charmfeast Necklace",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/421760402_18305725969127892_8972864044033222829_n.jpg?v=1756987842&width=600",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 163,
        name: "Nova Studs In Silver",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/AMA-ELY3-004.jpg?v=1756887440&width=1200",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 164,
        name: "Auryn Sling Bag In Light Chrome",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/AurynSlingBagInLightChrome_1.jpg?v=1756987788&width=1200",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 165,
        name: "TAYANI NECKLACE",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC09895copy.jpg?v=1756987253&width=1200",
        price: "₹1999.00",
        vacation: true,
    },
    {
        id: 166,
        name: "Rita Necklace",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/1_c0a2090d-84c5-45ea-9e8b-c9114d031c8f.jpg?v=1756723365&width=1200",
        price: "₹899.00",
        vacation: true,
    },
    {
        id: 167,
        name: "Rina Necklace in Silver",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/3_7bcbc644-b2d6-4270-920b-896585fe2349.jpg?v=1756723344&width=1200",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 168,
        name: "Auryn Earrings In Gold",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/GOLD7271copy_51837752-ce51-4977-b1ce-f56eb94a2b44.jpg?v=1756887553&width=1200",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 169,
        name: "Stellar Ear Stack (Set Of 6)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/AMA-ELY3-048.jpg?v=1756987672&width=1200",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 170,
        name: "Nova Shell Studs in Gold",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/422319359_18305842486127892_1743592156902171657_n.jpg?v=1756987847&width=600",
        price: "₹999.00",
        vacation: true,
    },
    {
        id: 171,
        name: "Udatee Chidiya Sui Dhaga Earrings",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/UdateeChidiyaSuiDhagaEarrings_1.jpg?v=1756285927&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 172,
        name: "Udhtee Chidiyaa Cuff Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/UdhteeChidiyaaCuffBreacelet.jpg?v=1756285871&width=1200",
        price: "₹799.00",
        luxe: true,
    },
    {
        id: 173,
        name: "Yaadon Ka Bageecha Stackable Rings",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/2_6a133b71-b015-4836-9153-e0620d56d4f6.jpg?v=1756285868&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 174,
        name: "Udatee Chidiya Hathphool",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/UdateeChidiyaHathphool_1.jpg?v=1756285907&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 175,
        name: "Pearl Droplets Nath",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/PearlDropletsNath.jpg?v=1756285929&width=12000",
        price: "₹479.00",
        luxe: true,
    },
    {
        id: 176,
        name: "Floral Hathphool",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/BPHP001-1_2e0374d2-3483-46d0-93da-e3bcfc3440c5.jpg?v=1756288003&width=700",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 177,
        name: "Yaadon Ka Bageecha Hasli",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/YaadonKaBageechaHasli.jpg?v=1756285894&width=1200",
        price: "₹999.00",
        luxe: true,
    }, {
        id: 178,
        name: "Bangeecha Kanauti Earrings",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC00235_copy.jpg?v=1756285887&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 179,
        name: "Bageecha Mangtikka",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC00233_copy.jpg?v=1756285884&width=1200",
        price: "₹999.00",
        luxe: true,
    },

    {
        id: 180,
        name: "Yaadon Ka Bageecha Charm Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/Untitleddesign_22_68fa306b-75a1-4d54-9903-6cf6aafe71f1.jpg?v=1756285895&width=1200",
        price: "₹999.00",
        luxe: true,
    }, {
        id: 181,
        name: "Panchee Pearl Taseel Neckalace",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/PancheePearlTaseelNeckalce.jpg?v=1756285896&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 182,
        name: "Panchee Hoops",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/PancheeHoops.jpg?v=1756285916&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 183,
        name: "Flower Drop Necklace",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/BPN002-1_0f5f4c68-deef-4de9-8d85-5543df8c249d.jpg?v=1756288007&width=700",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 184,
        name: "Son Chiraiya Kaleere",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/SonChiraiyaKaleere_1.jpg?v=1756285867&width=1200",
        price: "₹999.00",
        luxe: true,
    },
    {
        id: 185,
        name: "Yaadon Ka Bageecha Drop Down Neckalce",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/YaadonKaBageechaDropDownNeckalce.jpg?v=1756285924&width=1200",
        price: "₹999.00",
        luxe: true,
    },

    {
        id: 186,
        name: "Darpan Bindi (set of 5)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/8_69d659bc-0da3-4bdf-b04a-2bd1efb755eb.jpg?v=1756988160&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 187,
        name: "Pyaara Lumba Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/11_2238f8eb-24db-4c40-8592-e32123a8ba0f.jpg?v=1760686336&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 188,
        name: "Surya Darpan Hand Harness (set of 2)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/51_6d34c392-6cc3-47a0-9913-8984ce390b18.jpg?v=1756987128&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 189,
        name: "Soul Sister Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/4copy.jpg?v=1760686333&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 190,
        name: "Modern Lumba Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/7_aca16792-f1bb-4413-8b51-d4a4c7fea8e9.jpg?v=1760686334&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 191,
        name: "Basra Venu",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC0984copy_45c3277d-906e-4ab5-b381-12bae0c052b2.jpg?v=1756987490&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 192,
        name: "Pashmina Hathphool (Single Piece)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/PashminaHathphool_SinglePiece_1.jpg?v=1756987446&width=800",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 193,
        name: "Basra Lumba Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/Basraa_Lumba.jpg?v=1765610776&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 194,
        name: "Shikara Nail Crowns (Set of 5)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC1350.jpg?v=1756987504&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 195,
        name: "Basra Sahara In Pearls And Gold Earcuff (Set of 2)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/Basraa_1_-Edit.jpg?v=1766986174&width=800",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 196,
        name: "Basra Baali",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/BasraBaali_1.jpg?v=1756987419&width=800",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 197,
        name: "Bride Eyewear",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC01295_copy.jpg?v=1772448581&width=800",
        price: "₹2799.00",
        shaadi: true,
    },
    {
        id: 198,
        name: "Basra Wristwrap Bracelet",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC0689copy.jpg?v=1763976709&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 199,
        name: "Grand Palais Kaanchains",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC01408-Edit.jpg?v=1765963866&width=800",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 200,
        name: "Solomon Linear Maangtika",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC00936_copy_jpg.jpg?v=1776843213&width=1200",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 201,
        name: "Chand Saaj Ring Stack (Set of 4)",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/DSC1044copy.jpg?v=1756987503&width=1200",
        price: "₹2290.00",
        shaadi: true,
    },
    {
        id: 202,
        name: "Grand Palais Droplets",
        type: "indian",
        img: "https://www.amama.in/cdn/shop/files/Channelling_Rani_vibes_for_TheRajaSaab_Ee_look_ki_mee_prema_kavali_Also_big_hug_to_tora-2_1.jpg?v=1767167038&width=800",
        price: "₹999.00",
        shaadi: true,
    },
    {
        id: 203,
        img: "https://www.amama.in/cdn/shop/files/425312197_18417343681057173_2068627220345662591_n.jpg?v=1756887620&width=600",
        smallimg: "/image8.jpg",
        hoverimg: "image67.webp",
        type: "Darpana",
        price: "₹ 5,250",
        latestCategory: "darpana",
        name: "Modern festive wear",
    },
    {
        id: 204,
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/s/a/sanb1100005-2.jpg",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        type: "SPRING SUMMER",
        latestCategory: "summer",
        latest: true,
        bags: true
    },

    {
        id: 205,
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/s/a/sanb1100004-1.jpg",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        // type: "SPRING SUMMER",
        // latestCategory: "summer",
        latest: true,
        bags: true
    },
    {
        id: 206,
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/s/a/sanb1100009-1.jpg",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        // type: "SPRING SUMMER",
        // latestCategory: "summer",
        latest: true,
        bags: true
    },
    {
        id: 207,
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/s/a/sanb110012-1.jpg",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        // type: "SPRING SUMMER",
        // latestCategory: "summer",
        latest: true,
        bags: true
    },
    {
        id: 208,
        img: "https://www.amama.in/cdn/shop/files/buy_designer_jewellery_online.jpg?v=1756987461&width=1200",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        latest: true,
        NanoBags: true,
        bags: true
    },
    {
        id: 209,
        img: "https://everstylish.com/media/catalog/product/cache/730dfe0c226bc67b1ed8bcd042e3baec/s/a/sanb1100011-1.jpg",
        hoverimg: "image7.jpg",
        name: "ROHINI – POLISHED BRONZE BROWN TEXTILE CLUTCH WITH FACETED JEWEL ACCENTS AND GOLDEN METAL FRAME",
        price: "₹ 3,250",
        // type: "SPRING SUMMER",
        // latestCategory: "summer",
        latest: true,
        bags: true
    },

    {
        id: 210,
        img: "https://www.amama.in/cdn/shop/files/GOLD9489copy_cae3a843-7717-4f18-938d-6d4e214f789c.jpg?v=1756987915&width=700",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        // type: "SPRING SUMMER",
        // latestCategory: "summer",
        latest: true,
        NanoBags: true,
        bags: true
    },
    {
        id: 211,
        img: "https://www.amama.in/cdn/shop/files/DSC00385-2.jpg?v=1756987486&width=1200",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        // type: "SPRING SUMMER",
        // latestCategory: "summer",
        latest: true,
        NanoBags: true,
        bags: true
    },
    {
        id: 212,
        img: "https://www.amama.in/cdn/shop/files/16_168a7616-8fb0-46e2-a204-f4cda167fbad.jpg?v=1757757499&width=1200",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        latest: true,
        bags: true,
        NanoBags: true
    },
    {
        id: 213,
        img: "https://www.amama.in/cdn/shop/files/9_f7f5597e-6375-4bfb-80e0-126603050f90.jpg?v=1757760422&width=1200",
        hoverimg: "image7.jpg",
        name: "Pyaari Beshumar Pendant",
        price: "₹ 3,250",
        latest: true,
        bags: true,
        Batua: true
    },
    {
        id: 214,
        img: "https://www.amama.in/cdn/shop/files/preview_images/1858a10982fe48ffb7f6b3d6c330b5d7.thumbnail.0000000000.jpg?v=1777439608&width=600",
        hoverimg: "image7.jpg",
        name: "Heart Lock Nano Bag in Champagne Gold",
        price: "₹ 2,250",
        latest: true,
        feathers: true
    },

    {
        id: 215,
        img: "https://www.amama.in/cdn/shop/files/DSC04807-Edit.jpg?v=1776854883&width=1200",
        name: "Cloud Burst Huggies",
        price: "₹ 1,250",
        latest: true,
        feathers: true
    },

    {
        id: 216,
        img: "https://www.amama.in/cdn/shop/files/DSC04767-Edit.jpg?v=1776856596&width=1200",
        name: "Firework Scallop Studs",
        price: "₹ 3,330",
        latest: true,
        feathers: true
    },
    {
        id: 217,
        img: "https://www.amama.in/cdn/shop/files/DSC09249copy33_jpg.jpg?v=1779256420&width=1200",
        name: "Heart Lock Nano Bag in Champagne Gold",
        price: "₹ 3,290",
        latest: true,
        feathers: true
    },
    {
        id: 218,
        img: "https://www.amama.in/cdn/shop/files/DSC04671-Edit.jpg?v=1776856931&width=1200",
        name: "Molecule Sprial Ring",
        price: "₹ 3,440",
        ring: true,
        feathers: true
    },
    {
        id: 219,
        img: "https://www.amama.in/cdn/shop/files/DSC03289-Edit.jpg?v=1779361133&width=1200",
        name: "Cupid's Bow Earcrawler (set of 2)",
        price: "₹ 1,250",
        latest: true,
        feathers: true
    },
    {
        id: 220,
        img: "https://www.amama.in/cdn/shop/files/DSC02125copy.jpg?v=1756987467&width=600",
        name: "Pyaaooori Beshumar Pendant",
        price: "₹ 750",
        feathers: true
    },
    {
        id: 221,
        img: "https://www.amama.in/cdn/shop/files/DSC03304-Edit.jpg?v=1779355979&width=1200",
        name: "Firework Wristwrap",
        price: "₹ 3,500",
        latest: true,
        feathers: true
    },
    {
        id: 222,
        img: "https://www.amama.in/cdn/shop/files/DSC07512-Edit_0330af9f-bf2b-49ae-80e9-6d1628e7cfbe.jpg?v=1779099906&width=1200",
        name: "Twiddle Earcuff (Set of 2)",
        price: "₹ 3,550",
        latest: true,
        feathers: true
    },
    {
        id: 223,
        img: "https://www.amama.in/cdn/shop/files/DSC04665-Edit.jpg?v=1776854490&width=1200",
        name: "Firework Trail Bracelet",
        price: "₹ 2250",
        latest: true,
        feathers: true
    },
    {
        id: 224,
        img: "https://www.amama.in/cdn/shop/files/DSC04675-Edit.jpg?v=1776853729&width=1200",
        name: "Cupid's Braid Bracelet",
        price: "₹ 3,240",
        latest: true,
        feathers: true
    },
    {
        id: 225,
        img: "https://www.amama.in/cdn/shop/files/DSC04735-Edit.jpg?v=1776855342&width=1200",
        name: "Faith Charms Necklace",
        price: "₹ 3,330",
        latest: true,
        feathers: true
    },
    {
        id: 226,
        img: "https://www.amama.in/cdn/shop/files/DSC04742-Edit.jpg?v=1776857002&width=1200",
        name: "Cloud Burst Rings (Set of 2)",
        price: "₹ 2,250",
        latest: true,
        feathers: true
    },
    {
        id: 227,
        img: "https://www.amama.in/cdn/shop/files/DSC03333-Edit.jpg?v=1779363443&width=1200",
        name: "Firework Linear Earrings",
        price: "₹ 3,550",
        latest: true,
        feathers: true
    },
    {
        id: 228,
        img: "https://www.amama.in/cdn/shop/files/425312197_18417343681057173_2068627220345662591_n.jpg?v=1756887620&width=600",
        smallimg: "/image8.jpg",
        hoverimg: "image67.webp",
        type: "Darpana",
        price: "₹ 5,250",
        latestCategory: "darpana",
        name: "Modern festive wear",

    },
    {
        id: 229,
        img: "/image44.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3,350",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        rings: true,
    },
    {
        id: "230",
        img: "/image44.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3,090",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        rings: true,
    },
    {
        id: "231",
        img: "/image74.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3,850",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        rings: true,
    },
    {
        id: "232",
        img: "/image54.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        rings: true,
    },
    {
        id: "233",
        img: "/image34.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3,300",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        rings: true,
    },
    {
        id: "234",
        img: "/image48.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        rings: true,
    },
    {
        id: "235",
        img: "/image48.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "236",
        img: "/image49.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "237",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "238",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },

    {
        id: "239",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },

    {
        id: "240",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "241",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "242",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "243",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        maangtikka: true
    },
    {
        id: "244",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        necklaceset: true
    },
    {
        id: "245",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        necklaceset: true
    },
    {
        id: "246",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        necklaceset: true
    },
    {
        id: "247",
        img: "/image98.webp",
        hoverimg: "image29.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        necklaceset: true
    },
    {
        id: "248",
        img: "/image98.webp",
        hoverimg: "image9.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        necklaceset: true
    },
    {
        id: "249",
        img: "https://everstylish.com/media/catalog/product/cache/32d6a1cc700912c0dcf6eda1e76255f8/j/e/jew1110619-m2.jpg",
        hoverimg: "image9.jpg",
        name: "Surya Darpan Sahara Earrings",
        price: "₹ 3150",
        latestCategory: "darpana",
        type: "DARPANA",
        bestseller: true,
        other: true
    },
    {

        id: "250",
        img: "https://www.amama.in/cdn/shop/files/Akansha_Ranjan.jpg?v=1776681699&width=1600",
        name: "Akansha Ranjan",
        price: "₹ 3150",
        productuse: "IN SWIVEL LAYERED NECKLACE"
    },
    {
        id: "251",
        img: "https://www.amama.in/cdn/shop/files/ishitamangal_1761140629_3749041787709244739_39427734.jpg?v=1766387863&width=1000",
        name: "Ishita Mangal",
        price: "₹ 2070",
        productuse: "IN  JHARKHORA MANIK CHANDBALIS"

    },
    {
        id: "252",
        img: "https://www.amama.in/cdn/shop/files/Hina_khan_in_Darpan.jpg?v=1761304621&width=500",
        name: "Hina Khan",
        price: "₹ 3150",
        productuse: "DARPAN MEEN DANGLERS"
    },
    {
        id: "253",
        img: "https://www.amama.in/cdn/shop/files/Athiya_shetty.jpg?v=1776682723&width=500",
        name: "Athiya Shetty",
        price: "₹ 2,079",
        productuse: "IN BASARA BAI SAHARA EARRINGS SET OF 2"
    },
    {
        id: "254",
        img: "https://www.amama.in/cdn/shop/files/therealkarismakapoor_1765008070_3781484233559471640_1460581245.jpg?v=1766388201&width=500",
        name: "Karisma Kapoor",
        price: "₹ 3150",
        productuse: "IN BADHAI HO BUGADI"
    },
    {
        id: "255",
        img: "https://www.amama.in/cdn/shop/files/kajol_in_lumina_revival.jpg?v=1761303652&width=500",
        name: "Kajol",
        price: "₹ 6,050",
        productuse: "IN LUMINA  & REVIVAL"
    },
    {
        id: "256",
        img: "https://www.amama.in/cdn/shop/files/Aditi_Rao.jpg?v=1776684861&width=500",
        name: "Aditi Rao",
        price: "₹ 3330",
        productuse: "IN CHNAD RAAG EARCLIPS"
    },
    {
        id: "257",
        img: "https://www.amama.in/cdn/shop/files/Deeksha_Khurana.jpg?v=1776684862&width=500",
        name: "Deeksha Khurana",
        price: "₹ 3150",
        productuse: "WITH SOLOMON CLUTCH"
    },
    {
        id: "258",
        img: "https://www.amama.in/cdn/shop/files/amamajewels_1741508540_3584355890675377448_3624383891_9286c269-1d4e-41dc-a9c9-6eeb47d9dabc.jpg?v=1742813788&width=500",
        name: "JACQUELINE FERNANDEZ",
        price: "₹ 4440",
        productuse: "IN MAXIMA SHOULDER DUSTER"
    },
    {
        id: "259",
        img: "https://www.amama.in/cdn/shop/files/WhatsApp_Image_2024-06-06_at_11.31.35_AM.jpg?v=1742813162&width=500",
        name: "GENELA  D'SOUZA",
        price: "₹ 3,666",
        productuse: "IN  ARYAN SCALLOP DANGLERS"
    },
    {
        id: "260",
        img: "https://www.amama.in/cdn/shop/files/Dia_Mirza.jpg?v=1776684861&width=500",
        name: "DIA MIRZA",
        price: "₹ 4,300",
        productuse: "IN NOT YOUR ROSE GEMSTONES SHOULDER GRAZERS "
    },
    {
        id: "261",
        img: "https://www.amama.in/cdn/shop/files/kritisanon2707__1741430926_3583704811222616147_10716656803.jpg?v=1741601695&width=500",
        name: "KRITI SANON",
        price: "₹ 1780",
        productuse: "IN AURYN ILLUSION RING IN CHROME"
    },
    {
        id: "262",
        img: "https://www.amama.in/cdn/shop/files/K_Kamra.jpg?v=1776684861&width=500",
        name: " KRIIKA KAMRA",
        price: "₹ 2222",
        productuse: "IN VINE CREST EARCLIMBERS"
    },
    {
        id: "263",
        img: "https://www.amama.in/cdn/shop/files/IMG-20241112-WA0232.jpg?v=1741594543&width=500",
        name: "RAKUL PREET SINGH",
        price: "₹ 3,059",
        productuse: "IN FROOT LOOP EARRINGS"
    },
    {
        id: "264",
        img: "https://www.amama.in/cdn/shop/files/6_1_498e0820-56f0-421c-8759-8a3bf7e78011.jpg?v=1741586045&width=500",
        name: "TRISHA DIMRI",
        price: "₹ 2205",
        productuse: "IN MAXIMA SHOULDER DUSTER"
    },
    {
        id: "265",
        img: "https://www.amama.in/cdn/shop/files/Malaika_Arora_in_Nano_Aurora_Studs_In_Hot_Pink.jpg?v=1766389856&width=500",
        name: "MALAIKA ARORA",
        price: "₹ 4,050",
        productuse: "IN NANAO AURORA STUDS IN HOT PINK"
    },
    {
        id: "266",
        img: "https://www.amama.in/cdn/shop/files/SONAKSHI_SINHA_4th_October_20240434_1_cca0b13d-70bf-4a2f-8862-c34e4dd78d2e.jpg?v=1744357440&width=500",
        name: "SONAKSHI SINHA",
        price: "₹ 3460",
        productuse: "IN CHAND RAAG EARSTACK"
    },
    {
        id: "267",
        img: "https://www.amama.in/cdn/shop/files/Shweta_Tiwari.jpg?v=1776684862&width=500",
        name: "Shweta Tiwari",
        price: "₹ 4440",
        productuse: "IN SHEESHMAHAL KASTURI JHUMKA"
    },
    {
        id: "268",
        img: "https://www.amama.in/cdn/shop/files/Shreya_ghoshal.jpg?v=1776684861&width=500",
        name: "Shreya Ghoshal",
        price: "₹ 4,050",
        productuse: "IN PATIALA FOUNTAIN EARRINGS"
    },
    {
        id: "269",
        img: "https://www.amama.in/cdn/shop/files/PRA03575_copy_2_fd821757-4be3-4b3e-8dc7-e95be46004ab.jpg?v=1744364874&width=500",
        name: "KEERTHY SURESH",
        price: "₹ 1559",
        productuse: "IN LIANA BOW EARRINGS IN CHAMPAGNE GOLD"
    },
    {
        id: "270",
        img: "https://www.amama.in/cdn/shop/files/AMA-CELEB-040-1_3ce5fe4f-a87e-48ad-818c-76048f99c25c_1.jpg?v=1688718929&width=500",
        name: "KRITI SANON",
        price: "₹4,666",
        productuse: "IN CARLONE STUDS"
    },
    {
        id: "271",
        img: "https://www.amama.in/cdn/shop/files/30_14f0f626-4553-45ba-95b6-2e1b001db1d1.jpg?v=1757745434&width=1200",
        name: "Maxima Lifafa",
        price: "₹ 1,050",
        bags: true,
        latestCategory: "darpana",
        Lifafa: true,
        OtherAccessories: true,
        MoneyEnvelope: true,

    },
    {
        id: "272",
        img: "https://www.amama.in/cdn/shop/files/DSC03521-Edit.jpg?v=1765189323&width=800",
        name: "Maxima Bucket Bag In Chrome",
        price: "₹ 1,950",
        bags: true,
        BucketBags: true,
    },
    {
        id: "273",
        img: "https://www.amama.in/cdn/shop/files/BAdhaiHo-3.jpg?v=1773730530&width=1200",
        name: "Solomon Akshar Clutch",
        price: "₹ 1300",
        badhaiho: true,
        bags: true,
        Clutch: true,
    },
    {
        id: "274",
        img: "https://www.amama.in/cdn/shop/files/DSC01010-Edit.jpg?v=1766051327&width=800",
        name: "Maxima Bucket Bag In Chrome",
        price: "₹ 1,950",
        bags: true,
        Potli: true,
    },
    {
        id: "275",
        img: "https://www.amama.in/cdn/shop/files/15_fe6d2d62-61c7-43b3-a2e0-6fed03b195f6.jpg?v=1756987212&width=1200",
        name: "Maxima Bucket Bag In Chrome",
        price: "₹ 1,950",
        bags: true,
        ShoulderBag: true,

    },
    {
        id: "276",
        img: "https://www.amama.in/cdn/shop/files/DSC06773_3835368e-57fb-4085-bc1f-8d330ec6eada.jpg?v=1756987787&width=700",
        name: "Maxima Bucket Bag In Chrome",
        price: "₹ 1,950",
        bags: true,
        SlingBag: true,
    }


]


export default products;