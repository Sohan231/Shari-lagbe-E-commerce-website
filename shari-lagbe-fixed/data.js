const CATEGORIES = [
  {
    "name": "Jamdani",
    "desc": "Hand-loomed, motif-woven",
    "image": "image/categories/jamdani.jpeg",
    "slug": "jamdani"
  },
  {
    "name": "Cotton Tangail",
    "desc": "Light, everyday wear",
    "image": "image/categories/cotton-tangail.jpeg",
    "slug": "cotton-tangail"
  },
  {
    "name": "Katan Silk",
    "desc": "Rich weight, festive",
    "image": "image/categories/katan-silk.jpeg",
    "slug": "katan-silk"
  },
  {
    "name": "Half-Silk",
    "desc": "Balance of both worlds",
    "image": "image/categories/half-silk.jpeg",
    "slug": "half-silk"
  },
  {
    "name": "Muslin",
    "desc": "Sheer, legendary weave",
    "image": "image/categories/muslin.jpeg",
    "slug": "muslin"
  },
  {
    "name": "Silk Georgette",
    "desc": "Flowing, modern drape",
    "image": "image/categories/silk-georgette.jpeg",
    "slug": "silk-georgette"
  },
  {
    "name": "Linen",
    "desc": "Crisp, breathable cotton blend",
    "image": "image/categories/linen.jpeg",
    "slug": "linen"
  },
  {
    "name": "Wedding Katan",
    "desc": "Zari border, heavy silk",
    "image": "image/categories/wedding-katan.jpeg",
    "slug": "wedding-katan"
  },
  {
    "name": "Monipuri",
    "desc": "Manipuri community weave",
    "image": "image/categories/monipuri.jpeg",
    "slug": "monipuri"
  }
];

