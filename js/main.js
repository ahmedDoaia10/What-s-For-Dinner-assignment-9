

var meals = [
    // * ------- Meal 1 -----------* //
    {
        name: "Caesar Salad",
        desc: "Classic salad with crispy romaine and creamy dressing",
        difficulty: "Easy",
        region: "Mediterranean",
        rating: 4.4,
        reviews: 198,
        prepTime: 15,
        cookTime: 0,
        servings: 2,
        ingredients: ["1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese, shaved"
            , "1 cup croutons"
            , "2 anchovy fillets (optional)"
            , "Lemon wedges",
            "Black pepper",
        ],
        instructions: [
            "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper.",
        ],
        nutrition: {
            calories: 320,
            Protein: 12,
            carbohydrates: 18,
            fat: 22,
            fiber: 3,
            sodium: 680,
        },

        ChefsTips: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve",
        ],

        imgSource: "img/photo-1546793665-c74683f339c1.avif",
    },

    // * ------- Meal 2 -----------* //

    {
        name: "Vegetable Curry",
        desc: "Hearty vegetable curry cooked with aromatic spices and coconut milk",
        difficulty: "Easy",
        region: "Indian",
        rating: 4.3,
        reviews: 245,
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        isExtended: true,
        ingredients: [
            "Mixed vegetables (potato, carrot, peas, cauliflower)",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp curry powder",
            "1 tsp turmeric",
            "1 cup coconut milk",
            "2 tbsp vegetable oil",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Add onions and garlic, sauté until fragrant.",
            "Add spices and stir for 1 minute.",
            "Add vegetables and mix well.",
            "Pour in coconut milk and simmer until vegetables are tender."
        ],
        nutrition: {
            calories: 390,
            Protein: 11,
            carbohydrates: 46,
            fat: 19,
            fiber: 9,
            sodium: 610
        },
        ChefsTips: [
            "Use fresh spices for stronger flavor",
            "Add chickpeas for extra protein",
            "Serve with basmati rice",
            "Adjust spice level to taste"
        ],
        imgSource: "img/photo-1585032226651-759b368d7246.avif",
    },

    // * ------- Meal 3 -----------* //
    {
        name: "Chicken Tikka Masala",
        desc: "Tender grilled chicken simmered in creamy spiced tomato sauce",
        difficulty: "Medium",
        region: "Indian",
        rating: 4.8,
        reviews: 520,
        prepTime: 30,
        cookTime: 35,
        servings: 4,
        ingredients: [
            "Chicken breast cubes",
            "1 cup yogurt",
            "Tomato puree",
            "Garam masala",
            "Garlic & ginger paste",
            "Heavy cream",
            "Butter"
        ],
        instructions: [
            "Marinate chicken in yogurt and spices for 1 hour.",
            "Grill chicken until slightly charred.",
            "Prepare masala sauce in pan.",
            "Add grilled chicken to sauce.",
            "Simmer until flavors combine."
        ],
        nutrition: {
            calories: 460,
            Protein: 32,
            carbohydrates: 22,
            fat: 27,
            fiber: 4,
            sodium: 780
        },
        ChefsTips: [
            "Marinate overnight for best taste",
            "Chicken thighs are juicier",
            "Finish with cream and butter",
            "Serve with naan bread"
        ],
        imgSource: " img/photo-1565557623262-b51c2513a641.avif",
    },

    // * ------- Meal 4 -----------* //
    {
        name: "Pad Thai",
        desc: "Classic Thai stir-fried rice noodles with sweet and tangy sauce",
        difficulty: "Medium",
        region: "Thai",
        rating: 4.6,
        reviews: 340,
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        ingredients: [
            "Rice noodles",
            "Shrimp or chicken",
            "Eggs",
            "Bean sprouts",
            "Pad Thai sauce",
            "Crushed peanuts",
            "Lime wedges"
        ],
        instructions: [
            "Soak noodles until soft.",
            "Cook protein in hot wok.",
            "Add eggs and scramble.",
            "Add noodles and sauce.",
            "Toss well and garnish with peanuts."
        ],
        nutrition: {
            calories: 430,
            Protein: 19,
            carbohydrates: 54,
            fat: 16,
            fiber: 3,
            sodium: 720
        },
        ChefsTips: [
            "Prep everything before cooking",
            "Use high heat",
            "Do not overcook noodles",
            "Serve immediately"
        ],
        imgSource: "img/photo-1559314809-0d155014e29e.avif",
    },

    // * ------- Meal 5 -----------* //
    {
        name: "Chicken Stir-Fry",
        desc: "Quick stir-fried chicken with fresh vegetables and soy sauce",
        difficulty: "Easy",
        region: "Asian",
        rating: 4.2,
        reviews: 190,
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        ingredients: [
            "Chicken breast strips",
            "Bell peppers",
            "Broccoli",
            "Soy sauce",
            "Garlic",
            "Sesame oil"
        ],
        instructions: [
            "Heat oil in pan.",
            "Cook chicken until golden.",
            "Add vegetables and stir-fry.",
            "Add soy sauce and toss.",
            "Serve hot."
        ],
        nutrition: {
            calories: 350,
            Protein: 28,
            carbohydrates: 18,
            fat: 14,
            fiber: 4,
            sodium: 650
        },
        ChefsTips: [
            "Cut ingredients evenly",
            "High heat is essential",
            "Don’t overcrowd pan",
            "Serve with rice"
        ],
        imgSource: "img/photo-1603133872878-684f208fb84b.avif",
    },

    // * ------- Meal 6 -----------* //
    {
        name: "Caprese Sandwich",
        desc: "Italian sandwich with fresh mozzarella, tomatoes, and basil",
        difficulty: "Easy",
        region: "Italian",
        rating: 4.4,
        reviews: 210,
        prepTime: 12,
        cookTime: 0,
        servings: 1,
        ingredients: [
            "Ciabatta bread",
            "Fresh mozzarella",
            "Ripe tomato",
            "Fresh basil",
            "Olive oil",
            "Salt & pepper"
        ],
        instructions: [
            "Slice bread and ingredients.",
            "Layer mozzarella and tomato.",
            "Season and add basil.",
            "Drizzle olive oil and serve."
        ],
        nutrition: {
            calories: 360,
            Protein: 16,
            carbohydrates: 36,
            fat: 17,
            fiber: 4,
            sodium: 560
        },
        ChefsTips: [
            "Use fresh mozzarella",
            "Serve immediately",
            "Light toasting adds crunch",
            "Balsamic glaze is optional"
        ],
        imgSource: "img/photo-1509722747041-616f39b57569.avif",
    },

    // * ------- Meal 7 -----------* //
    {
        name: "Thai Green Curry",
        desc: "Spicy Thai green curry with coconut milk and tender chicken",
        difficulty: "Medium",
        region: "Thai",
        rating: 4.5,
        reviews: 270,
        prepTime: 20,
        cookTime: 25,
        servings: 3,
        ingredients: [
            "Green curry paste",
            "Chicken breast",
            "Coconut milk",
            "Thai eggplant",
            "Bell peppers",
            "Fish sauce",
            "Fresh basil"
        ],
        instructions: [
            "Heat curry paste in a pan.",
            "Add coconut milk and stir.",
            "Add chicken and vegetables.",
            "Simmer until cooked.",
            "Finish with basil."
        ],
        nutrition: {
            calories: 420,
            Protein: 24,
            carbohydrates: 20,
            fat: 28,
            fiber: 5,
            sodium: 730
        },
        ChefsTips: [
            "Adjust spice to taste",
            "Use fresh basil",
            "Serve with jasmine rice",
            "Do not boil coconut milk"
        ],
        imgSource: "img/photo-1455619452474-d2be8b1e70cd.avif",
    },

    // * ------- Meal 8 -----------* //
    {
        name: "Mediterranean Quinoa Bowl",
        desc: "Healthy quinoa bowl with fresh vegetables and feta cheese",
        difficulty: "Easy",
        region: "Mediterranean",
        rating: 4.4,
        reviews: 180,
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        isExtended: true,
        ingredients: [
            "Quinoa",
            "Cucumber",
            "Cherry tomatoes",
            "Feta cheese",
            "Olives",
            "Olive oil",
            "Lemon juice"
        ],
        instructions: [
            "Cook quinoa and let cool.",
            "Chop vegetables.",
            "Mix all ingredients.",
            "Season with oil and lemon."
        ],
        nutrition: {
            calories: 360,
            Protein: 13,
            carbohydrates: 42,
            fat: 14,
            fiber: 7,
            sodium: 520
        },
        ChefsTips: [
            "Serve chilled",
            "Add grilled chicken if desired",
            "Use fresh lemon juice",
            "Perfect for meal prep"
        ],
        imgSource: "img/photo-1546069901-ba9599a7e63c.avif",
    },

    // * ------- Meal 9 -----------* //
    {
        name: "BBQ Pulled Pork",
        desc: "Slow-cooked pork shoulder shredded and mixed with BBQ sauce",
        difficulty: "Medium",
        region: "American",
        rating: 4.7,
        reviews: 420,
        prepTime: 20,
        cookTime: 180,
        servings: 6,
        isExtended: true,
        ingredients: [
            "Pork shoulder",
            "BBQ sauce",
            "Paprika",
            "Garlic powder",
            "Onion powder",
            "Salt & pepper"
        ],
        instructions: [
            "Season pork generously.",
            "Slow cook until tender.",
            "Shred pork using forks.",
            "Mix with BBQ sauce."
        ],
        nutrition: {
            calories: 510,
            Protein: 38,
            carbohydrates: 18,
            fat: 32,
            fiber: 1,
            sodium: 820
        },
        ChefsTips: [
            "Low and slow is key",
            "Rest meat before shredding",
            "Great for sandwiches",
            "Use homemade BBQ sauce"
        ],
        imgSource: "img/photo-1529692236671-f1f6cf9683ba.avif",
    },

    // * ------- Meal 10 -----------* //
    {
        name: "Creamy Spaghetti Carbonara",
        desc: "Classic Italian pasta with eggs, cheese, and crispy bacon",
        difficulty: "Medium",
        region: "Italian",
        rating: 4.8,
        reviews: 610,
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        ingredients: [
            "Spaghetti",
            "Egg yolks",
            "Parmesan cheese",
            "Bacon",
            "Black pepper"
        ],
        instructions: [
            "Cook spaghetti until al dente.",
            "Cook bacon until crispy.",
            "Mix eggs and cheese.",
            "Combine pasta with sauce off heat."
        ],
        nutrition: {
            calories: 540,
            Protein: 22,
            carbohydrates: 60,
            fat: 26,
            fiber: 3,
            sodium: 780
        },
        ChefsTips: [
            "Do not scramble eggs",
            "Use pasta water if needed",
            "Freshly ground pepper",
            "Serve immediately"
        ],
        imgSource: "img/photo-1612874742237-6526221588e3.avif",
    },

    // * ------- Meal 11 -----------* //
    {
        name: "Honey Garlic Salmon",
        desc: "Pan-seared salmon glazed with sweet honey garlic sauce",
        difficulty: "Easy",
        region: "Asian",
        rating: 4.6,
        reviews: 295,
        prepTime: 10,
        cookTime: 12,
        servings: 2,
        ingredients: [
            "Salmon fillets",
            "Honey",
            "Garlic",
            "Soy sauce",
            "Lemon juice"
        ],
        instructions: [
            "Season salmon.",
            "Sear salmon in pan.",
            "Add honey garlic sauce.",
            "Glaze and serve."
        ],
        nutrition: {
            calories: 420,
            Protein: 34,
            carbohydrates: 18,
            fat: 24,
            fiber: 0,
            sodium: 610
        },
        ChefsTips: [
            "Do not overcook salmon",
            "Use skin-on fillets",
            "Balance sweet and salty",
            "Serve with rice"
        ],
        imgSource: "img/photo-1467003909585-2f8a72700288.avif",
    },

    // * ------- Meal 12 -----------* //
    {
        name: "Beef Tacos",
        desc: "Mexican-style tacos filled with seasoned ground beef",
        difficulty: "Easy",
        region: "Mexican",
        rating: 4.5,
        reviews: 380,
        prepTime: 15,
        cookTime: 15,
        servings: 3,
        ingredients: [
            "Ground beef",
            "Taco shells",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Taco seasoning"
        ],
        instructions: [
            "Cook beef with seasoning.",
            "Warm taco shells.",
            "Assemble tacos with toppings."
        ],
        nutrition: {
            calories: 470,
            Protein: 26,
            carbohydrates: 38,
            fat: 24,
            fiber: 4,
            sodium: 760
        },
        ChefsTips: [
            "Warm shells before serving",
            "Add fresh salsa",
            "Do not overfill",
            "Serve immediately"
        ],
        imgSource: "img/photo-1565299585323-38d6b0865b47.avif",
    },

    // * ------- Meal 13 -----------* //
    {
        name: "Classic Beef Burger",
        desc: "Juicy grilled beef burger with cheese and fresh toppings",
        difficulty: "Easy",
        region: "American",
        rating: 4.7,
        reviews: 520,
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        ingredients: [
            "Beef patty",
            "Burger bun",
            "Cheese slice",
            "Lettuce",
            "Tomato",
            "Onion"
        ],
        instructions: [
            "Season beef patty.",
            "Grill until desired doneness.",
            "Assemble burger with toppings."
        ],
        nutrition: {
            calories: 560,
            Protein: 30,
            carbohydrates: 36,
            fat: 34,
            fiber: 2,
            sodium: 820
        },
        ChefsTips: [
            "Do not press the patty",
            "Let meat rest",
            "Toast buns lightly",
            "Use high-quality beef"
        ],
        imgSource: "img/photo-1568901346375-23c9450c58cd.avif",
    },

    // * ------- Meal 14 -----------* //
    {
        name: "Teriyaki Chicken Bowl",
        desc: "Tender chicken glazed with teriyaki sauce served over rice",
        difficulty: "Easy",
        region: "Japanese",
        rating: 4.4,
        reviews: 265,
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        ingredients: [
            "Chicken breast",
            "Teriyaki sauce",
            "Steamed rice",
            "Green onions",
            "Sesame seeds"
        ],
        instructions: [
            "Cook chicken until golden.",
            "Add teriyaki sauce.",
            "Serve over rice and garnish."
        ],
        nutrition: {
            calories: 480,
            Protein: 29,
            carbohydrates: 52,
            fat: 18,
            fiber: 3,
            sodium: 740
        },
        ChefsTips: [
            "Use fresh rice",
            "Do not burn sauce",
            "Garnish adds flavor",
            "Serve hot"
        ],
        imgSource: "img/photo-1546069901-eacef0df6022.avif",
    },

    // * ------- Meal 15 -----------* //
    {
        name: "Margherita Pizza",
        desc: "Classic Italian pizza with tomato sauce, mozzarella and basil",
        difficulty: "Medium",
        region: "Italian",
        rating: 4.7,
        reviews: 430,
        prepTime: 30,
        cookTime: 15,
        servings: 2,
        isExtended: true,
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella",
            "Basil leaves",
            "Olive oil"
        ],
        instructions: [
            "Preheat oven.",
            "Prepare dough.",
            "Add toppings.",
            "Bake until golden."
        ],
        nutrition: {
            calories: 500,
            Protein: 21,
            carbohydrates: 58,
            fat: 22,
            fiber: 4,
            sodium: 720
        },
        ChefsTips: [
            "Hot oven is crucial",
            "Do not overload toppings",
            "Use fresh mozzarella",
            "Let pizza rest before slicing"
        ],
        imgSource: "img/photo-1574071318508-1cdbab80d002.avif",
    },

    // * ------- Meal 16 -----------* //
    {
        name: "Lasagna Bolognese",
        desc: "Traditional Italian lasagna layered with rich meat sauce",
        difficulty: "Hard",
        region: "Italian",
        rating: 4.9,
        reviews: 690,
        prepTime: 40,
        cookTime: 50,
        servings: 6,
        isExtended: true,
        ingredients: [
            "Lasagna sheets",
            "Ground beef",
            "Tomato sauce",
            "Ricotta cheese",
            "Mozzarella cheese"
        ],
        instructions: [
            "Prepare meat sauce.",
            "Layer pasta and sauce.",
            "Bake until bubbly.",
            "Let rest before serving."
        ],
        nutrition: {
            calories: 610,
            Protein: 34,
            carbohydrates: 48,
            fat: 32,
            fiber: 5,
            sodium: 860
        },
        ChefsTips: [
            "Rest before slicing",
            "Use fresh pasta if possible",
            "Don’t skip cheese layers",
            "Bake until golden"
        ],
        imgSource: "img/photo-1574894709920-11b28e7367e3.avif",
    },

    // * ------- Meal 17 -----------* //
    {
        name: "French Onion Soup",
        desc: "Classic French soup with caramelized onions and melted cheese",
        difficulty: "Medium",
        region: "French",
        rating: 4.3,
        reviews: 230,
        prepTime: 15,
        cookTime: 40,
        servings: 3,
        isExtended: true,
        ingredients: [
            "Onions",
            "Beef broth",
            "Butter",
            "Baguette",
            "Gruyere cheese"
        ],
        instructions: [
            "Caramelize onions slowly.",
            "Add broth and simmer.",
            "Top with bread and cheese.",
            "Broil until melted."
        ],
        nutrition: {
            calories: 310,
            Protein: 12,
            carbohydrates: 28,
            fat: 14,
            fiber: 3,
            sodium: 690
        },
        ChefsTips: [
            "Be patient with onions",
            "Use quality cheese",
            "Serve hot",
            "Perfect winter dish"
        ],
        imgSource: "img/photo-1547592166-23ac45744acd.avif",
    },

    // * ------- Meal 18 -----------* //
    {
        name: "Shrimp Scampi",
        desc: "Garlic butter shrimp cooked with lemon and herbs",
        difficulty: "Easy",
        region: "Italian",
        rating: 4.6,
        reviews: 320,
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        ingredients: [
            "Shrimp",
            "Garlic",
            "Butter",
            "Lemon juice",
            "Parsley"
        ],
        instructions: [
            "Sauté garlic in butter.",
            "Add shrimp and cook.",
            "Finish with lemon juice.",
            "Garnish and serve."
        ],
        nutrition: {
            calories: 410,
            Protein: 30,
            carbohydrates: 8,
            fat: 26,
            fiber: 1,
            sodium: 640
        },
        ChefsTips: [
            "Use fresh shrimp",
            "Do not overcook",
            "Serve immediately",
            "Great with pasta"
        ],
        imgSource: "img/photo-1633504581786-316c8002b1b9.avif",
    },

    // * ------- Meal 19 -----------* //
    {
        name: "Greek Moussaka",
        desc: "Traditional Greek baked dish layered with eggplant, spiced meat sauce, and creamy béchamel",
        difficulty: "Hard",
        region: "Greek",
        rating: 4.8,
        reviews: 455,
        prepTime: 40,
        cookTime: 60,
        servings: 6,
        isExtended: true,
        ingredients: [
            "2 large eggplants, sliced",
            "500g ground beef or lamb",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "2 cups tomato sauce",
            "1 tsp cinnamon",
            "1 tsp dried oregano",
            "Olive oil",
            "Salt and black pepper",
            "2 cups béchamel sauce",
            "Grated parmesan or kefalotyri cheese"
        ],
        instructions: [
            "Slice eggplants, season lightly with salt, and grill or fry until golden.",
            "Heat olive oil in a pan and sauté onion and garlic until soft.",
            "Add ground meat and cook until browned.",
            "Stir in tomato sauce, cinnamon, oregano, salt, and pepper.",
            "Simmer meat sauce for 20 minutes until thickened.",
            "Preheat oven to 180°C (350°F).",
            "Layer eggplant slices in a baking dish.",
            "Spread meat sauce evenly over eggplant.",
            "Add another layer of eggplant.",
            "Pour béchamel sauce on top and sprinkle with cheese.",
            "Bake until golden and bubbling.",
            "Let rest for 15 minutes before slicing and serving."
        ],
        nutrition: {
            calories: 620,
            Protein: 32,
            carbohydrates: 28,
            fat: 42,
            fiber: 6,
            sodium: 780
        },
        ChefsTips: [
            "Let moussaka rest before cutting to keep layers intact",
            "Grilling eggplant reduces oil absorption",
            "Cinnamon adds authentic Greek flavor",
            "Serve with a fresh Greek salad"
        ],
        imgSource: "img/photo-1601050690597-df0568f70950.avif",
    }
]



