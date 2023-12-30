const recipes = [
  {
    id: 0,
    name: "Spaghetti Bolognese",
    ingredients: [
      "500g ground beef",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 can (400g) crushed tomatoes",
      "1/2 cup tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "300g spaghetti",
      "Grated Parmesan cheese for serving",
    ],
    instructions: [
      "In a large pan, cook the ground beef over medium heat until browned. Drain excess fat.",
      "Add the chopped onion and minced garlic to the pan. Cook until the onion is softened.",
      "Stir in the crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20-30 minutes.",
      "While the sauce is simmering, cook the spaghetti according to package instructions. Drain.",
      "Serve the Bolognese sauce over the cooked spaghetti. Sprinkle with grated Parmesan cheese.",
      "Enjoy your delicious Spaghetti Bolognese!",
    ],
    imageUrl:
      "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg",
  },
  {
    id: 1,
    name: "Chicken Alfredo Pasta",
    ingredients: [
      "250g fettuccine pasta",
      "2 boneless, skinless chicken breasts, sliced",
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup grated Parmesan cheese",
      "Salt and pepper to taste",
      "Chopped parsley for garnish",
    ],
    instructions: [
      "Cook the fettuccine pasta according to package instructions. Drain and set aside.",
      "In a pan, cook the sliced chicken breasts in butter until fully cooked. Add minced garlic and cook until fragrant.",
      "Pour in the heavy cream and bring to a simmer. Stir in the Parmesan cheese until melted and smooth.",
      "Season with salt and pepper to taste. Add the cooked pasta and toss to coat in the sauce.",
      "Garnish with chopped parsley. Serve and enjoy your Chicken Alfredo Pasta!",
    ],
    imageUrl:
      "https://www.saltandlavender.com/wp-content/uploads/2020/04/chicken-fettuccine-alfredo-1.jpg",
  },
  {
    id: 2,
    name: "Vegetarian Stir-Fry",
    ingredients: [
      "2 cups broccoli florets",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "1 cup snap peas",
      "1 block firm tofu, cubed",
      "3 tablespoons soy sauce",
      "2 tablespoons sesame oil",
      "1 tablespoon hoisin sauce",
      "2 cloves garlic, minced",
      "1 teaspoon ginger, grated",
      "Cooked rice for serving",
    ],
    instructions: [
      "In a wok or pan, heat sesame oil over medium-high heat. Add garlic and ginger, sauté until fragrant.",
      "Add tofu cubes and cook until golden brown. Remove tofu from the pan and set aside.",
      "Stir-fry broccoli, bell pepper, carrot, and snap peas until vegetables are tender-crisp.",
      "Add cooked tofu back to the pan. Pour in soy sauce and hoisin sauce. Toss everything together.",
      "Serve the vegetarian stir-fry over cooked rice. Enjoy!",
    ],
    imageUrl:
      "https://peasandcrayons.com/wp-content/uploads/2020/12/vegetable-stir-fry-noodles-recipe-.jpg",
  },
  {
    id: 3,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "1/2 cup pizza sauce",
      "1 1/2 cups fresh mozzarella, sliced",
      "Fresh basil leaves",
      "Extra-virgin olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat your oven to the highest temperature (usually around 475°F or 245°C).",
      "Roll out the pizza dough on a floured surface to your desired thickness.",
      "Spread pizza sauce evenly over the dough, leaving a small border around the edges.",
      "Arrange fresh mozzarella slices on top. Add fresh basil leaves.",
      "Drizzle with extra-virgin olive oil and season with salt and pepper.",
      "Bake in the preheated oven until the crust is golden and the cheese is melted and bubbly.",
      "Remove from the oven, slice, and enjoy your Classic Margherita Pizza!",
    ],
    imageUrl:
      "https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1660843558&width=800",
  },
  {
    id: 4,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "2 cups chocolate chips",
    ],
    instructions: [
      "Preheat your oven to 375°F (190°C) and line a baking sheet with parchment paper.",

      "In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until smooth.",
      "Beat in the eggs one at a time, then stir in the vanilla extract.",
      "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "Fold in the chocolate chips.",
      "Drop rounded tablespoons of cookie dough onto the prepared baking sheet.",
      "Bake in the preheated oven for 10-12 minutes or until the edges are golden brown.",
      "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.",
      "Enjoy your delicious homemade Chocolate Chip Cookies!",
    ],
    imageUrl:
      "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg",
  },
]

const favWord = "favorites"
const historyWord = "history"

export { recipes, favWord, historyWord }
