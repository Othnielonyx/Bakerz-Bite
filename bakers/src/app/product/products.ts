export interface Product {
  name: string;
  price: number;
  description: string;
  // imageName: string;
  path: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'Cookies',
    price: 10.99,
    description: 'Tree chocolate chips cookies',
    // imageName: 'product1.jpg',
    path: '../../assets/images/product1.jpg',
  },
  {
    name: 'Bread',
    price: 20.99,
    description: 'Loaf of sourdough bread',
    // imageName: 'product2.jpg',
    path: '../../assets/images/product2.jpg',
  },
  {
    name: 'Pies',
    price: 30.99,
    description: 'Delicious Cherry Pie',
    // imageName: 'product3.jpg',
    path: '../../assets/images/product3.jpg',
  },
  {
    name: 'Pastries',
    price: 40.99,
    description: 'Strawberry tartlet pastries',
    // imageName: 'product4.jpg',
    path: '../../assets/images/product4.jpg',
  },
  {
    name: 'Pastries',
    price: 50.99,
    description: 'Variety of french pastries',
    // imageName: 'product5.jpg',
    path: '../../assets/images/product5.jpg',
  },
  {
    name: 'Breeze Cakes',
    price: 60.99,
    description: 'Victoria andwich sponge cake',
    // imageName: 'product6.jpg',
    path: '../../assets/images/product6.jpg',
  },
  {
    name: 'Cupcakes',
    price: 70.99,
    description: 'Frosted cupcakes with swirls, sprinkles and drizzles',
    // imageName: 'product7.jpg',
    path: '../../assets/images/product7.jpg',
  },
  {
    name: 'Party Cakes',
    price: 80.99,
    description: 'Light chocolate birthday cake',
    // imageName: 'product8.jpg',
    path: '../../assets/images/product8.jpg',
  },
  {
    name: 'Sponge cakes',
    price: 90.99,
    description: 'Sponge cake with strawberries, blueberries and cream',
    // imageName: 'product9.jpg',
    path: '../../assets/images/product9.jpg',
  },
];