function test() {

    var randomNum = Math.floor(Math.random() * meals.length)
    console.log(meals[randomNum]);

    var respies = meals[randomNum];
    // document.getElementById("name").innerHTML = meals[randomNum].name
    // document.getElementById("desc").innerHTML = meals[randomNum].desc
    // document.getElementById("difficulty").innerHTML = meals[randomNum].difficulty
    // document.getElementById("region").innerHTML = meals[randomNum].region
    // document.getElementById("rating").innerHTML = meals[randomNum].rating
    // document.getElementById("reviews").innerHTML = meals[randomNum].reviews
    // document.getElementById("prepTime").innerHTML = meals[randomNum].prepTime
    // document.getElementById("cookTime").innerHTML = meals[randomNum].cookTime
    // document.getElementById("servings").innerHTML = meals[randomNum].servings
    // document.getElementById("isExtended").innerHTML = meals[randomNum].isExtended
    // document.getElementById("ingredients").innerHTML = meals[randomNum].ingredients


    document.getElementById("recipe").innerHTML = `
     
                <div class="img-holder  position-relative">
                    <img id="imgSource" src="${respies.imgSource}" alt="Caesar Salad"
                        class="img-fluid h-100 object-fit-cover" />

                    <div class="badge bg-white position-absolute top-0 start-0 p-3 rounded-5 mt-3 ms-4">
                        <span id="rating" class="text-black"><i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${respies.rating}</span>
                        <span class="text-secondary fw-normal"> (
                            <span id="reviews">${respies.reviews}</span>
                            reviews)
                        </span>
                    </div>
                    <div
                    
                        class="row bg-white position-absolute bottom-0 start-50 translate-middle-x w-75 text-center text-capitalize rounded mb-5 d-flex align-items-center ">
                        <div class="col-md-4">
                            <h3 class="h6" prep Time></h3>
                            <p class="fw-medium">
                                <span id="prepTime"><i class="fa-solid fa-clock fs-5" style="color: #FF6900;"></i> ${respies.prepTime} </span>
                                min
                            </p>
                        </div>
                        <div class="col-md-4">
                            <h3 class="h6" cook Time></h3>
                            <p class="fw-medium">
                                <span id="cookTime"><i class="fa-solid fa-fire-burner fs-5" style="color: #FF0000;"></i> ${respies.cookTime}</span>
                                min
                            </p>
                        </div>
                        <div class="col-md-4">
                            <h3 class="h6" Servings></h3>
                            <p class="fw-medium">
                                <span id="servings"><i class="fa-solid fa-users fs-5" style="color: #2B7FFF;"></i> ${respies.servings}</span>
                                people
                            </p>
                        </div>
                    </div>
                </div>







                <div class="content-holder position-relative">
                    <span id="difficulty" class="bg-success badge ">${respies.difficulty}</span>
                    <span id="region" class="bg-primary badge">${respies.region}</span>
                    <h2 id="name">${respies.name}</h2>
                    <p id="desc" class="text-p">${respies.desc}</p>
                    <div id="isExtended" class="bg-danger text-white rounded rounded-2 p-2 mb-2">
                    
                        <h5>Extended Preparation Time</h5>
                        <p >This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                       
                    </div>
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                        data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2"
                        tabindex="0">
                        <h4>ingredients</h4>
                        <p id="ingredients">"2 large eggplants, sliced",
                           ${respies.ingredients}</p>
                        <h4>instructions</h4>
                        <p id="instructions"> ${respies.instructions}</p>

                        <h4>nutrition</h4>
                        <p id="nutrition"> ${respies.nutrition}</p>
                        <h4>ChefsTips</h4>
                        <p id="ChefsTips"> ${respies.ChefsTips}</p>
                        ]
                    </div>




                    <button onclick="test()" class=" Test position-absolute   ">
                        <i class="fa-solid fa-rotate fa-fade" style="color: #ffffff;"></i>
                        Try Another Recipe
                    </button>
                </div>
            </div>

    `


if(meals.isExtended) {
document.getElementById("isExtended").classList.remove("d-done");
}else{
    document.getElementById("isExtended").classList.add("d-block");

}
    





}