const PRODUCTS = [
  {
    "id": "p1",
    "name": "Jamdani \u2014 Deep Indigo",
    "category": "Jamdani",
    "price": 4050,
    "region": "Pathrail",
    "meta": "Hand-loomed, motif-woven",
    "image": "image/products/jamdani-deep-indigo.jpg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": "New"
  },
  {
    "id": "p2",
    "name": "Jamdani \u2014 Madder Red",
    "category": "Jamdani",
    "price": 4550,
    "region": "Tangail Sadar",
    "meta": "Hand-loomed, motif-woven",
    "image": "image/products/jamdani-madder-red.jpeg",
    "color1": "#A13327",
    "color2": "#7E271D",
    "badge": ""
  },
  {
    "id": "p3",
    "name": "Jamdani \u2014 Turmeric Gold",
    "category": "Jamdani",
    "price": 4750,
    "region": "Delduar",
    "meta": "Hand-loomed, motif-woven",
    "image": "image/products/jamdani-turmeric-gold.jpg",
    "color1": "#D9A441",
    "color2": "#B97F2A",
    "badge": ""
  },
  {
    "id": "p4",
    "name": "Jamdani \u2014 Slate Blue",
    "category": "Jamdani",
    "price": 5250,
    "region": "Kalihati",
    "meta": "Hand-loomed, motif-woven",
    "image": "image/products/jamdani-slate-blue.jpg",
    "color1": "#6B7FA3",
    "color2": "#1E2F4F",
    "badge": ""
  },
  {
    "id": "p5",
    "name": "Cotton Tangail \u2014 Soft Ivory",
    "category": "Cotton Tangail",
    "price": 1450,
    "region": "Nagarpur",
    "meta": "Light, everyday wear",
    "image": "image/products/cotton-tangail-soft-ivory.jpg",
    "color1": "#D9A441",
    "color2": "#A13327",
    "badge": "New"
  },
  {
    "id": "p6",
    "name": "Cotton Tangail \u2014 Charcoal Grey",
    "category": "Cotton Tangail",
    "price": 1950,
    "region": "Bashail",
    "meta": "Light, everyday wear",
    "image": "image/products/cotton-tangail-charcoal-grey.jpeg",
    "badge": ""
  },
  {
    "id": "p7",
    "name": "Cotton Tangail \u2014 Forest Green",
    "category": "Cotton Tangail",
    "price": 2150,
    "region": "Gopalpur",
    "meta": "Light, everyday wear",
    "image": "image/products/cotton-tangail-forest-green.jpeg",
    "badge": ""
  },
  {
    "id": "p8",
    "name": "Cotton Tangail \u2014 Maroon",
    "category": "Cotton Tangail",
    "price": 2650,
    "region": "Pathrail",
    "meta": "Light, everyday wear",
    "image": "image/products/cotton-tangail-maroon.jpeg",
    "color1": "#1E2F4F",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p9",
    "name": "Katan Silk \u2014 Sunset Orange",
    "category": "Katan Silk",
    "price": 6350,
    "region": "Tangail Sadar",
    "meta": "Rich weight, festive",
    "image": "image/products/katan-silk-sunset-orange.jpg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": "New"
  },
  {
    "id": "p10",
    "name": "Katan Silk \u2014 Dusty Rose",
    "category": "Katan Silk",
    "price": 6850,
    "region": "Delduar",
    "meta": "Rich weight, festive",
    "image": "image/products/katan-silk-dusty-rose.jpg",
    "color1": "#A13327",
    "color2": "#7E271D",
    "badge": "Bestseller"
  },
  {
    "id": "p11",
    "name": "Katan Silk \u2014 Mustard Yellow",
    "category": "Katan Silk",
    "price": 7050,
    "region": "Kalihati",
    "meta": "Rich weight, festive",
    "image": "image/products/katan-silk-mustard-yellow-placeholder.jpg",
    "color1": "#D9A441",
    "color2": "#B97F2A",
    "badge": ""
  },
  {
    "id": "p12",
    "name": "Katan Silk \u2014 Steel Blue",
    "category": "Katan Silk",
    "price": 7550,
    "region": "Nagarpur",
    "meta": "Rich weight, festive",
    "image": "image/products/katan-silk-steel-blue.jpg",
    "color1": "#6B7FA3",
    "color2": "#1E2F4F",
    "badge": ""
  },
  {
    "id": "p13",
    "name": "Half-Silk \u2014 Wine",
    "category": "Half-Silk",
    "price": 2750,
    "region": "Bashail",
    "meta": "Balance of both worlds",
    "image": "image/products/half-silk-wine.jpg",
    "color1": "#D9A441",
    "color2": "#A13327",
    "badge": "New"
  },
  {
    "id": "p14",
    "name": "Half-Silk \u2014 Sea Green",
    "category": "Half-Silk",
    "price": 3250,
    "region": "Gopalpur",
    "meta": "Balance of both worlds",
    "image": "image/products/half-silk-sea-green.jpeg",
    "color1": "#8C9BB8",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p15",
    "name": "Half-Silk \u2014 Coral",
    "category": "Half-Silk",
    "price": 3450,
    "region": "Pathrail",
    "meta": "Balance of both worlds",
    "image": "image/products/half-silk-coral.jpeg",
    "color1": "#EAC77A",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p16",
    "name": "Half-Silk \u2014 Plum",
    "category": "Half-Silk",
    "price": 3950,
    "region": "Tangail Sadar",
    "meta": "Balance of both worlds",
    "image": "image/products/half-silk-plum.jpg",
    "color1": "#1E2F4F",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p17",
    "name": "Muslin \u2014 Sand Beige",
    "category": "Muslin",
    "price": 5050,
    "region": "Delduar",
    "meta": "Sheer, legendary weave",
    "image": "image/products/muslin-sand-beige.jpg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": "New"
  },
  {
    "id": "p18",
    "name": "Muslin \u2014 Teal",
    "category": "Muslin",
    "price": 5550,
    "region": "Kalihati",
    "meta": "Sheer, legendary weave",
    "image": "image/products/muslin-tel.jpeg",
    "color1": "#A13327",
    "color2": "#7E271D",
    "badge": ""
  },
  {
    "id": "p19",
    "name": "Muslin \u2014 Rust",
    "category": "Muslin",
    "price": 5750,
    "region": "Nagarpur",
    "meta": "Sheer, legendary weave",
    "image": "image/products/muslin-rust.jpeg",
    "color1": "#D9A441",
    "color2": "#B97F2A",
    "badge": ""
  },
  {
    "id": "p20",
    "name": "Muslin \u2014 Lilac",
    "category": "Muslin",
    "price": 6250,
    "region": "Bashail",
    "meta": "Sheer, legendary weave",
    "image": "image/products/muslin-lilac.jpeg",
    "color1": "#6B7FA3",
    "color2": "#1E2F4F",
    "badge": ""
  },
  {
    "id": "p21",
    "name": "Silk Georgette \u2014 Deep Indigo",
    "category": "Silk Georgette",
    "price": 3650,
    "region": "Gopalpur",
    "meta": "Flowing, modern drape",
    "image": "image/products/silk-georgette-deep-indigo.jpg",
    "color1": "#D9A441",
    "color2": "#A13327",
    "badge": "New"
  },
  {
    "id": "p22",
    "name": "Silk Georgette \u2014 Madder Red",
    "category": "Silk Georgette",
    "price": 4150,
    "region": "Pathrail",
    "meta": "Flowing, modern drape",
    "image": "image/products/silk-georgette-madder-red.jpeg",
    "color1": "#8C9BB8",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p23",
    "name": "Silk Georgette \u2014 Turmeric Gold",
    "category": "Silk Georgette",
    "price": 4350,
    "region": "Tangail Sadar",
    "meta": "Flowing, modern drape",
    "image": "image/products/silk-georgette-turmeric-gold.jpeg",
    "color1": "#EAC77A",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p24",
    "name": "Silk Georgette \u2014 Slate Blue",
    "category": "Silk Georgette",
    "price": 4850,
    "region": "Delduar",
    "meta": "Flowing, modern drape",
    "image": "image/products/silk-georgette-slate-blue-placeholder.jpg",
    "color1": "#1E2F4F",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p25",
    "name": "Linen \u2014 Soft Ivory",
    "category": "Linen",
    "price": 2250,
    "region": "Kalihati",
    "meta": "Crisp, breathable cotton blend",
    "image": "image/products/linen-soft-ivory.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": "New"
  },
  {
    "id": "p26",
    "name": "Linen \u2014 Charcoal Grey",
    "category": "Linen",
    "price": 2750,
    "region": "Nagarpur",
    "meta": "Crisp, breathable cotton blend",
    "image": "image/products/linen-charcoal-grey.jpg",
    "color1": "#A13327",
    "color2": "#7E271D",
    "badge": ""
  },
  {
    "id": "p27",
    "name": "Linen \u2014 Forest Green",
    "category": "Linen",
    "price": 2950,
    "region": "Bashail",
    "meta": "Crisp, breathable cotton blend",
    "image": "image/products/linen-forest-green.jpg",
    "color1": "#D9A441",
    "color2": "#B97F2A",
    "badge": ""
  },
  {
    "id": "p28",
    "name": "Linen \u2014 Maroon",
    "category": "Linen",
    "price": 3450,
    "region": "Gopalpur",
    "meta": "Crisp, breathable cotton blend",
    "image": "image/products/linen-maroon.jpeg",
    "color1": "#6B7FA3",
    "color2": "#1E2F4F",
    "badge": ""
  },
  {
    "id": "p29",
    "name": "Wedding Katan \u2014 Sunset Orange",
    "category": "Wedding Katan",
    "price": 8650,
    "region": "Pathrail",
    "meta": "Zari border, heavy silk",
    "image": "image/products/wedding-katan-sunset-orange.jpeg",
    "color1": "#D9A441",
    "color2": "#A13327",
    "badge": "New"
  },
  {
    "id": "p30",
    "name": "Wedding Katan \u2014 Dusty Rose",
    "category": "Wedding Katan",
    "price": 9150,
    "region": "Tangail Sadar",
    "meta": "Zari border, heavy silk",
    "image": "image/products/wedding-katan-dusty-rose.jpeg",
    "color1": "#8C9BB8",
    "color2": "#152238",
    "badge": "Bestseller"
  },
  {
    "id": "p31",
    "name": "Wedding Katan \u2014 Mustard Yellow",
    "category": "Wedding Katan",
    "price": 9350,
    "region": "Delduar",
    "meta": "Zari border, heavy silk",
    "image": "image/products/wedding-katan-mustard-yellow.jpg",
    "color1": "#EAC77A",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p32",
    "name": "Wedding Katan \u2014 Steel Blue",
    "category": "Wedding Katan",
    "price": 9850,
    "region": "Kalihati",
    "meta": "Zari border, heavy silk",
    "image": "image/products/wedding-katan-steel-blue.jpg",
    "color1": "#1E2F4F",
    "color2": "#A13327",
    "badge": ""
  },
  {
    "id": "p33",
    "name": "Dhakai Muslin \u2014 Sand",
    "category": "Muslin",
    "price": 5400,
    "region": "Tangail Sadar",
    "meta": "Muslin \u00b7 Sheer weave",
    "image": "image/products/Dahakaiya%20muslin.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p34",
    "name": "Tangail Tat \u2014 Ivory",
    "category": "Cotton Tangail",
    "price": 1750,
    "region": "Pathrail",
    "meta": "Cotton \u00b7 Everyday",
    "image": "image/products/Tangilla%20Tat%202.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p35",
    "name": "Tangail Tat \u2014 Rust Border",
    "category": "Cotton Tangail",
    "price": 1900,
    "region": "Pathrail",
    "meta": "Cotton \u00b7 Everyday",
    "image": "image/products/Tangilla%20tat%203.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p36",
    "name": "White Cotton Tangail",
    "category": "Cotton Tangail",
    "price": 1650,
    "region": "Delduar",
    "meta": "Cotton \u00b7 Plain body",
    "image": "image/products/White%20shari.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p37",
    "name": "White Cotton Tangail \u2014 Zari Border",
    "category": "Cotton Tangail",
    "price": 2100,
    "region": "Delduar",
    "meta": "Cotton \u00b7 Zari edge",
    "image": "image/products/White%20shari%202.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p38",
    "name": "Green Half-Silk",
    "category": "Half-Silk",
    "price": 3100,
    "region": "Kalihati",
    "meta": "Half-silk \u00b7 Office to evening",
    "image": "image/products/green%20shari.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p39",
    "name": "Green Half-Silk \u2014 Leaf",
    "category": "Half-Silk",
    "price": 3250,
    "region": "Kalihati",
    "meta": "Half-silk \u00b7 Office to evening",
    "image": "image/products/green%20shari%202.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p40",
    "name": "Green Half-Silk \u2014 Bottle",
    "category": "Half-Silk",
    "price": 3300,
    "region": "Kalihati",
    "meta": "Half-silk \u00b7 Office to evening",
    "image": "image/products/green%20shari%205.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p41",
    "name": "Nokshi Jamdani \u2014 Off-White",
    "category": "Jamdani",
    "price": 4400,
    "region": "Tangail Sadar",
    "meta": "Cotton \u00b7 Hand motif",
    "image": "image/products/jamdani%20shari%203.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p42",
    "name": "Nokshi Jamdani \u2014 Black",
    "category": "Jamdani",
    "price": 4600,
    "region": "Tangail Sadar",
    "meta": "Cotton \u00b7 Hand motif",
    "image": "image/products/jamdani%20shari%204.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p43",
    "name": "Monipuri Shari \u2014 Classic",
    "category": "Monipuri",
    "price": 2800,
    "region": "Sylhet",
    "meta": "Manipuri weave \u00b7 Handloom",
    "image": "image/products/monipuri%20shari%203.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": "New"
  },
  {
    "id": "p44",
    "name": "Monipuri Shari \u2014 Handwoven",
    "category": "Monipuri",
    "price": 2950,
    "region": "Sylhet",
    "meta": "Manipuri weave \u00b7 Handloom",
    "image": "image/products/monipuri%20shari%204.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p45",
    "name": "Monipuri Shari \u2014 Festive",
    "category": "Monipuri",
    "price": 3400,
    "region": "Sylhet",
    "meta": "Manipuri weave \u00b7 Festive border",
    "image": "image/products/monipuri%20shari%206.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p46",
    "name": "Muslin Cotton \u2014 Classic",
    "category": "Muslin",
    "price": 2600,
    "region": "Tangail Sadar",
    "meta": "Muslin \u00b7 Sheer, light",
    "image": "image/products/muslin%20cotton.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p47",
    "name": "Muslin Cotton \u2014 Light",
    "category": "Muslin",
    "price": 2650,
    "region": "Tangail Sadar",
    "meta": "Muslin \u00b7 Sheer, light",
    "image": "image/products/muslin%20cotton%202.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p48",
    "name": "Muslin Cotton \u2014 Everyday",
    "category": "Muslin",
    "price": 2500,
    "region": "Tangail Sadar",
    "meta": "Muslin \u00b7 Sheer, light",
    "image": "image/products/muslin%20cotton%203.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p49",
    "name": "Muslin Cotton \u2014 Soft",
    "category": "Muslin",
    "price": 2700,
    "region": "Tangail Sadar",
    "meta": "Muslin \u00b7 Sheer, light",
    "image": "image/products/muslin%20cotton%20shrai%202.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  },
  {
    "id": "p50",
    "name": "Silk Georgette \u2014 Madder Blue",
    "category": "Silk Georgette",
    "price": 4100,
    "region": "Nagarpur",
    "meta": "Silk georgette \u00b7 Flowing drape",
    "image": "image/products/silk-georgette-madder-blue.jpeg",
    "color1": "#1E2F4F",
    "color2": "#152238",
    "badge": ""
  }
];

const POSTS = [
  {
    "slug": "history-of-jamdani",
    "title": "What actually makes a Jamdani different",
    "tag": "Weaving",
    "date": "2026-08-03",
    "readTime": "6 min read",
    "image": "image/blog/history-of-jamdani.jpeg",
    "excerpt": "The motifs aren't printed or embroidered \u2014 they're woven in by hand, thread by thread, as the saree is made.",
    "content": [
      "Jamdani is often described as a cousin of muslin, and the description is fair. Both trace back to the same stretch of the Bengal delta, where the humidity, the soil, and the particular strain of cotton that once grew along the Meghna made an unusually fine, strong thread possible. What sets Jamdani apart is what the weaver does with that thread once it's on the loom.",
      "A printed or embroidered pattern is added after the base cloth exists. A Jamdani motif is not added \u2014 it is built into the fabric as it's woven. The weaver works with two sets of threads at once: the plain warp and weft that form the transparent base cloth, and small bobbins of thicker, often coloured thread that are worked in by hand at each point a motif appears, row by row, exactly like inlaying a mosaic rather than drawing on top of one.",
      "This is why a Jamdani saree has no 'wrong side' the way a printed textile does \u2014 flip it over and the motif is just as present, just as finished, on the back. It's also why the pace is what it is. A skilled weaver produces perhaps two to three inches of a densely motifed Jamdani in a full day's work. A saree with an elaborate pallu can take four to six weeks from the first thread to the last.",
      "In 2013, UNESCO added the traditional art of Jamdani weaving to its Representative List of the Intangible Cultural Heritage of Humanity \u2014 recognition of a technique documented in Bengal for at least three centuries, and one that nearly disappeared during the colonial period when mechanised imports undercut handloom prices. The weavers who kept it alive did so mostly around Dhaka and, further north, in pockets of Tangail district, where the tradition continues today in much the same form.",
      "When you're looking at a Jamdani saree, the giveaway is always the back. Turn it over. If the motif looks the same from both sides, thread for thread, someone spent weeks making it that way."
    ]
  },
  {
    "slug": "caring-for-handloom-cotton",
    "title": "How to store a handloom cotton saree",
    "tag": "Care guide",
    "date": "2026-07-22",
    "readTime": "4 min read",
    "image": "image/blog/caring-for-handloom-cotton.jpeg",
    "excerpt": "Cotton needs to breathe. A simple habit or two can keep colours from fading between wears.",
    "content": [
      "Handloom cotton is tougher than it looks, but it's woven from fibre, not fought off by finishing chemicals the way a lot of mass-produced cotton is. That means how you store it between wears matters more than people expect.",
      "The single biggest mistake is sealing a cotton saree in a plastic bag for months. Plastic traps moisture, and trapped moisture on natural-dyed cotton is how you get both mildew spotting and colour migration, where a darker border bleeds faintly into a lighter body. Cotton wants air. A breathable cloth bag, or even the paper it was wrapped in at purchase, does a better job than anything airtight.",
      "Fold along the original crease lines where possible, and refold every couple of months rather than leaving it pressed into the same fold indefinitely \u2014 permanent fold lines in handloom cotton can weaken the thread over years of storage. If you have the shelf space, rolling instead of folding avoids this entirely and is worth it for pieces you plan to keep a long time.",
      "Keep dyed cotton out of direct sunlight in storage. Natural and semi-natural dyes, which many Tangail cotton sarees still use for at least the border colour, are more UV-sensitive than synthetic ones. A few hours drying in the shade after a wash is fine; weeks on a sunlit shelf will visibly dull a madder red or an indigo blue.",
      "Wash by hand in cool water with a mild detergent, and skip the fabric softener \u2014 it coats the cotton fibre and slowly flattens the texture that makes handloom cotton feel the way it does. Air dry in shade, iron on the reverse side while still slightly damp, and it'll outlast most things in your wardrobe."
    ]
  },
  {
    "slug": "meet-rashida-weaver",
    "title": "Meet Rashida, a third-generation weaver",
    "tag": "People",
    "date": "2026-07-09",
    "readTime": "7 min read",
    "image": "image/blog/meet-rashida-weaver.jpg",
    "excerpt": "Her grandmother wove for the local zamindar. She now weaves Katan silk for brides across the country.",
    "content": [
      "Rashida learned to throw a shuttle before she learned to write her own name \u2014 not unusual in a household where the pit loom sits in the front room and has done for three generations. Her grandmother wove cotton and muslin-adjacent cloth for a local landholding family in the years before independence; her mother moved the family's work toward silk in the 1980s as demand for cotton daily-wear sarees slowed. Rashida now works almost entirely in Katan silk, much of it destined for wedding trousseaus.",
      "A Katan wedding saree with a full zari border is not a quick piece. Setting up the loom for a new zari pattern alone can take two or three days, threading the border design onto the jacquard attachment thread by thread before a single pass of the main weave begins. Once that's done, Rashida weaves for six to eight hours a day, and a heavily bordered piece still takes the better part of a month.",
      "She's watched the buyer side of the business change more than the weaving side has. In her mother's time, a trader would visit the village, name a price, and that was that \u2014 the family had little sense of what the saree eventually sold for in Dhaka or further afield. Rashida now deals directly with a small number of buyers who tell her upfront what a piece will retail for, which she says has done more for her family's income than any change in technique.",
      "She still keeps her grandmother's shuttle, worn smooth on one side, on a shelf near the loom. Not for luck, she says \u2014 just because throwing it out felt wrong.",
      "Families like Rashida's are the reason a listing on this site names a village and, where the weaver is comfortable with it, a name. The saree is the finished thing you can hold. The three generations behind it usually aren't visible unless someone says so."
    ]
  },
  {
    "slug": "half-silk-vs-cotton",
    "title": "Half-silk for the office, cotton for the commute",
    "tag": "Style",
    "date": "2026-06-28",
    "readTime": "4 min read",
    "image": "image/blog/half-silk-vs-cotton.jpeg",
    "excerpt": "A simple way to think about which weight of saree suits which part of your week.",
    "content": [
      "The honest answer to 'which saree should I buy' usually comes down to how much of the day you'll spend moving in it, and where.",
      "Pure handloom cotton is the lightest option here, both in weight and in how it wears through a hot, humid day \u2014 the fibre is naturally breathable and softens further with every wash. It's the obvious choice for a long commute, a full teaching day, or anything where you're on your feet for hours. The trade-off is that cotton creases more visibly than silk blends, so it wants a mid-day fold check if the day is long.",
      "Half-silk \u2014 a warp of silk with a cotton weft, or the reverse depending on the weaver \u2014 sits in between. It holds a sharper drape than pure cotton, resists creasing better, and has a slight sheen that reads a step more formal without tipping into full silk. This is generally the better pick for an office day, a client meeting, or anything photographed indoors under warm light.",
      "Full Katan silk is heavier again, warmer to wear, and drapes with real structure \u2014 the fabric that photographs best in motion, which is exactly why it dominates wedding and festival wear. It's not built for an eight-hour desk day in Dhaka's climate, and most people who own one know that and reserve it accordingly.",
      "None of this is a rule, just a starting point. Plenty of people wear pure cotton to the office and Katan silk on ordinary days because it's what they have and what they like. The weave is a tool, not a dress code."
    ]
  },
  {
    "slug": "fair-pricing-explained",
    "title": "Why our prices don't drop for \"sales\"",
    "tag": "Behind the scenes",
    "date": "2026-06-14",
    "readTime": "5 min read",
    "image": "image/blog/fair-pricing-explained.jpeg",
    "excerpt": "Discounting handloom work usually means someone along the chain gets paid less. Here's our reasoning.",
    "content": [
      "It's a fair question, and one we get asked often enough to answer properly: why doesn't this site run the seasonal discounts most saree retailers do?",
      "In a typical retail markup, there's room to discount because the retail price already includes a margin built for exactly that \u2014 a buffer that lets a shop mark something down 20% during Eid or Pohela Boishakh and still turn a profit. Our pricing doesn't include that buffer in the same way, because the price we set is worked out from what the weaver is paid, plus the actual cost of thread, dye, transport and running the site \u2014 not from what the market will bear.",
      "That means a 'discount' here would come out of one of two places: a lower payment to the weaver, agreed after the fact and after they've already finished the work, or a loss we absorb indefinitely, which isn't a sustainable way to run anything. Neither sits right with us, so instead of a discount calendar, we try to keep the starting price honest year-round.",
      "This doesn't mean prices never move. A price can go down if a weaving family finds a cheaper, reliable source of the same quality thread, or up if the cost of raw silk rises, which it does most years. What won't happen is a saree listed at one price in October and marked '50% off' in November for the same weave, the same weaver, the same cost of making it.",
      "We'd rather be a site where the sticker price is close to fair on any given day than one where you have to wait for a sale to feel like you got a fair deal."
    ]
  },
  {
    "slug": "reading-the-paar-border",
    "title": "Reading a saree border like a weaver does",
    "tag": "Guide",
    "date": "2026-06-02",
    "readTime": "5 min read",
    "image": "image/blog/reading-the-paar-border.jpeg",
    "excerpt": "The paar isn't just decoration \u2014 its pattern often tells you which district, and sometimes which family, wove it.",
    "content": [
      "The paar \u2014 the woven border that runs the length of a saree \u2014 is the part most people glance past on their way to judging the pallu or the body colour. Weavers read it first.",
      "A border is set up before the main weave even begins, using extra warp threads dedicated just to that strip, often in a contrasting colour and sometimes with a supplementary zari or coloured-thread pattern worked in the same way as a Jamdani motif. Because the border requires its own setup, changing it is a real decision, not an afterthought \u2014 which is exactly why border patterns tend to be passed down and repeated within a family or a village rather than reinvented for every piece.",
      "In and around Tangail, a narrow zigzag temple border \u2014 small repeating triangles, usually in gold against indigo or maroon against cream \u2014 has been common enough for long enough that it's become something close to a regional signature, though individual weaving families still vary the scale and colour combination in ways a buyer might miss and a weaver won't.",
      "A wider, more elaborate border with figurative motifs \u2014 paisleys, floral repeats, sometimes small birds \u2014 generally signals more time on the loom and usually a festive or bridal piece, since that level of border detail slows the weaving considerably and isn't practical for an everyday cotton saree.",
      "None of this is a strict code you need to memorise. But next time you're looking at two sarees that seem otherwise similar, check the border first. It's often where the actual difference in the work is."
    ]
  },
  {
    "slug": "history-of-dhakai-muslin",
    "title": "The lost legend of Dhakai muslin",
    "tag": "History",
    "date": "2026-05-20",
    "readTime": "6 min read",
    "image": "image/blog/history-of-dhakai-muslin.jpg.jpeg",
    "excerpt": "A fabric so fine that European traders swore it could be folded to fit inside a matchbox \u2014 and then it very nearly disappeared.",
    "content": [
      "Dhakai muslin's reputation is one of the strangest in textile history \u2014 a cotton cloth so fine that a full six-yard saree could reportedly be drawn through a small ring, woven from a cotton variety, phuti karpas, that grew specifically along the banks of the Meghna near what is now Dhaka and apparently nowhere else with the same result.",
      "The thread count that made this possible depended on cotton spun so fine it had to be done by hand, often by women whose eyesight was specifically valued for the task, working in the humid morning air because the thread would snap if it dried out. Estimates from period accounts put some muslin at counts far beyond what mechanised spinning could achieve well into the twentieth century.",
      "Muslin's decline is a harder story than its rise. Colonial-era trade policy favoured machine-made cloth from British mills, and tariffs and restrictions through the eighteenth and nineteenth centuries made hand-spun muslin increasingly uncompetitive against imported cotton cloth, even as its quality remained unmatched. The specific cotton variety it depended on fell out of cultivation as demand collapsed, and by the early twentieth century, true Dhakai muslin as it once existed had effectively disappeared \u2014 the plant, the specific spinning skill, and the market for it all gone within a couple of generations.",
      "In the last decade, researchers and weavers in Bangladesh have worked to revive it \u2014 locating surviving wild relatives of phuti karpas, cross-referencing old herbarium samples, and retraining spinners in techniques that had nearly died out entirely. Modern revival muslin still can't fully replicate the finest historical examples, but it's closer than anyone expected to get.",
      "It's worth knowing this history even if you never buy a piece of muslin, because it's a reminder of how fragile a hand-skill tradition actually is. A technique held in a few thousand pairs of hands can vanish within one bad generation of trade policy. Keeping any handloom tradition alive today is, in a small way, insurance against that happening again."
    ]
  },
  {
    "slug": "tangail-weaving-tradition",
    "title": "Tangail: a district built on the handloom",
    "tag": "History",
    "date": "2026-05-08",
    "readTime": "6 min read",
    "image": "image/blog/tangail-weaving-tradition.jpeg",
    "excerpt": "Long before it had a name of its own in the saree trade, Tangail was a river district that happened to be very good at growing cotton and keeping looms running.",
    "content": [
      "Tangail's identity as a weaving centre is usually traced back several centuries, to Basak weaving families \u2014 originally Hindu artisan communities \u2014 who settled along the Jamuna and Dhaleshwari river system in what's now Tangail district. The rivers mattered for more than transport: cotton grown in the surrounding floodplain, combined with easy access to natural dyes and river trade routes to Dhaka and Kolkata, made the area a natural place for handloom weaving to concentrate and specialise.",
      "The Tangail saree as its own recognisable style \u2014 lighter than Banarasi silk, distinct in border pattern from Jamdani, and historically favoured for cotton and half-silk daily wear \u2014 developed gradually through the nineteenth and twentieth centuries as weaving families refined techniques passed within the community. Partition in 1947 and again in 1971 disrupted the weaving population significantly, as many Basak families relocated, but the craft itself stayed rooted in the district, passed on to the families and apprentices who remained and to newer weavers who took it up.",
      "Today, Tangail is one of the few places where you can still find a genuinely broad range of handloom output in one district \u2014 everyday cotton, half-silk, Jamdani-influenced motif work, and full Katan silk \u2014 often within neighbouring villages, sometimes within the same extended family working in different weaves across generations.",
      "It's also, worth saying plainly, the reason this site exists in its current form. A handloom marketplace built by someone from Tangail isn't a neutral business idea \u2014 it's closer to a way of pointing a camera at something that's been happening in the same district for longer than anyone selling online today has been alive.",
      "Visit the weaving villages around Tangail \u2014 Pathrail and Bajitpur are the two most associated with the craft \u2014 and the sound of a district still means something specific: dozens of pit looms running at once, audible from the road before you see a single house."
    ]
  }
];
