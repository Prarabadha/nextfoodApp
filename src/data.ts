export type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  category: "pizza" | "pasta" | "burger";
  options?: { title: string; additionalPrice: number }[];
  quantity?: number;
};

export type Products = Product[];

export type Category = "pizza" | "pasta" | "burger";

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 124,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
    img: "/temporary/p2.png",
    price: 220,
    category: "burger",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 114,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/p4.png",
    price: 206,
    category: "pasta",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 288,
    category: "burger",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
    img: "/temporary/p6.png",
    price: 224,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
    img: "/temporary/p7.png",
    price: 128,
    category: "pasta",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 132,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
    img: "/temporary/p9.png",
    price: 129,
    category: "burger",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 204,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 132,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 126,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 228,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 124,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 99,
    category: "pizza",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

// export const singleProduct: Product = {
//   id: 1,
//   title: "Sicilian",
//   desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
//   img: "/temporary/p1.png",
//   price: 24.9,
//   options: [
//     {
//       title: "Small",
//       additionalPrice: 0,
//     },
//     {
//       title: "Medium",
//       additionalPrice: 4,
//     },
//     {
//       title: "Large",
//       additionalPrice: 6,
//     },
//   ],
// };

// type Menu = {
//   id: number;
//   slug: string;
//   title: string;
//   desc?: string;
//   img?: string;
//   color: string;
// }[];

// export const menu: Menu = [
//   {
//     id: 1,
//     slug: "pastas",
//     title: "Italian Pastas",
//     desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
//     img: "/temporary/m1.png",
//     color: "white",
//   },
//   {
//     id: 2,
//     slug: "burgers",
//     title: "Juicy Burgers",
//     desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
//     img: "/temporary/m2.png",
//     color: "black",
//   },
//   {
//     id: 3,
//     slug: "pizzas",
//     title: "Cheesy Pizzas",
//     desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
//     img: "/temporary/m3.png",
//     color: "white",
//   },
// ];

// Burger Products
export const burgers: Products = [
  {
    id: 101,
    title: "Bacon Deluxe",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
    img: "/temporary/p2.png",
    price: 129,
    category: "burger",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 102,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce, and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 228,
    category: "burger",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 103,
    title: "Hawaiian Teriyaki",
    desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
    img: "/temporary/p9.png",
    price: 229,
    category: "burger",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 104,
    title: "Classic American",
    desc: "A timeless all-American burger with a succulent beef patty, melted American cheese, crispy lettuce, ripe tomato, and savory onions, topped with special sauce on a toasted sesame bun.",
    img: "/temporary/p2.png",
    price: 222,
    category: "burger",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 105,
    title: "Mushroom Swiss",
    desc: "Savor the earthy flavors of sautéed mushrooms combined with creamy Swiss cheese, alongside a juicy beef patty and fresh vegetables on a soft brioche bun.",
    img: "/temporary/p2.png",
    price: 220,
    category: "burger",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 106,
    title: "Double Stack Delight",
    desc: "Experience double the pleasure with two succulent beef patties, double the cheese, bacon, lettuce, tomato, and a special sauce that brings it all together perfectly.",
    img: "/temporary/p2.png",
    price: 122,
    category: "burger",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
];

// Pasta Products
export const pastas: Products = [
  {
    id: 201,
    title: "Spicy Arrabbiata",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/p4.png",
    price: 126,
    category: "pasta",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 202,
    title: "Garlic Parmesan Linguine",
    desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
    img: "/temporary/p7.png",
    price: 218,
    category: "pasta",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 203,
    title: "Creamy Carbonara",
    desc: "Indulge in this classic Roman pasta featuring fettuccine tossed with a rich egg and cream sauce, crispy pancetta, and a generous sprinkle of Pecorino Romano cheese.",
    img: "/temporary/pasta2.jpg",
    price: 127,
    category: "pasta",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 204,
    title: "Basil Pesto Tagliatelle",
    desc: "Fresh tagliatelle pasta coated in vibrant homemade basil pesto, topped with toasted pine nuts, cherry tomatoes, fresh mozzarella, and a drizzle of premium olive oil.",
    img: "/temporary/p7.png",
    price: 229,
    category: "pasta",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 205,
    title: "Seafood Marinara",
    desc: "A delightful combination of tender shrimp, mussels, and squid tossed with linguine in a light tomato and white wine sauce, finished with fresh parsley and garlic.",
    img: "/temporary/pasta3.jpg",
    price: 131,
    category: "pasta",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 206,
    title: "Artichoke & Herb Rigoni",
    desc: "Hearty rigatoni pasta mixed with tender artichoke hearts, fresh herbs, roasted garlic, and a touch of cream, topped with Parmesan cheese and fresh breadcrumbs.",
    img: "/temporary/pasta4.jpg",
    price: 220,
    category: "pasta",
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
];

export const CATEGORIES = [
  {
    id: "pizza",
    name: "Pizza",
    description: "Delicious Italian pizzas with authentic flavors",
  },
  {
    id: "burger",
    name: "Burger",
    description: "Juicy burgers with gourmet toppings",
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Authentic Italian pasta dishes",
  },
];

export const getProductsByCategory = (category: Category): Products => {
  switch (category) {
    case "pizza":
      return pizzas;
    case "burger":
      return burgers;
    case "pasta":
      return pastas;
    default:
      return [];
  }
};
